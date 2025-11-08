import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden bg-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-36">
        <span className="rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur">
          Premium Consulting • Trusted by Leaders
        </span>
        <h1 className="mt-6 text-center font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Elevate Your Strategy. <span className="text-[#0a2540]">Accelerate Growth.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-center text-base leading-7 text-slate-600 md:text-lg">
          Advisory for business owners, coaches, consultants, and investors seeking
          clarity, execution excellence, and measurable outcomes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(212,175,55,0.35)] transition-transform hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(212,175,55,0.45)] focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Book Appointment
          </a>
          <a
            href="#testimonials"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
          >
            Client Results
          </a>
        </div>

        {/* Trust metrics */}
        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 items-center gap-6 rounded-xl border border-black/5 bg-white/70 p-4 text-sm text-slate-600 shadow-sm backdrop-blur md:grid-cols-4">
          <div className="text-center">
            <div className="text-xl font-bold text-[#0a2540]">$500M+</div>
            <div>Client pipeline influenced</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[#0a2540]">18+ yrs</div>
            <div>Advisory experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[#0a2540]">30+</div>
            <div>Markets served</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[#0a2540]">4.9/5</div>
            <div>Average rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
