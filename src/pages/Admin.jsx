import { useState, useRef, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import './Admin.css'

const SESSION_KEY = 'admin_authed'

const CATEGORIES = [
  'Read Your Partner',
  'Attraction Signals',
  'Workplace & Career',
  'Spot a Liar',
  'Read Emotions',
  'First Impressions',
  'Micro-Expression Expert',
]

const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1')
      onSuccess()
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-brand">BodyLanguageIQ</div>
        <h1 className="admin-login-title">Admin Access</h1>
        <form className="admin-login-form" onSubmit={handleLogin}>
          <label className="admin-label">
            Password
            <input
              className="admin-input"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(null) }}
              placeholder="Enter password"
              autoFocus
            />
          </label>
          {error && <p className="admin-login-error">{error}</p>}
          <button className="btn-save" type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}

function AdminContent({ onLogout }) {
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

    if (!category || !difficulty) {
      setStatus({ type: 'error', message: 'Please select both Category and Difficulty before analysing.' })
      return
    }

    setIsAnalysing(true)
    setStatus(null)
    try {
      const base64 = imagePreview.split(',')[1]
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: `You are a body language expert creating questions for an interactive quiz. This image is for the "${category}" category at ${difficulty} difficulty level.

CRITICAL: The question and answers MUST be specifically about ${category}, NOT generic body language. Follow these category-specific guidelines:

${category === 'Attraction Signals' ? '- Focus ONLY on romantic interest, flirting cues, and attraction signals. Do NOT create generic body language questions.' : ''}
${category === 'Read Your Partner' ? '- Focus ONLY on intimate relationship dynamics, partner communication, and couple body language. Do NOT create generic questions.' : ''}
${category === 'Workplace & Career' ? '- Focus ONLY on professional settings, office dynamics, business interactions, and career-related signals. Do NOT create generic questions.' : ''}
${category === 'Spot a Liar' ? '- Focus ONLY on deception detection, dishonesty cues, and lying indicators. Do NOT create generic questions.' : ''}
${category === 'Read Emotions' ? '- Focus ONLY on emotional states, feelings, and mood indicators. Do NOT create generic questions.' : ''}
${category === 'First Impressions' ? '- Focus ONLY on initial meeting signals, introduction dynamics, and first-encounter body language. Do NOT create generic questions.' : ''}
${category === 'Micro-Expression Expert' ? '- Focus ONLY on rapid facial expressions, fleeting emotional signals, and brief involuntary reactions. Do NOT create generic questions.' : ''}

Analyse the specific body language signals shown in this image that are relevant to ${category}. Write a question and four answer options that are specifically tailored to ${category}, not generic body language descriptions.

Return a JSON object only with no markdown formatting containing: question (a clear question about what the body language signals), answer_a, answer_b, answer_c, answer_d (four plausible answer options), correct_answer (the exact text of the correct answer matching one of the four options), fact (an educational explanation of the body language signal shown).`,
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: `data:${imageFile.type};base64,${base64}`,
                  },
                },
              ],
            },
          ],
          max_tokens: 1024,
        }),
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error?.message || `API error ${response.status}`)
      }

      const data = await response.json()
      const rawText = data.choices[0].message.content.trim()
      const jsonText = rawText.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '')
      const parsed = JSON.parse(jsonText)

      setQuestion(parsed.question || '')
      setAnswers([
        parsed.answer_a || '',
        parsed.answer_b || '',
        parsed.answer_c || '',
        parsed.answer_d || ''
      ])

      // Find which answer matches the correct_answer
      const answerOptions = [parsed.answer_a, parsed.answer_b, parsed.answer_c, parsed.answer_d]
      const correctIndex = answerOptions.findIndex(ans => ans === parsed.correct_answer)
      setCorrect(correctIndex !== -1 ? correctIndex : 0)

      setFact(parsed.fact || '')
    } catch (err) {
      setStatus({ type: 'error', message: `Analysis failed: ${err.message}` })
    } finally {
      setIsAnalysing(false)
    }
  }

  const handleSave = async () => {
    if (!imageFile || !question.trim()) {
      setStatus({ type: 'error', message: 'Image and question are required.' })
      return
    }
    setIsSaving(true)
    setStatus(null)
    try {
      const ext = imageFile.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

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

      const payload = {
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
          <div className="admin-header-row">
            <div>
              <h1 className="admin-title">Admin — Upload Question</h1>
              <p className="admin-subtitle">Analyse an image with OpenAI and save it to Supabase</p>
            </div>
            <button className="btn-logout" onClick={onLogout}>Logout</button>
          </div>
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

export default function Admin() {
  const [isAuthed, setIsAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1')

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setIsAuthed(false)
  }

  if (!isAuthed) return <AdminLogin onSuccess={() => setIsAuthed(true)} />
  return <AdminContent onLogout={handleLogout} />
}
