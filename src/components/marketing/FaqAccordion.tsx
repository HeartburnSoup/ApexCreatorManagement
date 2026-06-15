import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-brand-fire"
            >
              <span className="text-base font-semibold text-foreground sm:text-lg">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45 border-brand-fire text-brand-fire" : "text-muted-foreground"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div className="accordion-content" data-open={isOpen}>
              <div>
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
