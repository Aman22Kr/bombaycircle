import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Coffee, 
  BookOpen, 
  Gift, 
  Check, 
  Send 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const SupportPage: React.FC = () => {
  const { pledges, addPledge, showToast } = useApp();

  const [pledgeType, setPledgeType] = useState<'cupcakes' | 'apprentice' | 'books' | 'general'>('cupcakes');
  const [pledgeAmount, setPledgeAmount] = useState<number>(450);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const pledgePresets = [
    { type: 'cupcakes', amount: 450, label: '5 Care Cupcakes & Milk for Street Kids' },
    { type: 'cupcakes', amount: 900, label: '10 Care Cupcakes & Treats for Kids' },
    { type: 'apprentice', amount: 3000, label: '1 Week Youth Apprenticeship & English Training' },
    { type: 'apprentice', amount: 12000, label: '1 Full Month Equal Pay Stipend & Medical' }
  ];

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) {
      showToast('Please enter your name and email');
      return;
    }
    addPledge({
      name: donorName,
      email: donorEmail,
      type: pledgeType,
      amount: pledgeAmount,
      message: message.trim() || undefined
    });
    setSubmitted(true);
    showToast('Thank you! Your solidarity pledge has been recorded.');
    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
    }, 3000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-900 border border-rose-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
          <span>Walk in Solidarity With Us</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900">
          Support The Circle
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          bombaycircle operates as a self-sustaining social enterprise where every rupee earned funds equal wages, safe apartments, and healthcare for youth formerly on Mumbai streets.
        </p>
      </section>

      {/* Solidarity Pillars / Opportunities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Cupcakes for Street Kids
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              When homeless children knock on our doors, our team serves them warm milk and freshly baked cupcakes free of cost. Sponsor a batch on your birthday or special occasion.
            </p>
            <span className="text-xs font-bold text-amber-700 block">₹90 per cupcake &amp; milk</span>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Apprentice Stipends
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Help sponsor an 8-month hospitality and barista apprenticeship for an adolescent aging out of an orphanage. Includes English classes, barista certification, and shared housing.
            </p>
            <span className="text-xs font-bold text-emerald-700 block">₹12,000 / month</span>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Donate Books &amp; Skills
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bring books with handwritten notes when you travel to Mumbai, or volunteer an hour on weekends to teach computer literacy, spoken English, or conversational Spanish.
            </p>
            <span className="text-xs font-bold text-blue-700 block">Open to all global volunteers</span>
          </div>
        </div>
      </section>

      {/* Interactive Pledge Calculator Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Register a Solidarity Pledge
            </h3>
            <p className="text-xs text-stone-500">
              Select an impact initiative or set your custom sponsorship tier.
            </p>
          </div>

          {/* Quick preset selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-stone-700">Choose Impact Tier</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pledgePresets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setPledgeType(preset.type as any);
                    setPledgeAmount(preset.amount);
                  }}
                  className={`p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between ${
                    pledgeAmount === preset.amount
                      ? 'border-amber-600 bg-amber-50/60 font-semibold text-stone-900 ring-2 ring-amber-500/30'
                      : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <span>{preset.label}</span>
                  <span className="font-bold text-amber-700 mt-1">₹{preset.amount}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handlePledgeSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordi Pujol"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jordi@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">
                Dedication Note or Greeting for the Youth
              </label>
              <textarea
                rows={2}
                placeholder="e.g. In celebration of my 30th birthday, sending love from Barcelona!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-center justify-between">
              <span>Selected Pledge Amount:</span>
              <span className="text-sm font-bold text-amber-800">₹{pledgeAmount}</span>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Pledge Registered! Thank You.</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Confirm Solidarity Pledge (₹{pledgeAmount})</span>
                </>
              )}
            </button>
          </form>

          {/* Recent Pledges persisted in localStorage */}
          {pledges.length > 0 && (
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Recent Solidarity Supporters ({pledges.length})
              </h4>
              <div className="space-y-2">
                {pledges.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex justify-between items-center"
                  >
                    <div>
                      <span className="font-semibold text-stone-900">{p.name}</span>
                      {p.message && (
                        <p className="text-[11px] text-stone-500 italic mt-0.5">"{p.message}"</p>
                      )}
                    </div>
                    <span className="font-bold text-amber-700 shrink-0">₹{p.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Financial Transparency Charter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="bg-stone-100 rounded-2xl p-6 border border-stone-200 space-y-2">
          <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
          <h4 className="font-serif text-lg font-bold text-stone-900">
            Our 100% Transparency Commitment
          </h4>
          <p className="text-xs text-stone-600 max-w-lg mx-auto leading-relaxed">
            bombaycircle is not a profit-extracting company. All earnings from food sales and solidarity pledges are directly re-invested into apprentice salaries, health insurance, residential apartments, and free meals.
          </p>
        </div>
      </section>

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
