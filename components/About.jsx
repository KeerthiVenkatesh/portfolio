const FOCUS = [
  {
    label: 'Explore',
    detail: 'Clean and profile messy datasets in Python before a single chart gets drawn.',
  },
  {
    label: 'Explain',
    detail: 'Translate stakeholder questions into the specific metric that answers them.',
  },
  {
    label: 'Visualize',
    detail: 'Choose the chart type the data deserves, not the one that looks impressive.',
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line py-20 dark:border-line-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-widest text-teal dark:text-teal-bright">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Trained on real business problems, not just textbook datasets.
          </h2>
        </div>
        <div className="space-y-6 text-ink/75 dark:text-mist/75">
          <p className="leading-relaxed">
            I'm a final-year BCA student at Nandi Institute of Management &amp; Science College, Ballari, graduating
            in 2026. My focus is analytics: taking a vague business question, finding the data that answers it, and
            presenting the result in a way a non-technical stakeholder can act on immediately.
          </p>
          <p className="leading-relaxed">
            That approach was shaped by two virtual internships — building executive-ready dashboards for Tata
            Group's analytics team, and applying quantitative methods to pricing and credit-risk problems at J.P.
            Morgan Chase &amp; Co. Both pushed me past "make a chart" into "make the right chart, for the right
            decision."
          </p>
          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {FOCUS.map((item, i) => (
              <div
                key={item.label}
                className="rounded-lg border border-line p-4 dark:border-line-dark"
              >
                <span className="font-mono text-[11px] text-teal dark:text-teal-bright">0{i + 1}</span>
                <h3 className="mt-1 font-display text-sm font-semibold">{item.label}</h3>
                <p className="mt-1.5 text-sm leading-snug text-ink/60 dark:text-mist/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
