'use client'

import { useState } from 'react'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json()

      if (data.result === 'success') {
        setStatus('success')
        setEmail('')
      } else if (data.result === 'duplicate') {
        setStatus('duplicate')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 flex flex-col">
      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-sm text-purple-600 font-medium mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Coming Soon
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Match · Click · Collab
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Any brand. Any creator. Any platform. One click.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 sm:flex-row flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-base"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-7 py-4 rounded-xl text-white font-semibold text-base hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #A855F7, #EC4899)' }}
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>

            <p className="mt-3 text-sm h-5">
              {status === 'success' && (
                <span className="text-green-600">🎉 You&apos;re on the list! We&apos;ll be in touch.</span>
              )}
              {status === 'duplicate' && (
                <span className="text-gray-500">You&apos;re already on the waitlist! 👍</span>
              )}
              {status === 'error' && (
                <span className="text-red-500">Something went wrong. Please try again.</span>
              )}
            </p>
          </form>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto">
            {[
              { icon: '🤝', label: 'Smart Matching' },
              { icon: '📱', label: 'TikTok · IG · Reddit' },
              { icon: '📊', label: 'Deal Tracking' },
            ].map((f) => (
              <div
                key={f.label}
                className="py-5 px-4 rounded-2xl bg-white border border-gray-200 shadow-sm text-center"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="text-xs text-gray-500">{f.label}</div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <footer className="text-center py-6 bg-gray-50 text-gray-400 text-xs">
        &copy; 2026 WOM — Word of Mouth
      </footer>
    </div>
  )
}
