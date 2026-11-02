import React from 'react';

interface HeroProps {
  onOpenFoodBooking: () => void;
  onOpenPhoneDialer: () => void;
  onOpenCatalogue: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenFoodBooking,
  onOpenPhoneDialer,
  onOpenCatalogue,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-[#0d1322] to-slate-950 border-b border-slate-800 text-slate-100 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(29,78,216,0.18),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Two-Column Grid: Left Content / Right Visual Poster Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Headline, Copy, CTAs, Phone Numbers) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Trust Kicker (Unboxed clean text) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-400 uppercase tracking-wider">
              <span>Local Walk-In Stores</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Lagos Nigeria</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Houston USA</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Toronto Canada</span>
            </div>

            {/* Clear Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-white [text-wrap:balance]">
              Premium Fashion, High-Performance Footwear & Modern Fitness Center.
            </h1>

            {/* Subheadline Mentioning Location & Concrete Benefit */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Serving customers across Nigeria, the United States, and Canada. Walk into our physical stores to try on curated clothing and shoes, train in our full-scale gym, and refuel at our fresh organic nutrition kitchen.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA (User specified exact label) */}
              <button
                onClick={onOpenFoodBooking}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-red-600/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book a food with promo code as 1st timer</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenPhoneDialer}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </button>
            </div>

            {/* Clearly Visible Phone Numbers Block */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">🇳🇬 Lagos Store:</span>
                <a href="tel:+2348024295368" className="font-semibold text-white hover:text-blue-400 font-mono">
                  +234 802 429 5368
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">🇺🇸 USA Line:</span>
                <a href="tel:+18004295368" className="font-semibold text-white hover:text-blue-400 font-mono">
                  +1 (800) 429-5368
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">🇨🇦 Canada Desk:</span>
                <a href="tel:+16475554295" className="font-semibold text-white hover:text-blue-400 font-mono">
                  +1 (647) 555-4295
                </a>
              </div>
            </div>

            {/* Promo Code Reminder */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-900/60 text-xs text-blue-200">
              <span className="font-bold text-amber-400 font-mono">PROMO: HAWKFIRST</span>
              <span className="text-slate-400">·</span>
              <span>15% off your first meal bowl or recovery smoothie order</span>
            </div>
          </div>

          {/* Right Column: Master Catalogue Poster Showcase & Quick Inspector */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-xl bg-slate-900/90 border border-slate-700 p-3 shadow-2xl overflow-hidden">
              {/* Header Label inside card */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Official Store Catalogue
                </span>
                <button
                  onClick={onOpenCatalogue}
                  className="text-blue-400 hover:text-blue-300 font-medium text-[11px] flex items-center gap-1 cursor-pointer"
                >
                  <span>Expand Master View</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>

              {/* Clickable Image Preview */}
              <div
                onClick={onOpenCatalogue}
                className="relative overflow-hidden rounded-lg aspect-[4/3] bg-slate-950 cursor-pointer"
              >
                <img
                  src="/assets/aistudio/image_c096d6e2.png"
                  alt="Hawkents Store Fashion & Products Master Catalogue"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <div className="w-full flex items-center justify-between text-xs text-white">
                    <span className="bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium border border-slate-700">
                      12 Complete Product Lines In-Stock
                    </span>
                    <span className="text-[11px] text-blue-300 underline underline-offset-2">
                      Click to inspect
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast Category Quick Jumps */}
              <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[11px]">
                <a
                  href="#catalog"
                  className="py-1.5 px-2 bg-slate-800/80 hover:bg-blue-900/40 text-slate-300 hover:text-white rounded transition-colors border border-slate-700/60"
                >
                  Shoes (28 Styles)
                </a>
                <a
                  href="#catalog"
                  className="py-1.5 px-2 bg-slate-800/80 hover:bg-blue-900/40 text-slate-300 hover:text-white rounded transition-colors border border-slate-700/60"
                >
                  Apparel (28 Styles)
                </a>
                <a
                  href="#catalog"
                  className="py-1.5 px-2 bg-slate-800/80 hover:bg-blue-900/40 text-slate-300 hover:text-white rounded transition-colors border border-slate-700/60"
                >
                  Bags (28 Styles)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Store Benefit Strip (Full-width below hero split) */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              3 Flagships
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Walk-in physical branches in Lagos, Houston & Toronto with fitting suites.
            </p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              100% Genuine
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Direct factory verified quality across shoes, clothes, bags, and fitness gear.
            </p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              Ages 11–60
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Tailored collections for teens, active adults, toddlers, and fitness enthusiasts.
            </p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              Fresh Fuel Bar
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Nutritious pre & post workout meal prep bowls with first-timer promo discounts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
