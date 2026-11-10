import { useEffect, useRef, useState } from 'react';

const items = ['Python', 'Software Development', 'Applied AI', 'API Integration', 'Automation', 'Building Practical Things'];

export default function Ticker() {
  const row = [...items, ...items];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative overflow-clip bg-crimson py-5" aria-hidden="true">
      <div
        className="flex w-max animate-ticker whitespace-nowrap will-change-transform"
        style={{ animationPlayState: visible ? 'running' : 'paused' }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((text, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="px-8 font-display text-3xl uppercase tracking-wide text-ink md:text-4xl">{text}</span>
                <span className="h-2 w-2 rounded-full bg-paper" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
