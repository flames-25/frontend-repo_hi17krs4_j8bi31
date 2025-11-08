import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold text-[#0a2540]">Executive Advisory</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="text-slate-700 hover:text-[#0a2540]">Services</a>
            <a href="#testimonials" className="text-slate-700 hover:text-[#0a2540]">Testimonials</a>
            <a href="#booking" className="text-slate-700 hover:text-[#0a2540]">Book</a>
          </nav>
          <a
            href="#booking"
            className="rounded-lg bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(212,175,55,0.35)]"
          >
            Book Appointment
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Booking />
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
