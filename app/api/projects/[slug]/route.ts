import { NextRequest, NextResponse } from 'next/server'
import { mockCaseStudies } from '@/lib/cms/mockData'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    // In a real application, you would fetch from a database
    const caseStudy = mockCaseStudies.find((study) => study.slug === slug)

    if (!caseStudy) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(caseStudy)
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}
