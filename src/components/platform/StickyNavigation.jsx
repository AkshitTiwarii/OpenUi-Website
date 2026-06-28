import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Overview', target: 'overview' },
  { label: 'Voice & Vision', target: 'voice-vision' },
  { label: 'Automation', target: 'automation' },
  { label: 'Workflows', target: 'workflows' },
  { label: 'Security & Arch', target: 'security-arch' },
  { label: 'Enterprise', target: 'enterprise' },
]

export default function StickyNavigation() {
  const [activeItem, setActiveItem] = useState('overview')

  useEffect(() => {
    function handleScroll() {
      const refLine = 160
      let bestId = 'overview'
      let bestDist = Infinity

      for (const item of navItems) {
        const el = document.getElementById(item.target)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top - refLine)
        if (rect.top <= refLine + 100 && dist < bestDist) {
          bestDist = dist
          bestId = item.target
        }
      }
      setActiveItem(bestId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick(e, targetId) {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="sticky-nav-bar">
      <div className="wrap sticky-nav-wrap">
        {navItems.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            onClick={(e) => handleNavClick(e, item.target)}
            className={`sticky-nav-link ${activeItem === item.target ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
