import { NextResponse } from 'next/server'
import { mockCaseStudies } from '@/lib/cms/mockData'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const caseStudy = mockCaseStudies.find((c) => c.slug === slug)

  if (!caseStudy) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  return NextResponse.json(caseStudy, {
    headers: {
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
    },
  })
}
