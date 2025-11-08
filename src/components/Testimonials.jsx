import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const items = [
  {
    name: 'Amelia Patel',
    role: 'Founder, Nova Labs',
    quote:
      'The clarity and execution support translated into a 3x uplift in qualified pipeline within 90 days.',
  },
  {
    name: 'Daniel Weber',
    role: 'Managing Partner, Horizon VC',
    quote:
      'Deep strategic insight with pragmatic rigor. Helped us pressure-test two deals and avoid costly missteps.',
  },
  {
    name: 'Sophia Chen',
    role: 'CMO, Apex Brands',
    quote:
      'Brand repositioning was on point. Raised our average deal size by 42% and shortened sales cycles.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, []);

  const current = items[index];

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Client Testimonials</h2>
          <p className="mt-3 text-slate-600">
            Results from founders, executives, and investors across industries.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm md:p-12">
          <div className="mb-4 flex items-center justify-center gap-1 text-[#d4af37]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="#d4af37" stroke="#d4af37" />
            ))}
          </div>
          <blockquote className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-slate-800">
            “{current.quote}”
          </blockquote>
          <div className="mt-6 text-center text-sm text-slate-600">
            <span className="font-semibold text-slate-900">{current.name}</span> · {current.role}
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${index === i ? 'bg-[#0a2540]' : 'bg-slate-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
