import { NextResponse } from 'next/server'
import { mockTechStack } from '@/lib/cms/mockData'

export async function GET() {
  return NextResponse.json(mockTechStack, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
