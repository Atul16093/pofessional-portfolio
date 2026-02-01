import { NextResponse } from 'next/server'
import { mockProjects } from '@/lib/cms/mockData'

export async function GET() {
  return NextResponse.json(mockProjects, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400',
    },
  })
}
