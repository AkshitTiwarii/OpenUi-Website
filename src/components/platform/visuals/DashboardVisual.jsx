export default function DashboardVisual({ type }) {
  if (type === 'billing') {
    return (
      <div className="dashboard-widget">
        <div className="dashboard-header-inner">
          <p className="widget-label">Stripe Invoices</p>
          <span className="dot dot-pulse"></span>
        </div>
        <div className="invoice-list">
          <div className="invoice-row">
            <span className="invoice-date">Jun 2026</span>
            <span className="invoice-plan">OpenUI Pro — Monthly</span>
            <span className="invoice-price">$15.00</span>
            <span className="invoice-status success">Paid</span>
          </div>
          <div className="invoice-row">
            <span className="invoice-date">May 2026</span>
            <span className="invoice-plan">OpenUI Pro — Monthly</span>
            <span className="invoice-price">$15.00</span>
            <span className="invoice-status success">Paid</span>
          </div>
          <div className="invoice-row">
            <span className="invoice-date">Apr 2026</span>
            <span className="invoice-plan">OpenUI Pro — Monthly</span>
            <span className="invoice-price">$15.00</span>
            <span className="invoice-status success">Paid</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'usage-limits') {
    return (
      <div className="dashboard-widget">
        <div className="dashboard-header-inner">
          <p className="widget-label">Monthly Usage Quota</p>
          <span className="dot dot-pulse"></span>
        </div>
        <div className="usage-bars">
          <div className="usage-bar-group">
            <div className="usage-bar-label">
              <span>Voice Minutes</span>
              <span>120 / 300 min</span>
            </div>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className="usage-bar-group">
            <div className="usage-bar-label">
              <span>AI Text Messages</span>
              <span>240 / Unlimited</span>
            </div>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="usage-bar-group">
            <div className="usage-bar-label">
              <span>Cloud Vision Analysis</span>
              <span>18 / 50 runs</span>
            </div>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '36%' }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'subscription-system') {
    return (
      <div className="dashboard-widget">
        <div className="dashboard-header-inner">
          <p className="widget-label">Stripe Subscription</p>
          <span className="badge-active">Active</span>
        </div>
        <div className="sub-overview">
          <p className="sub-plan-name">Pro Plan (Annual)</p>
          <p className="sub-cost">$150/year <span className="sub-saving">Saved 15%</span></p>
          <div className="divider"></div>
          <div className="sub-features-preview">
            <div className="sub-feature"><span className="check">✔</span> Unlimited Claude Sonnet</div>
            <div className="sub-feature"><span className="check">✔</span> 300 voice minutes / mo</div>
            <div className="sub-feature"><span className="check">✔</span> Priority GPU access</div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'team-workspaces') {
    return (
      <div className="dashboard-widget">
        <div className="dashboard-header-inner">
          <p className="widget-label">Workspace Members</p>
          <span className="member-count">4 Users</span>
        </div>
        <div className="member-list">
          <div className="member-row">
            <div className="member-avatar">S</div>
            <div className="member-info">
              <p className="member-name">Satyabrat</p>
              <p className="member-email">satya@openui.dev</p>
            </div>
            <span className="member-role admin">Owner</span>
          </div>
          <div className="member-row">
            <div className="member-avatar">A</div>
            <div className="member-info">
              <p className="member-name">Alex Reed</p>
              <p className="member-email">alex@openui.dev</p>
            </div>
            <span className="member-role admin">Admin</span>
          </div>
          <div className="member-row">
            <div className="member-avatar">K</div>
            <div className="member-info">
              <p className="member-name">Kevin Patel</p>
              <p className="member-email">kevin@openui.dev</p>
            </div>
            <span className="member-role member">Member</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'calendar') {
    return (
      <div className="dashboard-widget">
        <div className="dashboard-header-inner">
          <p className="widget-label">Calendar Sync</p>
          <span className="badge-active">Synced</span>
        </div>
        <div className="calendar-mock">
          <div className="calendar-day">
            <span className="day-number">28</span>
            <span className="day-name">Sun</span>
          </div>
          <div className="calendar-events">
            <div className="calendar-event-card">
              <p className="event-title">AI Design Review</p>
              <p className="event-time">14:00 - 14:30 · Zoom</p>
            </div>
            <div className="calendar-event-card border-lime">
              <p className="event-title">Sync with OpenUI</p>
              <p className="event-time">15:00 - 15:15 · Menu Bar</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
