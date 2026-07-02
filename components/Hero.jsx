import InsightCard from './InsightCard';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line dark:border-line-dark">
      <div className="grid-texture absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div className="animate-rise">
          <p className="font-mono text-[13px] uppercase tracking-widest text-teal dark:text-teal-bright">
            Data Analyst · Final-year BCA
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            I turn raw, messy data into decisions people can actually act on.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink/70 dark:text-mist/70">
            Keerthi Venkatesh — a final-year BCA student who builds the bridge between spreadsheets and strategy.
            Hands-on with Python, SQL, and Power BI through applied work at Tata Group and J.P. Morgan Chase &amp; Co.,
            turning ambiguous business questions into clear, visual answers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-md bg-ink px-5 py-3 font-mono text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-teal dark:text-night"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-3 font-mono text-sm font-medium transition-colors hover:border-teal hover:text-teal dark:border-line-dark dark:hover:border-teal-bright dark:hover:text-teal-bright"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-ink/50 dark:text-mist/50">
            <span>Tata — Data Visualisation Job Simulation</span>
            <span className="hidden sm:inline">·</span>
            <span>J.P. Morgan — Quantitative Research Job Simulation</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <InsightCard />
        </div>
      </div>
    </section>
  );
}
