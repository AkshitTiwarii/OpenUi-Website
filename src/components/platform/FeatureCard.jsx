import { useState } from 'react'
import { getIcon } from './icons'

export default function FeatureCard({ icon, title, description }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = description.length > 100

  return (
    <div
      className={`feature-card${expanded ? ' expanded' : ''}`}
      onClick={() => isLong && setExpanded(!expanded)}
      role={isLong ? 'button' : undefined}
      tabIndex={isLong ? 0 : undefined}
      onKeyDown={(e) => { if (isLong && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setExpanded(!expanded) } }}
    >
      <div className="feature-card-header">
        <div className="feature-card-icon">
          {getIcon(icon)}
        </div>
        <h4 className="feature-card-title">{title}</h4>
      </div>
      <p className={`feature-card-desc${!expanded && isLong ? ' clamped' : ''}`}>
        {description}
      </p>
      {isLong && (
        <span className="feature-card-toggle">
          {expanded ? '− Less' : '+ More'}
        </span>
      )}
    </div>
  )
}
