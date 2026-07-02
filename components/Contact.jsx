const CHANNELS = [
  {
    label: 'Email',
    value: 'kirthiv9618@gmail.com',
    href: 'mailto:kirthiv9618@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 79758 85305',
    href: 'tel:+917975885305',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/keerthivenkatesh-41558228b',
    href: 'https://www.linkedin.com/in/keerthivenkatesh-41558228b',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-xl border border-line bg-white/60 p-8 shadow-card dark:border-line-dark dark:bg-panel/60 dark:shadow-card-dark sm:p-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-widest text-teal dark:text-teal-bright">
              Contact
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Looking for an analyst who asks the right question first.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink/70 dark:text-mist/70">
              I'm actively looking for data analyst and junior data scientist roles, plus internships where I can
              keep learning by solving real business problems. Reach out — I reply fast.
            </p>
          </div>

          <div className="space-y-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center justify-between rounded-lg border border-line px-4 py-3.5 transition-colors hover:border-teal dark:border-line-dark dark:hover:border-teal-bright"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink/45 dark:text-mist/45">
                    {c.label}
                  </p>
                  <p className="mt-0.5 font-display text-sm font-medium">{c.value}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-teal dark:text-mist/30 dark:group-hover:text-teal-bright"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
