import { useState, useEffect } from 'react'

const workflowData = {
  'github-pr-review': [
    { label: 'GitHub Webhook', desc: 'Triggered on pull request open' },
    { label: 'Diff Parser', desc: 'Reads code modifications' },
    { label: 'AI Review Core', desc: 'Claude reviews bugs & standards' },
    { label: 'Publish Review', desc: 'Post inline comments' }
  ],
  'figma-integration': [
    { label: 'Figma API', desc: 'Fetch frame node data' },
    { label: 'Vision Pipeline', desc: 'Image segmentation & analysis' },
    { label: 'Contrast Checker', desc: 'Accessibility WCAG verification' },
    { label: 'Design Feedback', desc: 'Suggest design optimizations' }
  ],
  'ai-interviewer': [
    { label: 'Resume Parser', desc: 'Extract developer experience' },
    { label: 'Q-Generator', desc: 'Formulate custom questions' },
    { label: 'PTT Conversation', desc: 'Speech-to-text response assessment' },
    { label: 'Final Scorecard', desc: 'Grade response accuracy' }
  ]
}

export default function WorkflowVisual({ type }) {
  const [activeStep, setActiveStep] = useState(0)
  const steps = workflowData[type] || []

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [steps])

  return (
    <div className="workflow-widget">
      <p className="widget-label">Workflow Automation</p>
      <div className="workflow-cards">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep
          const isPassed = idx < activeStep

          return (
            <div key={idx} className="workflow-card-container">
              <div className={`workflow-step-card ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}>
                <div className="step-num">{String(idx + 1).padStart(2, '0')}</div>
                <div className="step-info">
                  <p className="step-label">{step.label}</p>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className={`workflow-arrow ${isPassed ? 'active' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
