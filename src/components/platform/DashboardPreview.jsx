export default function DashboardPreview() {
  return (
    <div className="dashboard-grid-preview">
      {/* Box 1: Usage tracker */}
      <div className="dash-card limit-card">
        <p className="widget-label font-mono">Workspace Quotas</p>
        <div className="limit-metrics-container">
          <div className="limit-row">
            <div className="limit-info">
              <span>Voice minutes used</span>
              <span className="font-mono">180 / 500 min</span>
            </div>
            <div className="progress-bar-wrap">
              <div className="bar-fill" style={{ width: '36%' }}></div>
            </div>
          </div>
          <div className="limit-row">
            <div className="limit-info">
              <span>Cloud vision queries</span>
              <span className="font-mono">82 / 100</span>
            </div>
            <div className="progress-bar-wrap">
              <div className="bar-fill" style={{ width: '82%' }}></div>
            </div>
          </div>
          <div className="limit-row">
            <div className="limit-info">
              <span>Text message tokens</span>
              <span className="font-mono">Unlimited</span>
            </div>
            <div className="progress-bar-wrap">
              <div className="bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 2: Billing & Subscriptions */}
      <div className="dash-card stripe-card">
        <div className="stripe-header">
          <p className="widget-label font-mono">Stripe Billing</p>
          <span className="badge-active">Active</span>
        </div>
        <div className="invoice-rows font-mono">
          <div className="inv-row">
            <span>2026-06-28</span>
            <span>PRO Yearly</span>
            <span>$150.00</span>
            <span className="inv-badge">Paid</span>
          </div>
          <div className="inv-row">
            <span>2025-06-28</span>
            <span>PRO Yearly</span>
            <span>$150.00</span>
            <span className="inv-badge">Paid</span>
          </div>
        </div>
      </div>

      {/* Box 3: Team Manager roster */}
      <div className="dash-card team-card">
        <p className="widget-label font-mono">Workspace Team</p>
        <div className="team-rows">
          <div className="team-member">
            <div className="avatar">S</div>
            <div className="info">
              <p className="name">Satyabrat</p>
              <p className="email">satya@openui.dev</p>
            </div>
            <span className="role owner">Owner</span>
          </div>
          <div className="team-member">
            <div className="avatar">A</div>
            <div className="info">
              <p className="name">Alex Reed</p>
              <p className="email">alex@openui.dev</p>
            </div>
            <span className="role admin">Admin</span>
          </div>
        </div>
      </div>
    </div>
  )
}
