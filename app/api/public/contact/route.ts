import { NextResponse } from 'next/server'
import { ContactResponse } from '@/lib/types'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically integrate with an email service or CRM
    // For now, we'll just mock a successful response
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay

    const response: ContactResponse = {
      success: true,
      message: 'Thank you for reaching out! I will get back to you soon.',
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
