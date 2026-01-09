import { NextRequest, NextResponse } from 'next/server'
import { mockExperience } from '@/lib/cms/mockData'

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from a database
    // For now, we return mock data
    return NextResponse.json(mockExperience)
  } catch (error) {
    console.error('Error fetching experience:', error)
    return NextResponse.json(
      { error: 'Failed to fetch experience' },
      { status: 500 }
    )
  }
}
