import { NextRequest, NextResponse } from 'next/server'
import { mockProjects } from '@/lib/cms/mockData'

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from a database
    // For now, we return mock data
    return NextResponse.json(mockProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
