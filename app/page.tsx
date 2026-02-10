'use client'

import { CSSProperties } from 'react'
import { HeroAgent } from '@/components/hero-agent'

const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(254, 253, 251, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border)',
    zIndex: 100,
  },
  navInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 800,
    color: 'var(--navy)',
  },
  logoSpan: {
    color: 'var(--coral)',
  },
  navLinks: {
    display: 'flex',
    gap: 32,
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: 'var(--text-secondary)',
    fontSize: 14,
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  navCta: {
    padding: '10px 20px',
    background: 'var(--navy)',
    color: 'white',
    borderRadius: 8,
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: 14,
  },
  hero: {
    padding: '160px 0 100px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, var(--warm-white) 0%, var(--cream) 100%)',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 16px',
    background: 'var(--coral-light)',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--navy)',
    marginBottom: 24,
  },
  heroH1: {
    fontSize: 56,
    fontWeight: 800,
    lineHeight: 1.1,
    maxWidth: 800,
    margin: '0 auto 24px',
  },
  heroHighlight: {
    background: 'linear-gradient(135deg, var(--coral) 0%, #D4956A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroP: {
    fontSize: 20,
    color: 'var(--text-secondary)',
    maxWidth: 600,
    margin: '0 auto 40px',
  },
  heroCta: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '16px 32px',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
  },
  btnPrimary: {
    background: 'var(--navy)',
    color: 'white',
  },
  btnSecondary: {
    background: 'white',
    color: 'var(--navy)',
    border: '2px solid var(--border)',
  },
  statsSection: {
    background: 'var(--navy)',
    padding: '60px 24px',
  },
  statsContainer: {
    maxWidth: 1000,
    margin: '0 auto',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 40,
  },
  stat: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '3rem',
    fontWeight: 800,
    color: 'var(--coral)',
  },
  statLabel: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
  },
  section: {
    padding: '100px 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: 60,
  },
  sectionH2: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 16,
  },
  sectionP: {
    fontSize: 18,
    color: 'var(--text-secondary)',
    maxWidth: 600,
    margin: '0 auto',
  },
  howItWorks: {
    background: 'var(--cream)',
    padding: '100px 0',
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 40,
  },
  step: {
    textAlign: 'center',
    padding: '40px 24px',
    background: 'white',
    borderRadius: 16,
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    transition: 'all 0.3s',
  },
  stepNumber: {
    width: 48,
    height: 48,
    background: 'var(--coral)',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '1.25rem',
    margin: '0 auto 20px',
  },
  stepH3: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: 12,
  },
  stepP: {
    fontSize: 15,
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 24,
  },
  featureCard: {
    background: 'var(--cream)',
    borderRadius: 20,
    padding: 40,
    border: '1px solid var(--border)',
  },
  featureCardLarge: {
    gridColumn: 'span 2',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 40,
    alignItems: 'center',
    background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)',
    color: 'white',
    borderRadius: 20,
    padding: 40,
    border: 'none',
  },
  featureIcon: {
    width: 56,
    height: 56,
    background: 'var(--coral-light)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  featureIconDark: {
    width: 56,
    height: 56,
    background: 'rgba(232, 168, 124, 0.2)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  featureH3: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 12,
  },
  featureP: {
    fontSize: 15,
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
  },
  featurePWhite: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.6,
  },
  featureVisual: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  visualRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    fontSize: 14,
  },
  visualDot: {
    width: 8,
    height: 8,
    background: 'var(--coral)',
    borderRadius: '50%',
  },
  useCases: {
    background: 'var(--cream)',
    padding: '100px 0',
  },
  useCaseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  useCase: {
    background: 'white',
    borderRadius: 20,
    padding: 32,
    border: '1px solid var(--border)',
  },
  useCaseIcon: {
    width: 48,
    height: 48,
    background: 'var(--coral-light)',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  useCaseH3: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
  },
  useCaseP: {
    fontSize: 14,
    color: 'var(--text-secondary)',
  },
  ctaSection: {
    padding: '100px 0',
    textAlign: 'center',
  },
  ctaCard: {
    background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)',
    borderRadius: 32,
    padding: '80px 60px',
    color: 'white',
  },
  ctaH2: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 16,
  },
  ctaP: {
    fontSize: 18,
    opacity: 0.8,
    maxWidth: 500,
    margin: '0 auto 40px',
  },
  ctaBtn: {
    padding: '16px 32px',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--coral)',
    color: 'var(--navy)',
  },
  footer: {
    padding: '60px 0',
    borderTop: '1px solid var(--border)',
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLinks: {
    display: 'flex',
    gap: 32,
  },
  footerLink: {
    textDecoration: 'none',
    color: 'var(--text-secondary)',
    fontSize: 14,
  },
  footerCopy: {
    fontSize: 14,
    color: 'var(--text-secondary)',
  },
}

export default function LandingPage() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-title { font-size: 36px !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .feature-large { grid-column: span 1 !important; grid-template-columns: 1fr !important; }
          .use-case-grid { grid-template-columns: 1fr !important; }
          .stats-flex { flex-direction: column !important; gap: 24px !important; }
          .stats-container-inner { padding: 32px 24px !important; }
          .nav-links { display: none !important; }
          .footer-inner { flex-direction: column; gap: 24px; text-align: center; }
        }
        .nav-link:hover { color: var(--navy) !important; }
        .nav-cta:hover { background: var(--navy-light) !important; }
        .btn-primary:hover { background: var(--navy-light) !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(30, 58, 95, 0.2); }
        .btn-secondary:hover { border-color: var(--coral) !important; background: var(--cream) !important; }
        .step:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(232, 168, 124, 0.15); }
        .cta-btn:hover { background: #D4956A !important; }
        .footer-link:hover { color: var(--navy) !important; }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo}>WOM<span style={styles.logoSpan}>.</span></div>
          <div style={styles.navLinks} className="nav-links">
            <a href="#how-it-works" style={styles.navLink} className="nav-link">How it Works</a>
            <a href="#features" style={styles.navLink} className="nav-link">Features</a>
            <a href="#use-cases" style={styles.navLink} className="nav-link">Use Cases</a>
            <a href="https://wom.live/login" style={styles.navCta} className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroAgent />

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <div style={styles.statsContainer} className="stats-container-inner">
            <div style={styles.stats} className="stats-flex">
              <div style={styles.stat}>
                <div style={styles.statValue}>10x</div>
                <div style={styles.statLabel}>Faster Campaign Launch</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statValue}>80%</div>
                <div style={styles.statLabel}>Less Manual Work</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statValue}>US↔CN</div>
                <div style={styles.statLabel}>Cross-Border Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={styles.howItWorks} id="how-it-works">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionH2}>How WOM Works</h2>
            <p style={styles.sectionP}>From goal to results in three steps. Manual or autopilot—your choice.</p>
          </div>
          <div style={styles.steps} className="steps-grid">
            <div style={styles.step} className="step">
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepH3}>Set Your Goal</h3>
              <p style={styles.stepP}>Tell us what you want: signups, installs, sales, or foot traffic. WOM generates market-specific messaging and strategy.</p>
            </div>
            <div style={styles.step} className="step">
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepH3}>Match & Launch</h3>
              <p style={styles.stepP}>AI matches creators who already convert with your audience. Browse manually or let autopilot handle outreach and coordination.</p>
            </div>
            <div style={styles.step} className="step">
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepH3}>Track & Iterate</h3>
              <p style={styles.stepP}>Every campaign produces structured outcomes data. WOM learns and improves matching, messaging, and execution each cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={styles.section} id="features">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionH2}>Built for Scale</h2>
            <p style={styles.sectionP}>Everything you need to run creator campaigns that actually work.</p>
          </div>
          <div style={styles.featuresGrid} className="features-grid">
            <div style={styles.featureCardLarge} className="feature-large">
              <div>
                <div style={styles.featureIconDark}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                </div>
                <h3 style={{...styles.featureH3, color: 'white'}}>AI Agent Autopilot</h3>
                <p style={styles.featurePWhite}>Turn on autopilot and let the agent run your entire campaign: outreach, terms, contracting, tracking, payments, and iteration. No spreadsheets, no agencies.</p>
              </div>
              <div style={styles.featureVisual}>
                <div style={styles.visualRow}><div style={styles.visualDot}></div> Finding matching creators...</div>
                <div style={styles.visualRow}><div style={styles.visualDot}></div> Sending personalized outreach...</div>
                <div style={styles.visualRow}><div style={styles.visualDot}></div> Negotiating terms...</div>
                <div style={styles.visualRow}><div style={styles.visualDot}></div> Tracking performance...</div>
              </div>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <h3 style={styles.featureH3}>Smart Creator Matching</h3>
              <p style={styles.featureP}>Not just followers—WOM models category context, audience fit, engagement quality, and past performance to find creators who actually convert.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 style={styles.featureH3}>Built-in Payments</h3>
              <p style={styles.featureP}>Escrow-style payments released on delivery. No invoicing chaos, no payment chasing. Creators get paid, you get results.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <h3 style={styles.featureH3}>Outcome Tracking</h3>
              <p style={styles.featureP}>Track results via links and codes. Every campaign produces structured data that improves the next one. Attribution you can actually trust.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 style={styles.featureH3}>Cross-Border Ready</h3>
              <p style={styles.featureP}>US ↔ China localization built in. Same workflow, different markets. Category-aware matching that understands local buying triggers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={styles.useCases} id="use-cases">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionH2}>One Platform, Many Goals</h2>
            <p style={styles.sectionP}>Whether you&apos;re driving foot traffic or launching cross-border—same workflow.</p>
          </div>
          <div style={styles.useCaseGrid} className="use-case-grid">
            <div style={styles.useCase}>
              <div style={styles.useCaseIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <h3 style={styles.useCaseH3}>Hyperlocal Foot Traffic</h3>
              <p style={styles.useCaseP}>Connect with nearby creators to drive customers to your physical location. Perfect for restaurants, retail, and experiences.</p>
            </div>
            <div style={styles.useCase}>
              <div style={styles.useCaseIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <h3 style={styles.useCaseH3}>U.S. Distribution Tests</h3>
              <p style={styles.useCaseP}>Launch fast, measure quickly, and improve with real results. Test new markets before committing big budgets.</p>
            </div>
            <div style={styles.useCase}>
              <div style={styles.useCaseIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
              <h3 style={styles.useCaseH3}>Cross-Border</h3>
              <p style={styles.useCaseP}>US ↔ China localization built in. Category-aware positioning that resonates with local audiences—not just translation.</p>
            </div>
            <div style={styles.useCase}>
              <div style={styles.useCaseIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
              <h3 style={styles.useCaseH3}>E-commerce Growth</h3>
              <p style={styles.useCaseP}>Drive sales with affiliate-first strategy. Recruit creators who know how to sell on TikTok Shop and let volume win.</p>
            </div>
            <div style={styles.useCase}>
              <div style={styles.useCaseIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#E8A87C"/></svg></div>
              <h3 style={styles.useCaseH3}>TikTok Affiliate</h3>
              <p style={styles.useCaseP}>Build affiliate programs with TikTok Shop creators. Commission-based partnerships that scale with performance and GMV.</p>
            </div>
            <div style={styles.useCase}>
              <div style={styles.useCaseIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
              <h3 style={styles.useCaseH3}>Brand Awareness</h3>
              <p style={styles.useCaseP}>Scale reach with AI-matched creators. Go from one-off campaigns to always-on presence that compounds over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaCard}>
            <h2 style={styles.ctaH2}>Ready to automate your creator campaigns?</h2>
            <p style={styles.ctaP}>Join brands who&apos;ve switched from spreadsheets to autopilot. Start your first campaign today.</p>
            <a href="https://wom.live/login" style={styles.ctaBtn} className="cta-btn">
              Get Started Free
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerInner} className="footer-inner">
            <div style={styles.logo}>WOM<span style={styles.logoSpan}>.</span></div>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink} className="footer-link">Privacy</a>
              <a href="#" style={styles.footerLink} className="footer-link">Terms</a>
              <a href="mailto:hello@wom.so" style={styles.footerLink} className="footer-link">Contact</a>
            </div>
            <div style={styles.footerCopy}>© 2026 WOM. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
