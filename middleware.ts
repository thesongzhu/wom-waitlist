import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  // Redirect all non-custom-domain traffic to wom-waitlist.com
  if (host.includes('vercel.app')) {
    const url = req.nextUrl.clone()
    url.host = 'wom-waitlist.com'
    url.protocol = 'https'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}
