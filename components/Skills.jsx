const GROUPS = [
  {
    label: 'Languages & Tools',
    items: ['Python', 'SQL (MySQL)', 'Power BI', 'MS Excel'],
  },
  {
    label: 'Libraries',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    label: 'Analytical Skills',
    items: ['Exploratory Data Analysis', 'Data Visualization', 'Quantitative Research', 'Stakeholder Storytelling'],
  },
];

const CERTS = [
  {
    name: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Tata Group — Job Simulation',
  },
  {
    name: 'Quantitative Research Job Simulation',
    issuer: 'J.P. Morgan Chase & Co.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-20 dark:border-line-dark">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[13px] uppercase tracking-widest text-teal dark:text-teal-bright">Toolkit</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Skills &amp; certifications</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-8 sm:grid-cols-3">
            {GROUPS.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink/45 dark:text-mist/45">
                  {group.label}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line px-3 py-2 text-sm text-ink/80 transition-colors hover:border-teal hover:text-teal dark:border-line-dark dark:text-mist/80 dark:hover:border-teal-bright dark:hover:text-teal-bright"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink/45 dark:text-mist/45">
              Certifications
            </h3>
            <div className="mt-3 space-y-3">
              {CERTS.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-lg border border-line p-4 dark:border-line-dark"
                >
                  <p className="font-display text-sm font-semibold leading-snug">{cert.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-ink/50 dark:text-mist/50">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
