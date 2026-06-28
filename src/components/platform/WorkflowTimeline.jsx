import { useState, useEffect } from 'react'

const workflows = [
  {
    id: 'github',
    title: 'GitHub Reviews',
    steps: [
      { name: 'PR Hook', desc: 'Detect code modifications' },
      { name: 'Parser', desc: 'Identify code segments changed' },
      { name: 'AI Audit', desc: 'Claude review logic correctness' },
      { name: 'Inline Comment', desc: 'Publish suggestions on GitHub' }
    ]
  },
  {
    id: 'figma',
    title: 'Figma Auditing',
    steps: [
      { name: 'Import Design', desc: 'Fetch frame geometry via Figma API' },
      { name: 'Vision segment', desc: 'Claude visual inspection' },
      { name: 'Contrast check', desc: 'Verify WCAG compliance' },
      { name: 'Mock comments', desc: 'Post review cards directly on file' }
    ]
  },
  {
    id: 'coding',
    title: 'Autonomous Coding',
    steps: [
      { name: 'Task read', desc: 'Read checklist tasks' },
      { name: 'Plan build', desc: 'Draft code modification plan' },
      { name: 'Code Sandbox', desc: 'Modify local file structures' },
      { name: 'Test suite', desc: 'Compile and run verification suites' }
    ]
  }
]

export default function WorkflowTimeline() {
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  const activeWorkflow = workflows[activeWorkflowIdx]

  useEffect(() => {
    setActiveStep(0)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % activeWorkflow.steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [activeWorkflowIdx, activeWorkflow])

  return (
    <div className="workflow-timeline-widget">
      {/* Workflow Tabs */}
      <div className="workflow-tabs">
        {workflows.map((wf, idx) => (
          <button
            key={wf.id}
            onClick={() => setActiveWorkflowIdx(idx)}
            className={`workflow-tab-btn ${idx === activeWorkflowIdx ? 'active' : ''}`}
          >
            {wf.title}
          </button>
        ))}
      </div>

      {/* Connection pipeline timeline visual */}
      <div className="timeline-pipeline">
        {activeWorkflow.steps.map((step, idx) => {
          const isActive = idx === activeStep
          const isPassed = idx < activeStep

          return (
            <div key={idx} className="timeline-node-container">
              <div className={`timeline-node-card ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}>
                <span className="node-num font-mono">{String(idx + 1).padStart(2, '0')}</span>
                <div className="node-info">
                  <p className="node-name">{step.name}</p>
                  <p className="node-desc">{step.desc}</p>
                </div>
              </div>
              {idx < activeWorkflow.steps.length - 1 && (
                <div className={`timeline-connector-line ${isPassed ? 'active' : ''}`}>
                  <div className="connecting-dot"></div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
