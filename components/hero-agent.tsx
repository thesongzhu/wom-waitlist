'use client'

export function HeroAgent() {
  return (
    <>
      <style jsx global>{`
        :root {
          --navy: #1E3A5F;
          --navy-dark: #162C49;
          --coral: #E8A87C;
          --coral-light: #F5DCC8;
          --warm-white: #FEFDFB;
          --cream: #F5F3F0;
          --text-secondary: #6B7A90;
          --border: #E8E4E0;
        }
      `}</style>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, var(--warm-white) 0%, var(--cream) 100%);
          position: relative;
          overflow: hidden;
          padding: 100px 24px 60px;
        }

        /* 粒子轨道 */
        .particle-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }
        .orbit-1 { width: 500px; height: 500px; animation: orbit 60s linear infinite; }
        .orbit-2 { width: 700px; height: 700px; animation: orbit 80s linear infinite reverse; }
        .orbit-3 { width: 900px; height: 900px; animation: orbit 100s linear infinite; }

        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--coral);
          border-radius: 50%;
          animation: fade 4s ease-in-out infinite;
        }

        @keyframes fade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }

        .orbit-1 .particle:nth-child(1) { top: 0; left: 50%; }
        .orbit-1 .particle:nth-child(2) { top: 50%; right: 0; animation-delay: 1s; }
        .orbit-1 .particle:nth-child(3) { bottom: 0; left: 50%; animation-delay: 2s; }
        .orbit-1 .particle:nth-child(4) { top: 50%; left: 0; animation-delay: 3s; }
        .orbit-2 .particle:nth-child(1) { top: 15%; left: 15%; animation-delay: 0.5s; }
        .orbit-2 .particle:nth-child(2) { top: 15%; right: 15%; animation-delay: 1.5s; }
        .orbit-2 .particle:nth-child(3) { bottom: 15%; right: 15%; animation-delay: 2.5s; }
        .orbit-2 .particle:nth-child(4) { bottom: 15%; left: 15%; animation-delay: 3.5s; }
        .orbit-3 .particle:nth-child(1) { top: 10%; left: 30%; animation-delay: 0.3s; }
        .orbit-3 .particle:nth-child(2) { top: 30%; right: 10%; animation-delay: 1.3s; }
        .orbit-3 .particle:nth-child(3) { bottom: 10%; right: 30%; animation-delay: 2.3s; }
        .orbit-3 .particle:nth-child(4) { bottom: 30%; left: 10%; animation-delay: 3.3s; }

        .agent-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .agent-visual {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 48px;
        }

        .hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(232, 168, 124, 0.25);
          animation: ring-pulse 6s ease-in-out infinite;
        }
        .hero-ring-1 { width: 220px; height: 220px; }
        .hero-ring-2 { width: 280px; height: 280px; animation-delay: 0.5s; border-color: rgba(232, 168, 124, 0.15); }
        .hero-ring-3 { width: 340px; height: 340px; animation-delay: 1s; border-color: rgba(232, 168, 124, 0.1); }

        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.7; }
        }

        .orb {
          width: 160px;
          height: 160px;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: breathe 6s ease-in-out infinite;
          position: relative;
          z-index: 10;
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 40px rgba(232, 168, 124, 0.3), 0 0 80px rgba(232, 168, 124, 0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 80px rgba(232, 168, 124, 0.5), 0 0 150px rgba(232, 168, 124, 0.3), 0 0 200px rgba(232, 168, 124, 0.15);
          }
        }

        .icon {
          width: 56px;
          height: 56px;
          color: var(--coral);
          animation: icon-breathe 6s ease-in-out infinite;
        }

        @keyframes icon-breathe {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(232, 168, 124, 0.5));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(232, 168, 124, 1));
            transform: scale(1.08);
          }
        }

        .content {
          text-align: center;
          max-width: 600px;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          white-space: nowrap;
          color: var(--navy);
        }

        .title-highlight {
          color: var(--coral);
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
          line-height: 1.7;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--navy);
          color: white;
          padding: 18px 36px;
          border-radius: 12px;
          font-size: 1.125rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(30, 58, 95, 0.25);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          color: var(--text-secondary);
          font-size: 0.875rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        @media (max-width: 900px) {
          .title { font-size: 2.5rem; white-space: normal; }
        }

        @media (max-width: 768px) {
          .orb { width: 120px; height: 120px; }
          .icon { width: 44px; height: 44px; }
          .hero-ring-1 { width: 180px; height: 180px; }
          .hero-ring-2 { width: 230px; height: 230px; }
          .hero-ring-3 { width: 280px; height: 280px; }
          .agent-visual { width: 240px; height: 240px; }
        }
      `}</style>

      <section className="hero">
        <div className="particle-orbit orbit-1">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="particle-orbit orbit-2">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="particle-orbit orbit-3">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="agent-container">
          <div className="agent-visual">
            <div className="hero-ring hero-ring-1" style={{borderColor: 'rgba(232, 168, 124, 0.25)'}}></div>
            <div className="hero-ring hero-ring-2" style={{borderColor: 'rgba(232, 168, 124, 0.15)'}}></div>
            <div className="hero-ring hero-ring-3" style={{borderColor: 'rgba(232, 168, 124, 0.1)'}}></div>
            <div className="orb">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2"/>
                <circle cx="12" cy="5" r="2"/>
                <path d="M12 7v4"/>
                <circle cx="8" cy="16" r="1" fill="currentColor"/>
                <circle cx="16" cy="16" r="1" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <div className="content">
            <h1 className="title">Your <span className="title-highlight">AI Marketing</span> Agent</h1>
            <p className="subtitle">WOM runs creator campaigns for you.<br/>Brand voice. Right creators. Zero manual ops.</p>
            <a href="https://wom.live/login" className="cta">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          Scroll to explore ↓
        </div>
      </section>
    </>
  )
}

export default HeroAgent
