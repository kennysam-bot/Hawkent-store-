import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Walk-In Physical Stores with Fitting Suites',
      description: 'Never worry about incorrect sizes or misleading online photos. Visit our stores in Lagos, Houston, or Toronto to feel the fabrics, test the shoe arch support, and consult our floor specialists.',
      metric: '3 Flagship Stores',
    },
    {
      number: '02',
      title: '100% Genuine Materials & Factory Verified',
      description: 'We do not sell cheap knockoffs. Every pair of sneakers, leather tote bag, and cast-iron dumbbell is sourced directly from certified manufacturers with rigorous quality control.',
      metric: 'Zero Counterfeits',
    },
    {
      number: '03',
      title: 'Integrated Gym & Fresh Fuel Bar',
      description: 'Workout with commercial equipment, browse current streetwear arrivals, and enjoy a fresh high-protein bowl or recovery shake with 15% off first-timer promo code HAWKFIRST.',
      metric: 'All Under One Roof',
    },
    {
      number: '04',
      title: 'Multi-Currency & Fast Doorstep Dispatch',
      description: 'Pay seamlessly in Nigerian Naira (₦), US Dollars ($), or Canadian Dollars (CA$). We offer same-day dispatch in Lagos and express 2-day domestic courier service across North America.',
      metric: 'Nigeria · USA · Canada',
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-[#0b0f19] border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1.5">
            <span>Customer Trust & Integrity</span>
            <span className="text-slate-600">·</span>
            <span>Why Local Shoppers Rely On Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Why Choose Hawkents Store & Fitness Center
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Built for local families, athletes, and professionals who appreciate transparent pricing, authentic products, and reliable customer service.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-900/80">
                    {pillar.number}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs text-blue-400 font-semibold gap-1">
                <span>Verified in Lagos, Houston & Toronto</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
