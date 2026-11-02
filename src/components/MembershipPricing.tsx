import React from 'react';
import { Currency } from '../types';
import { formatPrice } from '../data/currencies';

interface MembershipPricingProps {
  currency: Currency;
  onOpenBooking: () => void;
  onOpenPhone: () => void;
}

export const MembershipPricing: React.FC<MembershipPricingProps> = ({
  currency,
  onOpenBooking,
  onOpenPhone,
}) => {
  const plans = [
    {
      name: 'Day Pass / Walk-In',
      priceUSD: 15,
      frequency: 'per day',
      description: 'Ideal for travelers, drop-in lifters, and shoppers wanting a quick power workout.',
      features: [
        'Full access to commercial gym & free weights',
        'Locker room, private showers & sauna access',
        '10% instant discount on in-store apparel & shoes',
        'Walk-in anytime during operating hours',
      ],
      cta: 'Get Day Pass',
      isPopular: false,
    },
    {
      name: 'Monthly Fitness & Retail Pass',
      priceUSD: 65,
      frequency: 'per month',
      description: 'Our most popular membership for local regular fitness goers and active shoppers.',
      features: [
        'Unlimited access to all gym equipment & cardio floor',
        '1 complimentary protein fuel shake every week',
        '15% permanent discount on all clothing, bags & shoes',
        'Guest pass privileges (2 per month)',
        'Free towel service and locker assignment',
      ],
      cta: 'Join Monthly',
      isPopular: true,
    },
    {
      name: 'VIP Athlete & Nutrition Tier',
      priceUSD: 120,
      frequency: 'per month',
      description: 'Full coaching, dedicated meal prep plan from our kitchen, and maximum store savings.',
      features: [
        'Unlimited 24/7 priority gym access',
        'Weekly personalized macronutrient meal prep plan',
        '2 monthly one-on-one sessions with a certified trainer',
        '20% VIP discount on all store items (shoes, gear, bags)',
        'Dedicated VIP locker with custom laundry turnaround',
      ],
      cta: 'Claim VIP Plan',
      isPopular: false,
    },
  ];

  return (
    <section id="fitness" className="py-16 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1.5">
            <span>Fitness Center Pricing & Perks</span>
            <span className="text-slate-600">·</span>
            <span>No Hidden Contracts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Transparent Memberships & Store Perks
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Train hard, look sharp, and refuel cleanly. Every gym plan comes with direct retail store discounts.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all ${
                plan.isPopular
                  ? 'bg-slate-950 border-2 border-blue-500 shadow-2xl relative'
                  : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-xs text-slate-400 min-h-[32px]">{plan.description}</p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-slate-800 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
                    {formatPrice(plan.priceUSD, currency)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/{plan.frequency}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs text-slate-300">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenPhone}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-xs transition-colors cursor-pointer text-center ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
                  }`}
                >
                  {plan.cta}
                </button>
                <div className="text-center text-[10px] text-slate-500 mt-2">
                  Walk in or call for instant orientation
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
