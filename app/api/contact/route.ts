import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData, ContactResponse } from '@/lib/types'

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
  try {
    const body: ContactFormData = await request.json()

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address',
        },
        { status: 400 }
      )
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message must be at least 10 characters',
        },
        { status: 400 }
      )
    }

    // TODO: In a production environment, you would:
    // 1. Send an email using a service like SendGrid, Mailgun, or AWS SES
    // 2. Store the message in a database
    // 3. Add rate limiting and spam protection
    // 4. Log the submission for analytics

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! I will get back to you soon.',
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your message',
      },
      { status: 500 }
    )
  }
}
