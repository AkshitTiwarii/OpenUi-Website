import { useState, useEffect, useRef } from 'react'
import { sidebarNav } from '../../data/platformData'

export default function PlatformSidebar({ activeSection }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const sidebarRef = useRef(null)

  // Close drawer on route change or resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setDrawerOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close drawer when clicking a link
  function handleLinkClick(id) {
    setDrawerOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navContent = (
    <div className="platform-sidebar-inner" ref={sidebarRef}>
      {sidebarNav.map((group) => (
        <div className="platform-sidebar-group" key={group.title}>
          <p className="platform-sidebar-title">{group.title}</p>
          {group.items.map((item) => (
            <button
              key={item.id}
              className={`platform-sidebar-link${activeSection === item.id ? ' active' : ''}`}
              onClick={() => handleLinkClick(item.id)}
            >
              {activeSection === item.id && <span className="sidebar-dot"></span>}
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="platform-drawer-toggle"
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-label="Toggle navigation"
      >
        <span className={`hamburger${drawerOpen ? ' open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-muted)' }}>
          Navigation
        </span>
      </button>

      {/* Desktop sidebar */}
      <aside className="platform-sidebar">
        {navContent}
      </aside>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="platform-drawer-overlay" onClick={() => setDrawerOpen(false)}>
          <aside className="platform-drawer" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid var(--color-wire)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                Navigation
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--color-muted)', fontSize: '18px', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
              >
                ×
              </button>
            </div>
            {navContent}
          </aside>
        </div>
      )}
    </>
  )
}
