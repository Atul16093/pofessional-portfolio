import { NextRequest, NextResponse } from 'next/server'
import { mockTechStack } from '@/lib/cms/mockData'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    // In a real application, you would fetch from a database
    let result = mockTechStack

    if (category) {
      result = result.filter((item) => item.category === category)
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching tech stack:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tech stack' },
      { status: 500 }
    )
  }
}
