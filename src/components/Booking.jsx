import React, { useState } from 'react';
import { CalendarDays, Clock, CreditCard, Video, Phone, Mail, MapPin, MessageCircle, Linkedin, Twitter } from 'lucide-react';

const times = [
  '09:00', '09:30', '10:00', '10:30', '11:00',
  '13:00', '13:30', '14:00', '14:30', '15:00',
];

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('30');
  const [video, setVideo] = useState('zoom');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment requested on ${date} at ${time} for ${duration} minutes via ${video}. Payment step will open in checkout.`);
  };

  return (
    <section id="booking" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Book an Appointment</h2>
          <p className="mt-3 text-slate-600">Select a date, time and checkout securely.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Booking form */}
          <form onSubmit={handleSubmit} className="grid h-fit gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white p-3 pr-10 text-slate-800 outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20"
                />
                <CalendarDays className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Time</label>
              <div className="relative">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-white p-3 pr-10 text-slate-800 outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20"
                >
                  <option value="" disabled>Select a time</option>
                  {times.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <Clock className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Duration</label>
              <div className="grid grid-cols-2 gap-3">
                {['30', '60'].map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`rounded-lg border p-3 text-sm font-medium ${duration === d ? 'border-[#0a2540] bg-[#0a2540] text-white' : 'border-slate-300 bg-white text-slate-800'}`}
                  >
                    {d} minutes
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Video Call</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'zoom', label: 'Zoom' },
                  { key: 'meet', label: 'Google Meet' },
                ].map((v) => (
                  <button
                    type="button"
                    key={v.key}
                    onClick={() => setVideo(v.key)}
                    className={`rounded-lg border p-3 text-sm font-medium ${video === v.key ? 'border-[#0a2540] bg-[#0a2540] text-white' : 'border-slate-300 bg-white text-slate-800'}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Video className="h-4 w-4" /> {v.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(212,175,55,0.35)] transition-colors hover:shadow-[0_12px_26px_rgba(212,175,55,0.45)]"
              >
                <CreditCard className="h-4 w-4" /> Continue to Payment
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                Payments via Stripe / Razorpay. You will receive email and WhatsApp confirmation.
              </p>
            </div>
          </form>

          {/* Contact + Map */}
          <div id="contact" className="grid content-start gap-6">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0a2540]">Contact</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                <div className="flex items-center gap-3"><Mail size={18}/> advisory@executive.studio</div>
                <div className="flex items-center gap-3"><Phone size={18}/> +1 (312) 555-0190</div>
                <div className="flex items-center gap-3"><MapPin size={18}/> One Market Plaza, San Francisco, CA</div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="WhatsApp" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50"><MessageCircle size={16}/> WhatsApp</a>
                <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50"><Linkedin size={16}/> LinkedIn</a>
                <a href="#" aria-label="Twitter" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50"><Twitter size={16}/> X</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=One%20Market%20Plaza%2C%20San%20Francisco%2C%20CA&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
