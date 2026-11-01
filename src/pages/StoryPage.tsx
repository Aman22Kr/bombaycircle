import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, BookOpen, Coffee, Sparkles, Quote, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { FOUNDER_STORY, MILESTONES, TEAM_MEMBERS } from '../data/storyData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const StoryPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
          <span>The Human Journey Behind bombaycircle</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
          "I am because of you. Remove the 'you' and I am nothing."
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
          How a boy who lived on the platform of Dadar railway station traveled to Barcelona and returned to build an open-door sanctuary where street youth find livelihood, books, and family.
        </p>
      </section>

      {/* Founder Narrative Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-3/4 border-4 border-amber-50 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Founder portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-2xl shadow-lg max-w-[200px] text-xs font-medium">
              <Quote className="w-4 h-4 mb-1 text-amber-200" />
              "Love is the only currency that never devalues."
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
              Founder &amp; Author • Amin Sheikh
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              From Railway Platforms to Mediterranean Cafes
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
              <p>
                At age five, fleeing an abusive domestic situation, Amin ended up at Mumbai’s bustling Dadar railway station. For three years, he survived by scavenging scraps, begging, washing tea glasses in roadside stalls, and avoiding the dangers that stalk homeless children.
              </p>
              <p>
                A profound turning point arrived when Father Placido Fonseca and the dedicated social workers of <em>Snehasadan</em> brought him to their boys' shelter. There, for the first time in his life, he was given safety, food, and human warmth.
              </p>
              <p>
                As a young adult, Amin found employment as an assistant and driver for Eustace Fernandez—the iconic advertising director famous for co-creating the beloved Amul butter girl. Eustace treated Amin like family. When Eustace gifted him a trip to Barcelona, Amin discovered European street cafes where students, professors, artists, and working people gathered openly without class divisions.
              </p>
              <p>
                Amin resolved to replicate that warmth in Mumbai, run entirely by former street kids, creating dignified jobs and equal living wages.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="bg-stone-900 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read About His Autobiography "Life is Life"</span>
              </Link>
              <Link
                to="/support"
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>Support the Youth Stipend Fund</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Milestones Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
            Chronology of Hope
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Milestones of the Circle
          </h2>
        </div>

        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
          {MILESTONES.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Year Pill for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-0 w-24 text-right">
                <span className="font-serif text-lg font-bold text-amber-800">{item.year}</span>
              </div>

              {/* Marker Dot */}
              <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-amber-600 border-4 border-amber-100 group-hover:scale-125 transition-transform" />

              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="sm:hidden text-xs font-bold text-amber-700 uppercase mb-1">
                  {item.year}
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="text-xs font-semibold text-amber-800 mb-2">{item.subtitle}</p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Youth Staff Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
            The Beating Heart
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Meet Our Baristas, Chefs &amp; Hosts
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Every staff member has overcome hardship and now earns equal living wages, with full medical coverage and shared safe apartments funded by the cafe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {member.role}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">{member.name}</h3>
                  <p className="text-xs text-stone-500 font-medium">{member.origin}</p>
                  <p className="text-xs text-stone-700 italic font-serif mt-3 border-l-2 border-amber-400 pl-2">
                    "{member.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 text-[11px] text-amber-800">
                  <span className="font-semibold">Favorite Dish:</span> {member.favoriteDish}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
