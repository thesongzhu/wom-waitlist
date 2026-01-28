import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  const entries = await prisma.waitlistEntry.findMany({ orderBy: { createdAt: 'desc' } })

  const csv = ['Email,Signed Up']
    .concat(entries.map(e => `${e.email},${e.createdAt.toISOString()}`))
    .join('\n')

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="wom-waitlist.csv"',
    },
  })
}
