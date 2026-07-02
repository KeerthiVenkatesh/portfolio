export function BarMiniChart() {
  const values = [30, 55, 40, 70, 62, 85, 78];
  return (
    <svg viewBox="0 0 220 90" className="h-24 w-full">
      <line x1="0" y1="88" x2="220" y2="88" stroke="currentColor" strokeOpacity="0.15" />
      {values.map((v, i) => (
        <rect
          key={i}
          x={i * 31 + 4}
          y={88 - v}
          width="18"
          height={v}
          rx="2"
          className="fill-teal dark:fill-teal-bright"
          fillOpacity={0.35 + (i / values.length) * 0.5}
        />
      ))}
    </svg>
  );
}

export function LineMiniChart() {
  return (
    <svg viewBox="0 0 220 90" className="h-24 w-full">
      <line x1="0" y1="88" x2="220" y2="88" stroke="currentColor" strokeOpacity="0.15" />
      <polyline
        points="0,60 30,50 60,58 90,30 120,42 150,18 180,26 220,10"
        fill="none"
        className="stroke-violet dark:stroke-violet"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        style={{ animation: 'drawline 1.6s ease-out forwards' }}
      />
      {[0, 30, 60, 90, 120, 150, 180, 220].map((x, i) => {
        const ys = [60, 50, 58, 30, 42, 18, 26, 10];
        return <circle key={i} cx={x} cy={ys[i]} r="2.5" className="fill-violet dark:fill-violet" />;
      })}
      <rect x="0" y="0" width="220" height="20" className="fill-amber/15" />
      <text x="4" y="13" className="fill-amber font-mono" style={{ fontSize: '8px' }}>
        risk threshold band
      </text>
    </svg>
  );
}
