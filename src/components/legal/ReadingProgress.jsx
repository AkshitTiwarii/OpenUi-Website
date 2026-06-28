import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollWidth(pct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="reading-progress-bar"
      style={{ width: `${scrollWidth}%` }}
    />
  )
}
