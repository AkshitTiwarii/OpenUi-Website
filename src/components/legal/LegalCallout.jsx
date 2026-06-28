export default function LegalCallout({ type = 'info', title, text }) {
  const badgeEmoji = type === 'warn' ? '⚠️' : 'ℹ️'

  return (
    <div className={`legal-callout-card callout-${type}`}>
      <div className="callout-header font-mono">
        <span className="emoji">{badgeEmoji}</span>
        <span className="title">{title}</span>
      </div>
      <p className="callout-text">{text}</p>
    </div>
  )
}
