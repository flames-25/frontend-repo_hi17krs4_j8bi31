import React from 'react';
import { Briefcase, LineChart, Rocket, Wallet } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Business Growth Coaching',
    duration: ['30 min', '60 min'],
    price: ['$150', '$280'],
    description:
      '1:1 strategy to scale revenue, streamline operations, and sharpen positioning.',
  },
  {
    icon: LineChart,
    title: 'Investment Consulting',
    duration: ['30 min', '60 min'],
    price: ['$180', '$320'],
    description:
      'Portfolio review, risk alignment, and deal flow frameworks for informed decisions.',
  },
  {
    icon: Rocket,
    title: 'Brand Strategy',
    duration: ['30 min', '60 min'],
    price: ['$140', '$260'],
    description:
      'Narrative, messaging, and go-to-market clarity to command a premium.',
  },
  {
    icon: Wallet,
    title: 'Financial Advisory',
    duration: ['30 min', '60 min'],
    price: ['$160', '$300'],
    description:
      'Cashflow, pricing, and forecasting to strengthen margins and runway.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-[#0a2540] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Advisory Services</h2>
          <p className="mt-3 text-white/70">
            Transparent pricing, premium delivery. Choose a session to get started.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, duration, price, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-yellow-300 text-black shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-white/70">{duration[0]}</div>
                  <div className="font-semibold text-[#d4af37]">{price[0]}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-white/70">{duration[1]}</div>
                  <div className="font-semibold text-[#d4af37]">{price[1]}</div>
                </div>
              </div>
              <a
                href="#booking"
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(212,175,55,0.35)] transition hover:shadow-[0_12px_26px_rgba(212,175,55,0.45)]"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
