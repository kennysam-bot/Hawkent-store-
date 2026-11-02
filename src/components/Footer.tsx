import React from 'react';

interface FooterProps {
  onOpenPhone: () => void;
  onOpenFoodBooking: () => void;
  onOpenCatalogue: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPhone,
  onOpenFoodBooking,
  onOpenCatalogue,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-3">
            <a href="/" className="text-lg font-black text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black">
                H
              </span>
              <span>Hawkents Store & Fitness Center</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              International retail fashion storefront and modern fitness center. Serving walk-in shoppers and online customers across Nigeria, the United States, and Canada with verified quality.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Registered Retail Business & Physical Showrooms
            </div>
          </div>

          {/* Quick Departments */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Departments
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Shoes (Men, Women, Baby, Unisex)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Apparel & Clothes ($12 – $250)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Bags & Travel Luggage
                </a>
              </li>
              <li>
                <a href="#fitness" className="hover:text-white transition-colors">
                  Fitness Equipment ($80 – $200)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCatalogue}
                  className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  Master 12-Section Catalogue
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Perks */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Store Services
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={onOpenFoodBooking}
                  className="hover:text-white transition-colors text-left"
                >
                  Book Food (15% Off 1st Timer)
                </button>
              </li>
              <li>
                <a href="#fitness" className="hover:text-white transition-colors">
                  Gym Day Pass & Membership
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  In-Store Fitting Suites
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Lagos Same-Day Delivery
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  USA & Canada Courier Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Phone Lines */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Direct Phone Lines
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="block text-slate-500 text-[11px]">Lagos, Nigeria:</span>
                <a href="tel:+2348024295368" className="text-white hover:text-blue-400 font-mono font-medium">
                  +234 802 429 5368
                </a>
              </li>
              <li>
                <span className="block text-slate-500 text-[11px]">USA Toll-Free:</span>
                <a href="tel:+18004295368" className="text-white hover:text-blue-400 font-mono font-medium">
                  +1 (800) 429-5368
                </a>
              </li>
              <li>
                <span className="block text-slate-500 text-[11px]">Canada Support:</span>
                <a href="tel:+16475554295" className="text-white hover:text-blue-400 font-mono font-medium">
                  +1 (647) 555-4295
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Hawkents Store & Fitness Center. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Victoria Island & Ikeja · Houston Galleria · Queen West Toronto</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
