import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Twitter } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="bg-[#0a2540] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Partner with a trusted advisor.</h3>
            <p className="mt-3 text-white/70">
              Precision strategy • Operational rigor • Executive calm. Let’s shape your next inflection point.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#booking" className="rounded-lg bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(212,175,55,0.35)]">
                Book Appointment
              </a>
              <a href="#contact" className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 text-sm text-white/80">
              <div className="flex items-center gap-3"><Mail size={18}/> advisory@executive.studio</div>
              <div className="flex items-center gap-3"><Phone size={18}/> +1 (312) 555-0190</div>
              <div className="flex items-center gap-3"><MapPin size={18}/> One Market Plaza, San Francisco, CA</div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70">
              <a href="#" aria-label="WhatsApp" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><MessageCircle size={18}/></a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><Linkedin size={18}/></a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><Twitter size={18}/></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Executive Advisory Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
