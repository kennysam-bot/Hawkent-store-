import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              <span>About Hawkents Store & Fitness</span>
              <span className="text-slate-600">·</span>
              <span>Est. 2020</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
              Where International Fashion Meets Athletic Performance & Daily Nutrition.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Hawkents was founded on a simple realization: everyday shoppers and fitness enthusiasts shouldn't have to bounce between three different places to buy quality footwear, durable everyday fashion, reliable gym gear, and fresh post-workout nutrition.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We operate flagship storefronts in <strong className="text-white">Victoria Island & Ikeja (Lagos, Nigeria)</strong>, the <strong className="text-white">Galleria District (Houston, USA)</strong>, and <strong className="text-white">Queen West (Toronto, Canada)</strong>. Whether you are 14 years old looking for streetwear sneakers, a mother shopping baby apparel, or a 55-year-old executive seeking Italian leather loafers and health coaching, Hawkents delivers trusted quality with zero guesswork.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xl">🏬</span>
                <h4 className="mt-2 text-sm font-bold text-white">Physical Walk-In</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Try before you buy in our spacious fitting rooms with expert sizing staff.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xl">🏋️‍♂️</span>
                <h4 className="mt-2 text-sm font-bold text-white">Equipped Gym</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Free weights, cardio zones, and functional fitness gear ($80–$200 range).
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xl">🥗</span>
                <h4 className="mt-2 text-sm font-bold text-white">Clean Nutrition</h4>
                <p className="mt-1 text-xs text-slate-400">
                  On-site protein bowls, organic smoothies, and first-timer promo codes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center justify-between">
                <span>Who We Serve</span>
                <span className="text-xs text-blue-400 font-mono">Ages 11 – 60</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="text-blue-400 font-mono font-bold text-sm">01</span>
                  <div>
                    <h5 className="font-bold text-white">Men & Women Apparel & Footwear</h5>
                    <p className="text-slate-400 mt-0.5">
                      Tailored Oxford shirts, genuine denim, Ankara prints, stiletto pumps, and court sneakers.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="text-blue-400 font-mono font-bold text-sm">02</span>
                  <div>
                    <h5 className="font-bold text-white">Baby & Toddler Boutique</h5>
                    <p className="text-slate-400 mt-0.5">
                      Organic cotton onesies, insulated diaper bags, first-steps shoes, and heirloom cashmere.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="text-blue-400 font-mono font-bold text-sm">03</span>
                  <div>
                    <h5 className="font-bold text-white">Fitness Members & Athletes</h5>
                    <p className="text-slate-400 mt-0.5">
                      Adjustable cast-iron dumbbells, recovery guns, high-density yoga mats, and protein bowls.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="text-blue-400 font-mono font-bold text-sm">04</span>
                  <div>
                    <h5 className="font-bold text-white">Luggage & Everyday Bags</h5>
                    <p className="text-slate-400 mt-0.5">
                      Anti-theft commuter backpacks, carry-on trolleys, leather briefcases, and gym duffels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Store Action */}
              <div className="pt-2">
                <a
                  href="#locations"
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-xs text-center block transition-colors"
                >
                  Find Your Nearest Walk-In Store
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
