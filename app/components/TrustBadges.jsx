const badges = [
  ["Cloud API ready", "m5 12 4 4L19 6"],
  ["Self-hosted data", "M7 10V7a5 5 0 0 1 10 0v3M5 10h14v10H5z"],
  ["1-day full refund", "M3 10a9 9 0 1 1 2 8M3 4v6h6"],
  ["Made in India", "M4 21V3m0 1h16l-3 4 3 4H4"],
  ["Shared team inbox", "M3 4h18v13H8l-5 4V4z"],
  ["Workflow automation", "M13 2 3 14h9l-1 8 10-12h-9z"],
];

export default function TrustBadges() {
  return (
    <ul className="wp-badge-list" aria-label="WebPing highlights" tabIndex={0}>
      {badges.map(([label, icon], index) => (
        <li key={label} className={`chip-badge b${index + 1}`}>
          <svg className="cb-ico" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" aria-hidden="true">
            <path d={icon} />
          </svg>
          {label}
        </li>
      ))}
    </ul>
  );
}
