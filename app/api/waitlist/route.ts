import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ result: 'error', message: 'Invalid email' }, { status: 400 })
    }

    // Check duplicate
    const existing = await prisma.waitlistEntry.findUnique({ where: { email } })
    if (existing) {
      const count = await prisma.waitlistEntry.count()
      return NextResponse.json({ result: 'duplicate', count })
    }

    await prisma.waitlistEntry.create({ data: { email } })
    const count = await prisma.waitlistEntry.count()

    // Sync to Google Sheets (fire and forget)
    const SHEETS_URL = process.env.GOOGLE_SHEETS_SCRIPT_URL
    if (SHEETS_URL) {
      // Google Apps Script redirects POST→GET, so follow manually
      fetch(SHEETS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${encodeURIComponent(email)}`,
        redirect: 'follow',
      }).then(async (res) => {
        // If redirected, follow with GET
        if (!res.ok && res.url !== SHEETS_URL) {
          await fetch(res.url)
        }
      }).catch(() => {}) // don't block on failure
    }

    return NextResponse.json({ result: 'success', count })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ result: 'error', message: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const count = await prisma.waitlistEntry.count()
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
