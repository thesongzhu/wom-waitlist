'use client'

import { useState, useEffect } from 'react'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/waitlist')
      .then(r => r.json())
      .then(d => d.count && setCount(d.count))
      .catch(() => {})
  }, [])

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
        setCount(data.count)
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
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Coming Soon
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Where Brands Meet{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Creators
            </span>
          </h1>

          <p className="text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
            WOM connects businesses with the perfect creators and influencers.
            Swipe, match, collaborate — it&apos;s that simple.
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
                className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all text-base backdrop-blur-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-base hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>

            <p className="mt-3 text-sm h-5">
              {status === 'success' && (
                <span className="text-green-400">🎉 You&apos;re on the list! We&apos;ll be in touch.</span>
              )}
              {status === 'duplicate' && (
                <span className="text-white/50">You&apos;re already on the waitlist! 👍</span>
              )}
              {status === 'error' && (
                <span className="text-red-400">Something went wrong. Please try again.</span>
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
                className="py-5 px-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-center"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="text-xs text-white/40">{f.label}</div>
              </div>
            ))}
          </div>

          {/* Count */}
          <p className="mt-6 text-sm text-white/30">
            <strong className="text-white/60">{count}</strong> people on the waitlist
          </p>

        </div>
      </main>

      <footer className="relative z-10 text-center py-6 text-white/20 text-xs">
        &copy; 2026 WOM — Word of Mouth
      </footer>
    </div>
  )
}
