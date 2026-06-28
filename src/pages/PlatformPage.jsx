import { useState, useEffect, useRef, useCallback } from 'react'
import PlatformSidebar from '../components/platform/PlatformSidebar'
import PlatformSection from '../components/platform/PlatformSection'
import FeatureCard from '../components/platform/FeatureCard'
import WorkflowDiagram from '../components/platform/WorkflowDiagram'
import ArchitectureDiagram from '../components/platform/ArchitectureDiagram'
import CodeBlock from '../components/platform/CodeBlock'
import PlatformFAQ from '../components/platform/PlatformFAQ'
import PlatformCTA from '../components/platform/PlatformCTA'
import { platformSections, sidebarNav } from '../data/platformData'

export default function PlatformPage() {
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef(null)

  // Collect all section IDs for scroll spy
  const allSectionIds = sidebarNav.flatMap((group) => group.items.map((item) => item.id))

  // Scroll spy — find section closest to top of viewport
  useEffect(() => {
    function updateActiveSection() {
      const refLine = 120 // px below viewport top
      let bestId = ''
      let bestDist = Infinity

      for (const id of allSectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top - refLine)
        // Only consider sections that are at or above the reference line
        // (i.e. top is <= refLine + some tolerance) or the closest one above
        if (rect.top <= refLine + 80 && dist < bestDist) {
          bestDist = dist
          bestId = id
        }
      }

      // Fallback: if nothing is above the ref line, use the first section
      if (!bestId && allSectionIds.length > 0) {
        bestId = allSectionIds[0]
      }

      if (bestId) setActiveSection(bestId)
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection() // initial run
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  // Scroll progress
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="platform-layout">
        <PlatformSidebar activeSection={activeSection} />

        <main className="platform-content" ref={contentRef}>
          {/* Hero */}
          <div className="platform-hero">
            <p className="label" style={{ marginBottom: '20px' }}>Platform Documentation</p>
            <h1 className="display" style={{ fontSize: 'clamp(34px, 5vw, 56px)', color: 'var(--color-paper)', marginBottom: '18px' }}>
              Everything OpenUI{' '}
              <em style={{ color: 'var(--color-lime)', fontStyle: 'italic' }}>Can Do</em>
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '560px' }}>
              Explore the complete platform — from AI model routing and voice conversations
              to desktop automation, developer tools, and enterprise security.
            </p>
          </div>

          <hr className="rule" />

          {/* Sections */}
          {platformSections.map((section) => (
            <PlatformSection
              key={section.id}
              id={section.id}
              category={section.category}
              title={section.title}
              layout={section.layout}
            >
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '28px', maxWidth: '640px' }}>
                {section.description}
              </p>

              {/* Callout - info/tip/warning */}
              {section.callout && (
                <div className={`callout callout-${section.callout.type}`}>
                  <span className="callout-badge">
                    {section.callout.type === 'tip' ? '💡 Tip' : section.callout.type === 'warning' ? '⚠️ Warning' : 'ℹ️ Note'}
                  </span>
                  <p>{section.callout.text}</p>
                </div>
              )}

              {/* Feature cards grid */}
              {section.features && section.features.length > 0 && (
                <div className="feature-cards-grid">
                  {section.features.map((feat, i) => (
                    <FeatureCard
                      key={i}
                      icon={feat.icon}
                      title={feat.title}
                      description={feat.description}
                    />
                  ))}
                </div>
              )}

              {/* Workflow diagram */}
              {section.workflow && (
                <WorkflowDiagram
                  title={section.workflow.title}
                  steps={section.workflow.steps}
                />
              )}

              {/* Architecture diagram */}
              {section.showArchitectureDiagram && (
                <ArchitectureDiagram />
              )}

              {/* Code snippet */}
              {section.codeSnippet && (
                <CodeBlock
                  language={section.codeSnippet.language}
                  title={section.codeSnippet.title}
                  code={section.codeSnippet.code}
                />
              )}
            </PlatformSection>
          ))}

          {/* FAQ Section */}
          <section id="platform-faq" className="platform-section visible" style={{ paddingTop: '72px' }}>
            <PlatformFAQ />
          </section>

          <hr className="rule" />

          {/* CTA */}
          <section style={{ padding: '72px 0' }}>
            <PlatformCTA />
          </section>
        </main>
      </div>
    </>
  )
}
