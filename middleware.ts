import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const pathname = req.nextUrl.pathname

  // Redirect vercel.app traffic to appropriate custom domain
  if (host.includes('vercel.app')) {
    const url = req.nextUrl.clone()
    url.host = 'wom-waitlist.com'
    url.protocol = 'https'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  // womlanding.com root → serve the new landing page (page.tsx)
  // Builder.io content at /landing is deprecated
  // if (host.includes('womlanding.com') && pathname === '/') {
  //   return NextResponse.rewrite(new URL('/landing', req.url))
  // }

  return NextResponse.next()
}
