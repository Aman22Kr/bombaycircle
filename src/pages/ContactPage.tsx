import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Check, 
  Calendar, 
  Users, 
  Sparkles,
  Train,
  Plane
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ContactPage: React.FC = () => {
  const { addReservation, reservations, showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      showToast('Please provide your name, phone number, and reservation date.');
      return;
    }
    addReservation({
      name,
      email: email || 'walkin@bombaycircle.org',
      phone,
      date,
      time,
      guests,
      specialRequests: notes.trim() || undefined
    });
    setSubmitted(true);
    showToast('Table inquiry saved! We look forward to welcoming you.');
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setNotes('');
    }, 3000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-amber-700" />
          <span>Come Sit With Us in Marol</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900">
          Visit Us &amp; Reserve a Table
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Whether you want a quiet corner to read with a hot cortado or a large table for Spanish tapas with friends, our doors are wide open.
        </p>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Location & Timings Card */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-200 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  Location Information
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  bombaycircle
                </h3>
                <p className="text-xs text-stone-400">The Library Café &amp; Solidarity Space</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Street Address</strong>
                    <span className="text-stone-300">
                      Timmy Arcade, 778, Makwana Rd, Gamdevi, Marol, Andheri East, Mumbai, Maharashtra 400059
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Operating Hours</strong>
                    <span className="text-stone-300">
                      Tuesday – Sunday: 10:00 AM – 10:45 PM
                    </span>
                    <span className="block text-amber-400 text-xs mt-0.5 font-medium">
                      (Mondays Closed for youth training &amp; rest)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Phone &amp; WhatsApp</strong>
                    <span className="text-stone-300">+91 77384 46788</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Direct Email</strong>
                    <span className="text-stone-300">contact@bombaycircle.org</span>
                  </div>
                </div>
              </div>

              {/* Transit Guide */}
              <div className="pt-4 border-t border-stone-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  How To Reach
                </span>
                <div className="space-y-1.5 text-xs text-stone-400">
                  <p className="flex items-center gap-2">
                    <Train className="w-3.5 h-3.5 text-stone-300" />
                    <span>Metro: Marol Naka (Line 1 &amp; Line 3 Aqua Line) — 5 min walk</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Plane className="w-3.5 h-3.5 text-stone-300" />
                    <span>Airport: Mumbai International T2 Terminal — 10 min drive</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-800/80 rounded-2xl border border-stone-700 text-xs text-amber-200/90 font-serif italic">
              "We welcome anyone, from street children to visiting ambassadors. You belong here."
            </div>
          </div>

          {/* Table Reservation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
                Reservation Desk
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Book a Table or Community Gathering
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Let us know in advance so our youth team can reserve your favorite reading corner or table.
              </p>
            </div>

            {submitted ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center space-y-3">
                <Check className="w-12 h-12 text-amber-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-amber-900">
                  Table Inquiry Received!
                </h4>
                <p className="text-xs text-amber-800 max-w-sm mx-auto">
                  We look forward to hosting you on {date} at {time}. Our team will WhatsApp or call {phone} to confirm table arrangements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Gonzalez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Phone Number (WhatsApp)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Time Slot</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value="11:00">11:00 AM (Brunch)</option>
                      <option value="13:00">01:00 PM (Lunch Tapas)</option>
                      <option value="16:00">04:00 PM (Tea &amp; Books)</option>
                      <option value="18:30">06:30 PM (Evening Sunset)</option>
                      <option value="20:00">08:00 PM (Dinner &amp; Pastas)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Party Size</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value={1}>1 person (Solo reader)</option>
                      <option value={2}>2 people</option>
                      <option value={4}>4 people</option>
                      <option value={6}>6 people</option>
                      <option value={10}>Large Group (8-12)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="maria@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Special Requests or Seating Preference
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Near bookshelf window, celebrating a birthday, high chair needed..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Table Reservation Request</span>
                </button>
              </form>
            )}

            {/* Saved user reservations in localStorage */}
            {reservations.length > 0 && (
              <div className="pt-6 border-t border-stone-200 space-y-2">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Your Recent Table Inquiries ({reservations.length})
                </span>
                <div className="space-y-1.5">
                  {reservations.slice(0, 2).map((r) => (
                    <div
                      key={r.id}
                      className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-xs flex justify-between items-center text-stone-700"
                    >
                      <div>
                        <strong>{r.date}</strong> at {r.time} ({r.guests} guests)
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                        Confirmed on File
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
