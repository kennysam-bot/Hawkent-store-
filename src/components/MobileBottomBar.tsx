import React from 'react';

interface MobileBottomBarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenFoodBooking: () => void;
  onOpenPhone: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  cartCount,
  onOpenCart,
  onOpenFoodBooking,
  onOpenPhone,
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 lg:hidden px-3 py-2">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5">
        
        {/* Call Now Button */}
        <button
          onClick={onOpenPhone}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer min-h-[44px]"
        >
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-medium mt-0.5 whitespace-nowrap">Call Store</span>
        </button>

        {/* Directions / Walk-In */}
        <a
          href="#locations"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer min-h-[44px]"
        >
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[10px] font-medium mt-0.5 whitespace-nowrap">Visit Store</span>
        </a>

        {/* Book Food Primary CTA */}
        <button
          onClick={onOpenFoodBooking}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-red-600/90 hover:bg-red-600 text-white transition-colors cursor-pointer min-h-[44px]"
        >
          <span className="text-base leading-none">🥗</span>
          <span className="text-[10px] font-bold mt-0.5 whitespace-nowrap">Book Food</span>
        </button>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer min-h-[44px]"
        >
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="text-[10px] font-medium mt-0.5 whitespace-nowrap">Cart</span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-2 w-4 h-4 bg-blue-600 text-white font-bold text-[9px] rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};
