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
