const TIMELINE = [
  {
    date: '2026 — Present',
    title: 'Aspiring Data Analyst',
    org: 'Open to opportunities · Ballari, India',
    detail:
      'Final-year BCA student applying Python, SQL, and Power BI to real business problems, with a focus on turning ambiguous questions into measurable analysis.',
    current: true,
  },
  {
    date: 'Feb 2026',
    title: 'Data Visualisation Virtual Intern',
    org: 'Tata Group (via Forage)',
    detail:
      'Scoped stakeholder-ready dashboards end to end — from framing business questions to choosing chart types to presenting the story behind the numbers.',
  },
  {
    date: 'Feb 2026',
    title: 'Quantitative Research Virtual Intern',
    org: 'J.P. Morgan Chase & Co. (via Forage)',
    detail:
      'Modeled commodity price trends and built a FICO-based credit risk bucketing approach to support faster, more consistent lending decisions.',
  },
  {
    date: '2024 — 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Nandi Institute of Management & Science College, Ballari',
    detail: 'Coursework spanning computer applications, programming fundamentals, and applied data analysis.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-20 dark:border-line-dark">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[13px] uppercase tracking-widest text-teal dark:text-teal-bright">Timeline</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience &amp; education
        </h2>

        <div className="mt-12 border-l border-line dark:border-line-dark">
          {TIMELINE.map((item) => (
            <div key={item.title} className="relative pb-10 pl-8 last:pb-0">
              <span
                className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-paper dark:border-night ${
                  item.current ? 'bg-teal dark:bg-teal-bright' : 'bg-ink/30 dark:bg-mist/30'
                }`}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-mono text-xs text-ink/45 dark:text-mist/45 sm:w-32 sm:shrink-0">
                  {item.date}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-ink/50 dark:text-mist/50">{item.org}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70 dark:text-mist/70">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
