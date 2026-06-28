import { useEffect, useRef, useState } from 'react'

export default function PlatformSection({ id, category, title, layout, children }) {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`platform-section${visible ? ' visible' : ''}`}
      data-layout={layout}
    >
      <div className="platform-section-header">
        <p className="label" style={{ marginBottom: '14px' }}>{category}</p>
        <h2 className="display platform-section-title">{title}</h2>
      </div>
      <div className="platform-section-content">
        {children}
      </div>
    </section>
  )
}
