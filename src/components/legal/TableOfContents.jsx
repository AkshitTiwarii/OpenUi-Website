import { useState, useEffect } from 'react'

export default function TableOfContents({ sections, searchPlaceholder = 'Search sections...' }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '')
  const [searchTerm, setSearchTerm] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll spy
  useEffect(() => {
    function handleScroll() {
      const refLine = 120
      let bestId = sections[0]?.id || ''
      let bestDist = Infinity

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top - refLine)
        if (rect.top <= refLine + 50 && dist < bestDist) {
          bestDist = dist
          bestId = section.id
        }
      }
      setActiveSection(bestId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  function handleLinkClick(e, targetId) {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 80
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

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const activeSectionObj = sections.find((s) => s.id === activeSection)

  return (
    <div className="toc-sidebar">
      {/* Search Input */}
      <div className="toc-search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={searchPlaceholder}
          className="field toc-search-input"
        />
      </div>

      {/* Mobile Collapsible Header */}
      <div className="toc-mobile-toggle">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="toc-mobile-btn font-mono"
        >
          <span>📑 TOC: {activeSectionObj ? activeSectionObj.title : 'Outline'}</span>
          <span className={`arrow ${isMobileMenuOpen ? 'open' : ''}`}>▼</span>
        </button>
      </div>

      {/* Navigation Links list */}
      <ul className={`toc-links-list font-mono ${isMobileMenuOpen ? 'open-mobile' : ''}`}>
        {filteredSections.map((sec, idx) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              onClick={(e) => handleLinkClick(e, sec.id)}
              className={`toc-link ${activeSection === sec.id ? 'active' : ''}`}
            >
              <span className="idx">{String(idx + 1).padStart(2, '0')}.</span>
              <span className="lbl">{sec.title}</span>
            </a>
          </li>
        ))}
        {filteredSections.length === 0 && (
          <li className="toc-no-results">No sections match filter</li>
        )}
      </ul>
    </div>
  )
}
