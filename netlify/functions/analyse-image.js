export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { imageData, category, difficulty } = JSON.parse(event.body)

    // Validate required fields
    if (!imageData || !category || !difficulty) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: imageData, category, difficulty' }),
      }
    }

    // Check for API key
    const openaiApiKey = process.env.OPENAI_API_KEY
    if (!openaiApiKey) {
      console.error('OPENAI_API_KEY not configured in environment')
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error: API key not available' }),
      }
    }

    // Prepare the prompt - same as in Admin.jsx
    const prompt = `You are a body language expert creating questions for an interactive quiz. This image is for the "${category}" category at ${difficulty} difficulty level.

CRITICAL: The question and answers MUST be specifically about ${category}, NOT generic body language. Follow these category-specific guidelines:

${category === 'Attraction Signals' ? '- Focus ONLY on romantic interest, flirting cues, and attraction signals. Do NOT create generic body language questions.' : ''}
${category === 'Read Your Partner' ? '- Focus ONLY on intimate relationship dynamics, partner communication, and couple body language. Do NOT create generic questions.' : ''}
${category === 'Workplace & Career' ? '- Focus ONLY on professional settings, office dynamics, business interactions, and career-related signals. Do NOT create generic questions.' : ''}
${category === 'Spot a Liar' ? '- Focus ONLY on deception detection, dishonesty cues, and lying indicators. Do NOT create generic questions.' : ''}
${category === 'Read Emotions' ? '- Focus ONLY on emotional states, feelings, and mood indicators. Do NOT create generic questions.' : ''}
${category === 'First Impressions' ? '- Focus ONLY on initial meeting signals, introduction dynamics, and first-encounter body language. Do NOT create generic questions.' : ''}
${category === 'Micro-Expression Expert' ? '- Focus ONLY on rapid facial expressions, fleeting emotional signals, and brief involuntary reactions. Do NOT create generic questions.' : ''}

Analyse the specific body language signals shown in this image that are relevant to ${category}. Write a question and four answer options that are specifically tailored to ${category}, not generic body language descriptions.

Return a JSON object only with no markdown formatting containing: question (a clear question about what the body language signals), answer_a, answer_b, answer_c, answer_d (four plausible answer options), correct_answer (the exact text of the correct answer matching one of the four options), fact (an educational explanation of the body language signal shown).`

    // Call OpenAI API from server
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
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
                text: prompt,
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${imageData}`,
                },
              },
            ],
          },
        ],
        max_tokens: 1024,
      }),
    })

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json()
      console.error('OpenAI API error:', errorData)
      const errorMessage = errorData.error?.message || `API error ${openaiResponse.status}`
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `OpenAI API error: ${errorMessage}` }),
      }
    }

    const data = await openaiResponse.json()

    // Parse the response
    const rawText = data.choices[0].message.content.trim()
    const jsonText = rawText.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '')
    const parsed = JSON.parse(jsonText)

    // Return the parsed data to the client
    return {
      statusCode: 200,
      body: JSON.stringify({
        question: parsed.question || '',
        answer_a: parsed.answer_a || '',
        answer_b: parsed.answer_b || '',
        answer_c: parsed.answer_c || '',
        answer_d: parsed.answer_d || '',
        correct_answer: parsed.correct_answer || '',
        fact: parsed.fact || '',
      }),
    }
  } catch (error) {
    console.error('Error in analyse-image function:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: `Server error: ${error.message}`,
      }),
    }
  }
}
