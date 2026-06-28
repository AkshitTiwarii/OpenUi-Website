import { useState } from 'react'

export default function HomePage() {
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  const [waitlistLoading, setWaitlistLoading] = useState(false)

  async function handleWaitlist(e) {
    e.preventDefault()
    setWaitlistLoading(true)
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: e.target.querySelector('input').value })
      })
      if (response.ok) {
        setWaitlistSubmitted(true)
      } else {
        alert('Something went wrong')
        setWaitlistLoading(false)
      }
    } catch {
      alert('Network error')
      setWaitlistLoading(false)
    }
  }

  async function handleDownload(e, platform) {
    e.preventDefault()
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_name: `OpenUI Download (${platform})` })
      })
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Failed to start checkout')
      }
    } catch {
      alert('Error starting checkout')
    }
  }

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section id="download">
        <div className="wrap">
          <div className="hero-grid">
            {/* left */}
            <div>
              <p className="label" style={{ marginBottom: '28px' }}>Local-first · No data leaves your machine</p>
              <h1 className="display" style={{ fontSize: 'clamp(54px,7.5vw,92px)', color: 'var(--color-paper)' }}>
                AI that runs<br />
                your entire<br />
                <em style={{ color: 'var(--color-lime)', fontStyle: 'italic' }}>operating system.</em>
              </h1>
              <p style={{ fontSize: '15px', color: 'var(--color-muted)', maxWidth: '400px', lineHeight: 1.75, marginTop: '28px' }}>
                Talks, types, clicks, codes, books meetings, and reviews pull requests —
                all from a menu bar icon. No cloud required to get started.
              </p>
            </div>

            {/* right: downloads */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '228px' }}>
              <p className="label" style={{ marginBottom: '10px' }}>Available now</p>

              <a href="#" className="btn-white" onClick={(e) => handleDownload(e, 'Mac')}>
                <svg width="15" height="15" viewBox="0 0 814 1000" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4C46 425.8 10.5 332.1 10.5 240.9c0-154.4 100.1-235.2 197.5-235.2 52.1 0 95.5 33.9 128 33.9 30.9 0 79.3-35.6 140.2-35.6 22.4 0 108.1 1.9 165.9 73.8zm-120.5-115.8c28.5-35.6 49.8-85.5 49.8-135.3 0-6.9-.6-13.9-1.9-19.5-47.6 1.9-104.3 31.8-138.6 71.9-26.5 29.5-51.8 79.3-51.8 129.8 0 7.5 1.2 15.1 1.9 17.3 3.2.6 8.4 1.3 13.6 1.3 43.3 0 97.2-27.8 126.9-65.5z" />
                </svg>
                Download for Mac
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9a9a90', marginLeft: 'auto' }}>.dmg</span>
              </a>

              <a href="#" className="btn-ghost" onClick={(e) => handleDownload(e, 'Windows')}>
                <svg width="14" height="14" viewBox="0 0 88 88" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M0 12.402l35.687-4.86.016 34.423-35.67.201zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z" />
                </svg>
                Download for Windows
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-subdued)', marginLeft: 'auto' }}>.exe</span>
              </a>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-faint)', textAlign: 'center', marginTop: '4px' }}>
                Free · 20 AI messages / day · No account needed
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ticker */}
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="ticker">
          <div className="ticker-item"><span className="dot" style={{ width: '5px', height: '5px', background: 'var(--color-lime)' }}></span> <b>Ollama</b>&nbsp;local LLM</div>
          <div className="ticker-item"><b>Claude Haiku</b>&nbsp;free tier</div>
          <div className="ticker-item"><b>Claude Sonnet</b>&nbsp;pro</div>
          <div className="ticker-item"><b>GPT-4o</b>&nbsp;pro+</div>
          <div className="ticker-item"><b>Whisper</b>&nbsp;STT local</div>
          <div className="ticker-item"><b>Playwright</b>&nbsp;browser</div>
          <div className="ticker-item"><b>PyAutoGUI</b>&nbsp;input</div>
          <div className="ticker-item"><b>Tesseract</b>&nbsp;OCR</div>
          <div className="ticker-item"><b>AppleScript</b>&nbsp;·&nbsp;<b>PowerShell</b></div>
          <div className="ticker-item"><b>Supabase</b>&nbsp;auth</div>
          <div className="ticker-item"><b>Stripe</b>&nbsp;billing</div>
        </div>
      </div>

      <hr className="rule" />

      {/* ══════════════════ APP VISUAL ══════════════════ */}
      <section style={{ padding: '32px 0' }}>
        <div className="wrap">
          <div className="placeholder" style={{ height: '440px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '34px', background: '#0d0c0a', borderBottom: '1px solid var(--color-wire)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: '7px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2a2a26' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2a2a26' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2a2a26' }}></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#2a2a26', margin: '0 auto' }}>OpenUI</span>
            </div>
            <span>[ App screenshot / demo  ·  1160 × 440 ]</span>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ══════════════════ FEATURES ══════════════════ */}
      <section id="features" style={{ padding: '72px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'end', marginBottom: '52px' }}>
            <div>
              <p className="label" style={{ marginBottom: '18px' }}>What it does</p>
              <h2 className="display" style={{ fontSize: 'clamp(28px,3.5vw,40px)', lineHeight: 1.1 }}>
                Everything your OS can do,<br />
                spoken in plain language.
              </h2>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '360px', marginLeft: 'auto' }}>
              Not a wrapper. Not a chat panel bolted to your desktop.
              A genuine agent that reads your screen, holds context, and acts.
            </p>
          </div>

          <div>
            <div className="feat-row">
              <span className="num">01</span>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-paper)' }}>Local-first privacy</p>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                Nothing is transmitted without your consent. Conversations, files, screen contents —
                processed on device. Opt into cloud models when you need them;
                the app never stores API keys in plaintext.
              </p>
            </div>
            <div className="feat-row">
              <span className="num">02</span>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-paper)' }}>Full OS automation</p>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                Opens apps, moves the mouse, types into any input, reads your screen via OCR
                or cloud vision, fills forms, books calendar events, browses the web —
                macOS via AppleScript and Windows via PowerShell.
              </p>
            </div>
            <div className="feat-row">
              <span className="num">03</span>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-paper)' }}>Autonomous background coding</p>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                Go idle for five minutes and the agent reads your task list, writes code into
                a sandboxed workspace, runs your test suite, iterates on failures, and stops
                cleanly when you return. Up to 20 agentic coding turns per run.
              </p>
            </div>
            <div className="feat-row">
              <span className="num">04</span>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-paper)' }}>Voice — push-to-talk or always-on</p>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                Whisper transcribes locally. No API key required in offline mode.
                TTS responses piped through system audio. Hotkey{' '}
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', background: 'var(--color-dim)', padding: '2px 6px', border: '1px solid var(--color-wire)' }}>Ctrl+Alt+O</span>{' '}
                triggers listening from anywhere on screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ══════════════════ PLATFORM ══════════════════ */}
      <section id="platform" style={{ padding: '72px 0' }}>
        <div className="wrap">
          <p className="label" style={{ marginBottom: '44px' }}>Platform support</p>
          <div className="platform-grid">
            {/* macOS */}
            <div className="platform-col" style={{ paddingLeft: 0 }}>
              <p className="label" style={{ marginBottom: '28px' }}>macOS</p>
              <div className="placeholder" style={{ width: '100%', height: '220px', marginBottom: '32px' }}>
                <span>[ Mac UI screenshot ]</span>
              </div>
              <h3 className="display" style={{ fontSize: '28px', marginBottom: '14px', lineHeight: 1.05 }}>Universal binary.</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '300px' }}>
                Runs natively on Apple Silicon and Intel. Menu bar icon, AppleScript-powered
                automation, Calendar.app integration, Spotlight triggers.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="chip">arm64</span><span className="chip">x64</span>
                <span className="chip">macOS 12+</span><span className="chip">DMG</span>
              </div>
            </div>
            {/* Windows */}
            <div className="platform-col" style={{ paddingRight: 0 }}>
              <p className="label" style={{ marginBottom: '28px' }}>Windows</p>
              <div className="placeholder" style={{ width: '100%', height: '220px', marginBottom: '32px' }}>
                <span>[ Windows UI screenshot ]</span>
              </div>
              <h3 className="display" style={{ fontSize: '28px', marginBottom: '14px', lineHeight: 1.05 }}>System tray native.</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '300px' }}>
                NSIS installer, PowerShell automation, silent auto-update via GitHub Releases.
                No admin rights required on x64 or ia32 hardware.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="chip">x64</span><span className="chip">ia32</span>
                <span className="chip">Win 10+</span><span className="chip">NSIS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ══════════════════ WAITLIST ══════════════════ */}
      <section id="waitlist" style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="waitlist-grid">
            {/* left */}
            <div>
              <p className="label" style={{ marginBottom: '20px' }}>Pro · Coming soon</p>
              <h2 className="display" style={{ fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1.0 }}>
                More model.<br />
                More context.<br />
                <span style={{ color: 'var(--color-lime)' }}>Same machine.</span>
              </h2>

              <div className="stat-row">
                <div>
                  <p className="num">Messages / day</p>
                  <p style={{ fontSize: '24px', fontWeight: 500, color: 'var(--color-paper)', marginTop: '6px' }}>500</p>
                </div>
                <div>
                  <p className="num">Monthly price</p>
                  <p style={{ fontSize: '24px', fontWeight: 500, color: 'var(--color-paper)', marginTop: '6px' }}>
                    $19<span style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 400 }}>/mo</span>
                  </p>
                </div>
                <div>
                  <p className="num">Cloud models</p>
                  <p style={{ fontSize: '13px', color: 'var(--color-paper)', marginTop: '6px' }}>Claude Sonnet · GPT-4o</p>
                </div>
                <div>
                  <p className="num">Screen reading</p>
                  <p style={{ fontSize: '13px', color: 'var(--color-paper)', marginTop: '6px' }}>Cloud vision enabled</p>
                </div>
              </div>
            </div>

            {/* right */}
            <div style={{ paddingTop: '56px' }}>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '28px' }}>
                Join the list for early access and a 30-day free trial when Pro ships.
                One email when it's ready — nothing else.
              </p>

              {!waitlistSubmitted ? (
                <form onSubmit={handleWaitlist} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input type="email" className="field" placeholder="your@email.com" required autoComplete="email" />
                  <button type="submit" className="btn-white" style={{ justifyContent: 'center' }} disabled={waitlistLoading}>
                    {waitlistLoading ? 'Joining…' : 'Join the Pro waitlist →'}
                  </button>
                </form>
              ) : (
                <div style={{ marginTop: '18px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-lime)' }}>✓ You're on the list.</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-subdued)', marginTop: '6px' }}>
                    We'll email when Pro opens.
                  </p>
                </div>
              )}

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-deep)', marginTop: '14px' }}>
                No spam · Unsubscribe any time
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />
    </>
  )
}
