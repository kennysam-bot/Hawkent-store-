import React, { useState } from 'react';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCategoryIndex?: number;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  targetCategoryIndex,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  const categories = [
    { index: 1, name: "1. Men's Clothing (10 Items)" },
    { index: 2, name: "2. Women's Clothing (10 Items)" },
    { index: 3, name: "3. Baby Clothing (10 Items)" },
    { index: 4, name: "4. Unisex Products (10 Items)" },
    { index: 5, name: "5. Men's Bags (10 Items)" },
    { index: 6, name: "6. Women's Bags (10 Items)" },
    { index: 7, name: "7. Kids' Bags (10 Items)" },
    { index: 8, name: "8. Unisex Bags (10 Items)" },
    { index: 9, name: "9. Barber Equipment (10 Items)" },
    { index: 10, name: "10. Fitness Products (10 Items)" },
    { index: 11, name: "11. Men's Shoes (10 Items)" },
    { index: 12, name: "12. Women's Shoes (10 Items)" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-blue-400">
                Official Store Poster
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-slate-400">Master 12-Section Visual Inventory</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Hawkents Fashion & Products Master Catalogue
            </h2>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-2.5 transition-colors"
              title="Zoom Out"
            >
              Zoom Out
            </button>
            <span className="text-xs font-mono text-slate-300 w-12 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-2.5 transition-colors"
              title="Zoom In"
            >
              Zoom In
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-2 transition-colors hidden sm:inline-block"
            >
              Reset
            </button>
            <button
              onClick={onClose}
              className="p-2 ml-2 rounded-lg bg-slate-800 hover:bg-red-950 hover:text-red-400 text-slate-400 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Shortcut Badges */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 border-b border-slate-800 overflow-x-auto scrollbar-none text-xs">
          <span className="text-slate-400 whitespace-nowrap font-medium text-[11px] pr-1">
            Catalogue Index:
          </span>
          {categories.map((cat) => {
            const isTarget = targetCategoryIndex === cat.index;
            return (
              <span
                key={cat.index}
                className={`px-2.5 py-1 rounded text-[11px] whitespace-nowrap transition-colors border ${
                  isTarget
                    ? 'bg-blue-600 text-white border-blue-500 font-semibold shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-700'
                }`}
              >
                {cat.name}
              </span>
            );
          })}
        </div>

        {/* Poster Viewer Container */}
        <div className="relative flex-1 overflow-auto p-4 bg-slate-950/90 flex justify-center items-start">
          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            className="transition-transform duration-200 max-w-full"
          >
            <img
              src="/assets/aistudio/image_c096d6e2.png"
              alt="Hawkents Fashion and Products Official Catalogue"
              className="rounded-lg shadow-2xl border border-slate-800 max-w-full h-auto object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>All 12 Product Sections Available In-Store & For International Shipping</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/assets/aistudio/image_c096d6e2.png"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 flex items-center gap-1"
            >
              <span>Open Raw High-Res File</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
