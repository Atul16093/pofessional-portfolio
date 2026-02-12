import { NextResponse } from 'next/server'
import { mockSiteConfig } from '@/lib/cms/mockData'

export async function GET() {
  return NextResponse.json(mockSiteConfig, {
    headers: {
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
    },
  })
}
