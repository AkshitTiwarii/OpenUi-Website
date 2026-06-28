export default function WorkflowDiagram({ title, steps }) {
  return (
    <div className="workflow-diagram">
      <p className="workflow-title">{title}</p>
      <div className="workflow-steps">
        {steps.map((step, i) => (
          <div className="workflow-step" key={i}>
            <div className="workflow-node">
              <div className="workflow-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="workflow-connector">
                <span className="workflow-dot"></span>
                {i < steps.length - 1 && <span className="workflow-line"></span>}
              </div>
              <div className="workflow-content">
                <p className="workflow-label">{step.label}</p>
                {step.description && (
                  <p className="workflow-desc">{step.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
