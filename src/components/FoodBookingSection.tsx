import React from 'react';
import { Currency } from '../types';
import { FOOD_MENU } from '../data/foodMenu';
import { formatPrice } from '../data/currencies';

interface FoodBookingSectionProps {
  currency: Currency;
  onOpenBooking: () => void;
}

export const FoodBookingSection: React.FC<FoodBookingSectionProps> = ({
  currency,
  onOpenBooking,
}) => {
  return (
    <section id="food-bar" className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0d1322] border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with 1st Timer Promo */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/80 via-slate-900 to-blue-950/80 border border-red-900/60 p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
                <span>Hawkents Fuel Kitchen</span>
                <span className="text-slate-600">·</span>
                <span>Exclusive Welcome Offer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Book Fresh Healthy Food With Promo Code as 1st Timer
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you just wrapped up a heavy gym session or walked in to shop footwear and apparel, refuel with chef-crafted, high-protein meal prep bowls, organic smoothies, and cold-pressed juices.
              </p>
              <div className="flex items-center gap-2 text-xs pt-1">
                <span className="text-slate-400">Use promo code at checkout:</span>
                <span className="font-mono font-bold text-amber-400 bg-black/40 px-2 py-0.5 rounded border border-amber-500/40">
                  HAWKFIRST
                </span>
                <span className="text-emerald-400 font-semibold">(15% OFF entire order)</span>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm shadow-xl hover:shadow-red-600/30 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book a food with promo code as 1st timer</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Clean Fuel & Macro Nutrition
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl font-black text-white">
            Prepared Daily at Our Store Kitchens
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Zero processed seed oils, 100% whole food ingredients, and precise macronutrient breakdowns for athletes and busy professionals.
          </p>
        </div>

        {/* Food Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOOD_MENU.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition-colors space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-bold text-white leading-snug">
                    {item.name}
                  </h4>
                  {item.isPopular && (
                    <span className="shrink-0 text-[10px] font-semibold text-red-300 bg-red-950/80 border border-red-800/80 px-2 py-0.5 rounded">
                      Top Pick
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-2 text-xs">
                  <span className="text-blue-400 font-mono font-bold bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/60">
                    {item.protein}
                  </span>
                  <span className="text-slate-400 font-mono">
                    {item.calories} kcal
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400 capitalize">
                    {item.category}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Ingredients */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.ingredients.slice(0, 4).map((ing, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Book Button */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Regular</span>
                  <span className="text-base font-bold font-mono text-white tabular-nums">
                    {formatPrice(item.priceUSD, currency)}
                  </span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="py-1.5 px-3 bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Order Table / Pickup</span>
                  <span className="text-[10px] text-amber-400 font-mono font-bold">-15%</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
