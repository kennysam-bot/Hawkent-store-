import React from 'react';

interface FinalCTAProps {
  onOpenFoodBooking: () => void;
  onOpenPhone: () => void;
  onScrollToCatalog: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenFoodBooking,
  onOpenPhone,
  onScrollToCatalog,
}) => {
  return (
    <section className="py-20 bg-gradient-to-t from-slate-950 via-[#0d1322] to-slate-900 border-b border-slate-800 text-slate-100 relative overflow-hidden">
      {/* Decorative ambient radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(29,78,216,0.15),transparent_50%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-950/60 border border-blue-900/60 px-3 py-1 rounded-full">
          <span>Ready For an Upgrade?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
          Experience Hawkents In Person or Order Online Today.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Walk into our flagship fitting rooms in Lagos, Houston, or Toronto. Try on fresh arrivals, book your first high-protein meal bowl with promo code <strong className="text-amber-400 font-mono">HAWKFIRST</strong>, or call our store associates right now.
        </p>

        {/* Action Group */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenFoodBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm shadow-xl hover:shadow-red-600/30 transition-all cursor-pointer whitespace-nowrap"
          >
            Book a food with promo code as 1st timer
          </button>

          <button
            onClick={onOpenPhone}
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg text-sm border border-slate-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Our Local Store</span>
          </button>

          <button
            onClick={onScrollToCatalog}
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
          >
            Shop Online Catalog
          </button>
        </div>

        {/* Quick Trust badges */}
        <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Zero-risk exchange policy
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Walk-in fitting rooms
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Multi-currency checkout
          </span>
        </div>
      </div>
    </section>
  );
};
