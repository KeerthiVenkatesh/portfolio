import { BarMiniChart, LineMiniChart } from './MiniChart';

const PROJECTS = [
  {
    tag: 'Case Study 01',
    org: 'Tata Group — Forage Virtual Program',
    period: 'Feb 2026',
    title: 'Executive dashboard for retail performance reporting',
    summary:
      "Stepped into Tata's data visualization team to turn an open-ended business ask into a reporting suite leadership could read in under two minutes.",
    bullets: [
      'Reframed 3 broad stakeholder requests into 8 specific, measurable analytical questions before building a single chart.',
      'Evaluated 6+ visualization formats — bar, heat map, line, funnel — and matched each one to the decision it needed to support.',
      'Assembled a dashboard surfacing the top revenue and risk signals by region, cutting time-to-insight from minutes to seconds.',
      'Delivered a stakeholder walkthrough connecting every visual back to a specific business recommendation.',
    ],
    metrics: ['8 questions scoped', '6+ chart types evaluated', '1 exec-ready dashboard'],
    chart: 'bar',
  },
  {
    tag: 'Case Study 02',
    org: 'J.P. Morgan Chase & Co. — Forage Virtual Program',
    period: 'Feb 2026',
    title: 'Commodity pricing model & credit risk segmentation',
    summary:
      'Applied quantitative research methods to two trading-desk problems: pricing a natural gas storage contract and segmenting borrowers by default risk.',
    bullets: [
      'Modeled historical natural gas price data to detect seasonal trends and anomalies, then derived pricing logic for a storage contract from first principles.',
      'Engineered a FICO-score bucketing approach that grouped ~10,000 loan records into risk tiers to speed up credit decisioning.',
      'Quantified the trade-off between bucket granularity and model simplicity, balancing interpretability against predictive accuracy.',
      'Translated technical modeling choices into a plain-language risk memo for a non-technical audience.',
    ],
    metrics: ['~10K records segmented', 'Custom pricing logic', 'Seasonal trend detection'],
    chart: 'line',
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-b border-line py-20 dark:border-line-dark">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-widest text-teal dark:text-teal-bright">
              Featured Work
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Two problems, two very different data muscles.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-line bg-white/60 p-6 shadow-card transition-shadow hover:shadow-lg dark:border-line-dark dark:bg-panel/60 dark:shadow-card-dark sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-teal dark:text-teal-bright">
                  {p.tag}
                </span>
                <span className="font-mono text-[11px] text-ink/40 dark:text-mist/40">{p.period}</span>
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">{p.title}</h3>
              <p className="mt-1 font-mono text-xs text-ink/50 dark:text-mist/50">{p.org}</p>

              <div className="mt-5 rounded-lg border border-line bg-paper/60 p-3 text-ink/70 dark:border-line-dark dark:bg-night/40 dark:text-mist/70">
                {p.chart === 'bar' ? <BarMiniChart /> : <LineMiniChart />}
              </div>

              <p className="mt-5 leading-relaxed text-ink/70 dark:text-mist/70">{p.summary}</p>

              <ul className="mt-4 space-y-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink/70 dark:text-mist/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal dark:bg-teal-bright" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5 dark:border-line-dark">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-teal-soft px-3 py-1 font-mono text-[11px] text-teal dark:bg-teal/15 dark:text-teal-bright"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
