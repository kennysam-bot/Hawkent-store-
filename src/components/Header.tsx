import React, { useState } from 'react';
import { Currency } from '../types';

interface HeaderProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenFoodBooking: () => void;
  onOpenPhoneDialer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
  cartCount,
  onOpenCart,
  onOpenFoodBooking,
  onOpenPhoneDialer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Slim Local Store Trust & Announcement Ribbon */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80 px-4 py-1.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-none whitespace-nowrap text-[11px] sm:text-xs">
          <span className="font-medium text-blue-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Walk-In Flagship Stores: Lagos 🇳🇬 · Houston 🇺🇸 · Toronto 🇨🇦
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">
            Use Code <strong className="text-amber-400 font-mono">HAWKFIRST</strong> for 15% Off Nutrition & Food Bar
          </span>
        </div>

        {/* Quick Phone Action & Currency Selector */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenPhoneDialer}
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-xs"
          >
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-medium">+234 802 HAWKENT / +1 800 429-5368</span>
          </button>

          {/* Currency Toggle */}
          <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-md p-0.5 text-[11px] font-mono">
            {(['USD', 'NGN', 'CAD'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currentCurrency === c
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Top Bar (Conforms strictly to 3-Zone Top Bar Contract) */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="/"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
              H
            </span>
            <span className="text-white group-hover:text-blue-400 transition-colors">
              Hawkents <span className="text-blue-500 font-semibold text-base sm:text-lg">Store</span>
            </span>
          </a>

          {/* Zone 2: 4-5 Concise Single-line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#catalog" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Collections
            </a>
            <a href="#fitness" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Fitness Center
            </a>
            <a href="#food-bar" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Food & Nutrition Bar
            </a>
            <a href="#locations" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Store Locations
            </a>
            <a href="#why-us" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Why Hawkents
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Shopping Bag */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Action Button */}
            <button
              onClick={onOpenFoodBooking}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Food (15% Off)
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="View shopping cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-blue-600 text-white font-bold text-[11px] rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <a
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Collections (Shoes, Clothes, Bags, Gear)
              </a>
              <a
                href="#fitness"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Fitness Center & Gym
              </a>
              <a
                href="#food-bar"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Food & Nutrition Bar (15% Off Promo)
              </a>
              <a
                href="#locations"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Physical Stores & Hours (Nigeria, USA, Canada)
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Why Choose Hawkents
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFoodBooking();
                }}
                className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg text-xs text-center"
              >
                Book a Food with Promo Code (1st Timer)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPhoneDialer();
                }}
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg text-xs text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Flagship Store
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
