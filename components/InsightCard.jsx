'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [value, ref];
}

const BARS = [38, 52, 46, 64, 58, 74, 70, 88];

export default function InsightCard() {
  const [datasets, datasetsRef] = useCountUp(24);
  const [accuracy, accuracyRef] = useCountUp(96);

  return (
    <div
      ref={datasetsRef}
      className="relative w-full max-w-sm rounded-xl border border-line bg-white/70 p-5 shadow-card backdrop-blur-sm dark:border-line-dark dark:bg-panel/70 dark:shadow-card-dark"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50 dark:text-mist/50">
          insight_feed.live
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-teal dark:text-teal-bright">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-teal dark:bg-teal-bright" />
          synced
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <div className="font-display text-3xl font-semibold tabular-nums">{datasets}+</div>
          <div className="mt-0.5 font-mono text-[11px] text-ink/50 dark:text-mist/50">datasets explored</div>
        </div>
        <div ref={accuracyRef}>
          <div className="font-display text-3xl font-semibold tabular-nums text-teal dark:text-teal-bright">
            {accuracy}%
          </div>
          <div className="mt-0.5 font-mono text-[11px] text-ink/50 dark:text-mist/50">stakeholder Q's answered</div>
        </div>
      </div>

      <div className="mt-5 flex h-16 items-end gap-1.5">
        {BARS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-teal/30 to-teal dark:from-teal/20 dark:to-teal-bright"
            style={{
              height: `${h}%`,
              animation: `rise 0.6s cubic-bezier(0.22,1,0.36,1) both`,
              animationDelay: `${i * 70}ms`,
            }}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] text-ink/40 dark:border-line-dark dark:text-mist/40">
        <span>source: python + sql</span>
        <span>rendered in power bi</span>
      </div>
    </div>
  );
}
