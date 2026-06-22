import { useState, useRef, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import './Admin.css'

const CATEGORIES = [
  'Read Your Partner',
  'Attraction Signals',
  'Workplace and Career',
  'Spot a Liar',
  'Read Emotions',
  'First Impressions',
  'Micro-Expression Expert',
]

const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

export default function Admin() {
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalysing, setIsAnalysing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState(['', '', '', ''])
  const [correct, setCorrect] = useState(0)
  const [fact, setFact] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0])
  const [episode, setEpisode] = useState('')
  const [status, setStatus] = useState(null)

  const fileInputRef = useRef(null)

  const handleFileSelect = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = (e) => setImagePreview(e.target.result)
    reader.readAsDataURL(file)
    setQuestion('')
    setAnswers(['', '', '', ''])
    setCorrect(0)
    setFact('')
    setStatus(null)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileSelect(e.dataTransfer.files[0])
  }, [handleFileSelect])

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleAnalyse = async () => {
    if (!imageFile) return
    setIsAnalysing(true)
    setStatus(null)
    try {
      const base64 = imagePreview.split(',')[1]
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': import.meta.env.VITE_CLAUDE_API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-opus-4-8',
          max_tokens: 1024,
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image',
                  source: { type: 'base64', media_type: imageFile.type, data: base64 },
                },
                {
                  type: 'text',
                  text: `Analyse the body language in this image and generate a quiz question for a body language reading app.

Return ONLY a JSON object with this exact structure — no markdown, no explanation:
{
  "question": "What does this body language signal?",
  "answers": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 0,
  "fact": "Educational explanation of what this body language means and why."
}

Rules:
- question: a clear, engaging question about what the body language signals
- answers: exactly 4 plausible options, only one correct
- correct: 0-based index of the correct answer
- fact: 1–2 sentences on the psychology or science behind it`,
                },
              ],
            },
          ],
        }),
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error?.message || `API error ${response.status}`)
      }

      const data = await response.json()
      const parsed = JSON.parse(data.content[0].text)
      setQuestion(parsed.question || '')
      setAnswers(Array.isArray(parsed.answers) ? parsed.answers : ['', '', '', ''])
      setCorrect(typeof parsed.correct === 'number' ? parsed.correct : 0)
      setFact(parsed.fact || '')
    } catch (err) {
      setStatus({ type: 'error', message: `Analysis failed: ${err.message}` })
    } finally {
      setIsAnalysing(false)
    }
  }

  const handleSave = async () => {
    if (!imageFile || !question.trim() || !episode.trim()) {
      setStatus({ type: 'error', message: 'Image, question, and episode name are all required.' })
      return
    }
    setIsSaving(true)
    setStatus(null)
    try {
      const ext = imageFile.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

      // Step 1 — storage upload
      console.log('[Admin] Uploading image:', fileName, imageFile.type, imageFile.size, 'bytes')
      const { error: uploadError } = await supabase.storage
        .from('question-images')
        .upload(fileName, imageFile, { contentType: imageFile.type })

      if (uploadError) {
        console.error('[Admin] Storage upload failed:', uploadError)
        throw new Error(`Storage upload failed: ${uploadError.message}`)
      }
      console.log('[Admin] Upload succeeded')

      const { data: urlData } = supabase.storage
        .from('question-images')
        .getPublicUrl(fileName)

      // Step 2 — questions table insert
      const payload = {
        episode: episode.trim(),
        category,
        difficulty: difficulty.toLowerCase(),
        image_url: urlData.publicUrl,
        question: question.trim(),
        answer_a: answers[0],
        answer_b: answers[1],
        answer_c: answers[2],
        answer_d: answers[3],
        correct_answer: answers[correct],
        fact: fact.trim(),
      }
      console.log('[Admin] Inserting into questions table:', payload)

      const { error: insertError } = await supabase.from('questions').insert(payload)

      if (insertError) {
        console.error('[Admin] Table insert failed:', insertError)
        throw new Error(`Table insert failed: ${insertError.message}`)
      }
      console.log('[Admin] Insert succeeded')

      setStatus({ type: 'success', message: 'Question saved successfully!' })
      setImageFile(null)
      setImagePreview(null)
      setQuestion('')
      setAnswers(['', '', '', ''])
      setCorrect(0)
      setFact('')
      setEpisode('')
    } catch (err) {
      setStatus({ type: 'error', message: `Save failed: ${err.message}` })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <main className="admin">
      <div className="admin-container">
        <header className="admin-header">
          <h1 className="admin-title">Admin — Upload Question</h1>
          <p className="admin-subtitle">Analyse an image with Claude and save it to Supabase</p>
        </header>

        {/* Image upload */}
        <section className="admin-card">
          <h2 className="admin-section-title">Image</h2>
          <div
            className={`upload-zone${isDragging ? ' dragging' : ''}${imagePreview ? ' has-image' : ''}`}
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={() => setIsDragging(false)}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="upload-preview" />
            ) : (
              <div className="upload-placeholder">
                <span className="upload-icon">⬆</span>
                <p>Click to select or drag &amp; drop an image</p>
                <p className="upload-hint">PNG, JPG, WEBP supported</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(e.target.files[0])}
            style={{ display: 'none' }}
          />
          {imageFile && (
            <div className="upload-actions">
              <span className="upload-filename">{imageFile.name}</span>
              <button className="btn-analyse" onClick={handleAnalyse} disabled={isAnalysing}>
                {isAnalysing ? (
                  <><span className="spinner" /> Analysing…</>
                ) : (
                  'Analyse Image'
                )}
              </button>
            </div>
          )}
        </section>

        {/* Generated content */}
        <section className="admin-card">
          <h2 className="admin-section-title">Question Content</h2>

          <label className="admin-label">
            Question
            <textarea
              className="admin-input admin-textarea"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What does this body language signal?"
              rows={2}
            />
          </label>

          <div className="answers-grid">
            {answers.map((ans, i) => (
              <label key={i} className="admin-label">
                <span className="answer-header">
                  Answer {String.fromCharCode(65 + i)}
                  <label className="correct-toggle">
                    <input
                      type="radio"
                      name="correct"
                      checked={correct === i}
                      onChange={() => setCorrect(i)}
                    />
                    Correct
                  </label>
                </span>
                <input
                  className={`admin-input${correct === i ? ' correct-answer' : ''}`}
                  value={ans}
                  onChange={(e) => {
                    const updated = [...answers]
                    updated[i] = e.target.value
                    setAnswers(updated)
                  }}
                  placeholder={`Option ${String.fromCharCode(65 + i)}`}
                />
              </label>
            ))}
          </div>

          <label className="admin-label">
            Explanatory Fact
            <textarea
              className="admin-input admin-textarea"
              value={fact}
              onChange={(e) => setFact(e.target.value)}
              placeholder="The science or psychology behind the correct answer…"
              rows={3}
            />
          </label>
        </section>

        {/* Metadata */}
        <section className="admin-card">
          <h2 className="admin-section-title">Metadata</h2>
          <div className="meta-grid">
            <label className="admin-label">
              Category
              <select
                className="admin-input admin-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>

            <label className="admin-label">
              Difficulty
              <select
                className="admin-input admin-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </label>

            <label className="admin-label meta-full">
              Episode Name
              <input
                className="admin-input"
                value={episode}
                onChange={(e) => setEpisode(e.target.value)}
                placeholder="e.g. Body Language Basics Beginner"
              />
            </label>
          </div>
        </section>

        {status && (
          <div className={`admin-status ${status.type}`} role="alert">
            {status.message}
          </div>
        )}

        <button
          className="btn-save"
          onClick={handleSave}
          disabled={isSaving || !imageFile || !question.trim()}
        >
          {isSaving ? 'Saving…' : 'Save Question'}
        </button>
      </div>
    </main>
  )
}
