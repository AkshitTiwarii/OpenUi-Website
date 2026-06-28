// Minimal SVG icons for the platform page
// All icons are 16x16 with consistent stroke style

const icons = {
  cpu: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="8" height="8" rx="1" /><line x1="4" y1="8" x2="1" y2="8" /><line x1="15" y1="8" x2="12" y2="8" /><line x1="8" y1="4" x2="8" y2="1" /><line x1="8" y1="15" x2="8" y2="12" />
    </svg>
  ),
  globe: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" /><ellipse cx="8" cy="8" rx="3" ry="6.5" /><line x1="1.5" y1="8" x2="14.5" y2="8" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5L2.5 4v4c0 3.5 2.5 5.5 5.5 6.5 3-1 5.5-3 5.5-6.5V4L8 1.5z" />
    </svg>
  ),
  layers: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="8,2 14,5.5 8,9 2,5.5" /><polyline points="2,8.5 8,12 14,8.5" /><polyline points="2,11 8,14.5 14,11" />
    </svg>
  ),
  zap: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="9,1 3,9 8,9 7,15 13,7 8,7" />
    </svg>
  ),
  eye: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8s-2.5 4.5-6.5 4.5S1.5 8 1.5 8z" /><circle cx="8" cy="8" r="2" />
    </svg>
  ),
  mic: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="1.5" width="4" height="8" rx="2" /><path d="M3 8a5 5 0 0010 0" /><line x1="8" y1="13" x2="8" y2="15" />
    </svg>
  ),
  code: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="5,4 1,8 5,12" /><polyline points="11,4 15,8 11,12" /><line x1="9" y1="2" x2="7" y2="14" />
    </svg>
  ),
  route: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="4" r="2" /><circle cx="12" cy="12" r="2" /><path d="M4 6v2a2 2 0 002 2h4a2 2 0 002-2V6" />
    </svg>
  ),
  gauge: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12a6 6 0 1112 0" /><line x1="8" y1="12" x2="10" y2="7" /><circle cx="8" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  shuffle: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="12,3 14.5,3 14.5,5.5" /><polyline points="12,13 14.5,13 14.5,10.5" /><line x1="1.5" y1="13" x2="14.5" y2="3" /><line x1="1.5" y1="3" x2="5" y2="7" /><line x1="11" y1="9" x2="14.5" y2="13" />
    </svg>
  ),
  cloud: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h8a3 3 0 000-6 4 4 0 00-8 1 3 3 0 000 5z" />
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="7" width="9" height="7" rx="1" /><path d="M5.5 7V5a2.5 2.5 0 015 0v2" />
    </svg>
  ),
  server: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="12" height="4" rx="1" /><rect x="2" y="10" width="12" height="4" rx="1" /><line x1="8" y1="6" x2="8" y2="10" /><circle cx="5" cy="4" r="0.5" fill="currentColor" /><circle cx="5" cy="12" r="0.5" fill="currentColor" />
    </svg>
  ),
  brain: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 14V8" /><path d="M5 3a3 3 0 013-1.5A3 3 0 0111 3" /><path d="M3.5 6A3 3 0 015 3" /><path d="M12.5 6A3 3 0 0011 3" /><path d="M3 9.5a3 3 0 01.5-3.5" /><path d="M13 9.5a3 3 0 00-.5-3.5" /><path d="M5 13a3 3 0 01-2-3.5" /><path d="M11 13a3 3 0 002-3.5" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" /><polyline points="8,4 8,8 11,10" />
    </svg>
  ),
  database: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="8" cy="4" rx="5.5" ry="2.5" /><path d="M2.5 4v8c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V4" /><path d="M2.5 8c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5" />
    </svg>
  ),
  stream: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h12" /><path d="M2 8h8" /><path d="M2 12h5" /><circle cx="14" cy="8" r="1" fill="currentColor" /><circle cx="11" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  waveform: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="6" x2="2" y2="10" /><line x1="4.5" y1="4" x2="4.5" y2="12" /><line x1="7" y1="2" x2="7" y2="14" /><line x1="9.5" y1="5" x2="9.5" y2="11" /><line x1="12" y1="3" x2="12" y2="13" /><line x1="14" y1="6" x2="14" y2="10" />
    </svg>
  ),
  speaker: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,6 6,6 9,3 9,13 6,10 3,10" /><path d="M11 5.5a3 3 0 010 5" /><path d="M12.5 3.5a6 6 0 010 9" />
    </svg>
  ),
  loop: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1.5,8 3.5,6 5.5,8" /><polyline points="10.5,8 12.5,10 14.5,8" /><path d="M3.5 6v2a5 5 0 005 5" /><path d="M12.5 10V8a5 5 0 00-5-5" />
    </svg>
  ),
  settings: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="2.5" /><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4" />
    </svg>
  ),
  target: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" /><circle cx="8" cy="8" r="3" /><circle cx="8" cy="8" r="0.5" fill="currentColor" />
    </svg>
  ),
  text: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,3 8,3 13,3" /><line x1="8" y1="3" x2="8" y2="13" /><polyline points="5.5,13 8,13 10.5,13" />
    </svg>
  ),
  crop: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 1.5v9.5h9.5" /><path d="M12 14.5V5H2.5" />
    </svg>
  ),
  sparkle: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5L9.5 6 14 7.5 9.5 9 8 14.5 6.5 9 2 7.5 6.5 6z" />
    </svg>
  ),
  palette: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" /><circle cx="6" cy="5.5" r="1" fill="currentColor" /><circle cx="10" cy="5.5" r="1" fill="currentColor" /><circle cx="5" cy="9" r="1" fill="currentColor" /><path d="M10.5 8.5a2 2 0 01-1 3.5h-1a1 1 0 010-2 1 1 0 001-1.5z" />
    </svg>
  ),
  scan: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5V3a1 1 0 011-1h2" /><path d="M11 2h2a1 1 0 011 1v2" /><path d="M14 11v2a1 1 0 01-1 1h-2" /><path d="M5 14H3a1 1 0 01-1-1v-2" /><line x1="2" y1="8" x2="14" y2="8" />
    </svg>
  ),
  monitor: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="2" width="13" height="9" rx="1" /><line x1="5.5" y1="14" x2="10.5" y2="14" /><line x1="8" y1="11" x2="8" y2="14" />
    </svg>
  ),
  cursor: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2l2.5 11 2-4 4-2z" /><line x1="9.5" y1="9.5" x2="14" y2="14" />
    </svg>
  ),
  move: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="5.5,2 8,0 10.5,2" /><polyline points="5.5,14 8,16 10.5,14" /><polyline points="2,5.5 0,8 2,10.5" /><polyline points="14,5.5 16,8 14,10.5" /><line x1="8" y1="0" x2="8" y2="16" /><line x1="0" y1="8" x2="16" y2="8" />
    </svg>
  ),
  scroll: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="1.5" width="6" height="13" rx="3" /><line x1="8" y1="4.5" x2="8" y2="6" />
    </svg>
  ),
  keyboard: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3.5" width="14" height="9" rx="1" /><line x1="4" y1="6.5" x2="5" y2="6.5" /><line x1="7" y1="6.5" x2="9" y2="6.5" /><line x1="11" y1="6.5" x2="12" y2="6.5" /><line x1="5" y1="9.5" x2="11" y2="9.5" />
    </svg>
  ),
  shortcut: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="5" width="5" height="5" rx="1" /><rect x="9.5" y="5" width="5" height="5" rx="1" /><line x1="6.5" y1="7.5" x2="9.5" y2="7.5" />
    </svg>
  ),
  app: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="5" height="5" rx="1" /><rect x="9" y="2" width="5" height="5" rx="1" /><rect x="2" y="9" width="5" height="5" rx="1" /><rect x="9" y="9" width="5" height="5" rx="1" />
    </svg>
  ),
  windows: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="2" width="13" height="12" rx="1" /><line x1="1.5" y1="5" x2="14.5" y2="5" /><line x1="8" y1="5" x2="8" y2="14" />
    </svg>
  ),
  calendar: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="12" height="11" rx="1" /><line x1="5" y1="1.5" x2="5" y2="4.5" /><line x1="11" y1="1.5" x2="11" y2="4.5" /><line x1="2" y1="7" x2="14" y2="7" />
    </svg>
  ),
  search: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="4.5" /><line x1="10.5" y1="10.5" x2="14" y2="14" />
    </svg>
  ),
  folder: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h4l2 2h6v7a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" />
    </svg>
  ),
  git: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="3.5" r="2" /><circle cx="8" cy="12.5" r="2" /><circle cx="13" cy="8" r="2" /><line x1="8" y1="5.5" x2="8" y2="10.5" /><path d="M9.5 4.5L11 6.5" />
    </svg>
  ),
  message: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h12a1 1 0 011 1v7a1 1 0 01-1 1H4l-3 3V4a1 1 0 011-1z" />
    </svg>
  ),
  refresh: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1.5,6.5 1.5,2.5 5.5,2.5" /><polyline points="14.5,9.5 14.5,13.5 10.5,13.5" /><path d="M2 3l3.5 3.5A5 5 0 0113.5 8" /><path d="M14 13l-3.5-3.5A5 5 0 012.5 8" />
    </svg>
  ),
  plug: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="1.5" x2="5" y2="5" /><line x1="11" y1="1.5" x2="11" y2="5" /><path d="M3 5h10v3a5 5 0 01-10 0V5z" /><line x1="8" y1="13" x2="8" y2="15" />
    </svg>
  ),
  puzzle: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2h4v2a2 2 0 114 0v2h-4v-2a2 2 0 10-4 0V2z" /><path d="M2 6h2a2 2 0 010 4H2v4h4v-2a2 2 0 014 0v2h4V6H6" />
    </svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="5" r="3" /><path d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    </svg>
  ),
  chart: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="14" x2="3" y2="8" /><line x1="6.5" y1="14" x2="6.5" y2="5" /><line x1="10" y1="14" x2="10" y2="9" /><line x1="13.5" y1="14" x2="13.5" y2="3" />
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="5" r="2.5" /><circle cx="11" cy="5.5" r="2" /><path d="M1 14c0-3 2-4.5 5-4.5s5 1.5 5 4.5" /><path d="M11 9.5c2 0 3.5 1 3.5 3" />
    </svg>
  ),
  bookmark: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 2h9v13L8 12l-4.5 3V2z" />
    </svg>
  ),
  key: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="5.5" r="3.5" /><line x1="8" y1="8" x2="14.5" y2="14.5" /><line x1="12" y1="12" x2="14" y2="10" />
    </svg>
  ),
  card: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1" /><line x1="1.5" y1="7" x2="14.5" y2="7" />
    </svg>
  ),
  receipt: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 1.5h10v13l-1.5-1-1.5 1-1.5-1-1.5 1-1.5-1-1.5 1V1.5z" /><line x1="5.5" y1="5" x2="10.5" y2="5" /><line x1="5.5" y1="7.5" x2="10.5" y2="7.5" /><line x1="5.5" y1="10" x2="8" y2="10" />
    </svg>
  ),
  download: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="1.5" x2="8" y2="10.5" /><polyline points="4.5,7 8,10.5 11.5,7" /><line x1="2.5" y1="14" x2="13.5" y2="14" />
    </svg>
  ),
  bell: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6a4 4 0 018 0c0 4 2 5 2 5H2s2-1 2-5" /><path d="M6.5 13a1.5 1.5 0 003 0" />
    </svg>
  ),
  'eye-off': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="2" x2="14" y2="14" /><path d="M4.5 5.5C3 6.8 1.5 8 1.5 8s2.5 4.5 6.5 4.5c1.2 0 2.3-.4 3.2-1" /><path d="M11 10.5c1.2-1 2.2-2.2 3.5-3.5 0 0-2.5-4.5-6.5-4.5-.5 0-1 .1-1.5.2" />
    </svg>
  ),
  'check-shield': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5L2.5 4v4c0 3.5 2.5 5.5 5.5 6.5 3-1 5.5-3 5.5-6.5V4L8 1.5z" /><polyline points="5.5,8 7,9.5 10.5,6" />
    </svg>
  ),
  link: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 9.5a3 3 0 004-4" /><path d="M9.5 6.5a3 3 0 00-4 4" /><line x1="4" y1="12" x2="2.5" y2="13.5" /><line x1="12" y1="4" x2="13.5" y2="2.5" />
    </svg>
  ),
  wrench: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2a4 4 0 00-3 6.5L2.5 13l1 1 4.5-4.5A4 4 0 1010 2z" />
    </svg>
  ),
  terminal: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,5 7,8 4,11" /><line x1="9" y1="11" x2="13" y2="11" /><rect x="1.5" y="2" width="13" height="12" rx="1" />
    </svg>
  ),
  webhook: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="8" cy="4" r="2" /><path d="M8 6v3l3.5 3" /><path d="M8 9L4.5 12" />
    </svg>
  ),
}

export function getIcon(name) {
  return icons[name] || icons.zap
}
