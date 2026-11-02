import React from 'react';
import { Product } from '../types';

interface ProductVisualProps {
  product: Product;
  className?: string;
  onOpenCatalogue?: () => void;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ product, className = '', onOpenCatalogue }) => {
  // Domain color schemes based on category
  const getCategoryColor = () => {
    switch (product.category) {
      case 'shoes':
        return 'from-blue-900/40 via-slate-900 to-slate-950 text-blue-400';
      case 'clothes':
        return 'from-indigo-950/40 via-slate-900 to-slate-950 text-indigo-400';
      case 'bags':
        return 'from-amber-950/30 via-slate-900 to-slate-950 text-amber-400';
      case 'fitness':
        return 'from-red-950/40 via-slate-900 to-slate-950 text-red-400';
      default:
        return 'from-slate-800 via-slate-900 to-slate-950 text-slate-300';
    }
  };

  const getCategoryIcon = () => {
    switch (product.category) {
      case 'shoes':
        return (
          <svg className="w-16 h-16 stroke-current stroke-[1.25] fill-none" viewBox="0 0 64 64">
            <path d="M12 38c0-8 6-14 14-14h12l10 8c4 3 6 8 6 13 0 3-2 5-6 5H18c-4 0-6-4-6-12z" />
            <path d="M12 44h46" />
            <path d="M26 24l4 12" />
            <path d="M34 24l2 12" />
            <path d="M14 50h44c2 0 4-2 4-4v-2H10v2c0 2 2 4 4 4z" />
          </svg>
        );
      case 'clothes':
        return (
          <svg className="w-16 h-16 stroke-current stroke-[1.25] fill-none" viewBox="0 0 64 64">
            <path d="M20 14l12 6 12-6 8 10-6 4v26H18V28l-6-4 8-10z" />
            <path d="M26 14a6 6 0 0 0 12 0" />
            <path d="M32 20v30" />
            <path d="M32 26h-4" />
            <path d="M32 34h-4" />
          </svg>
        );
      case 'bags':
        return (
          <svg className="w-16 h-16 stroke-current stroke-[1.25] fill-none" viewBox="0 0 64 64">
            <rect x="14" y="22" width="36" height="30" rx="4" />
            <path d="M24 22v-6a8 8 0 0 1 16 0v6" />
            <path d="M14 34h36" />
            <circle cx="32" cy="34" r="3" />
            <path d="M22 22l4 12" />
            <path d="M42 22l-4 12" />
          </svg>
        );
      case 'fitness':
        return (
          <svg className="w-16 h-16 stroke-current stroke-[1.25] fill-none" viewBox="0 0 64 64">
            <path d="M12 24v16M16 20v24M16 32h32M48 20v24M52 24v16" strokeLinecap="round" strokeWidth="2.5" />
            <rect x="8" y="26" width="4" height="12" rx="1" />
            <rect x="52" y="26" width="4" height="12" rx="1" />
            <circle cx="32" cy="32" r="3" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative w-full aspect-[4/3] bg-gradient-to-b ${getCategoryColor()} flex items-center justify-center overflow-hidden rounded-t-lg group ${className}`}
    >
      {/* Subtle geometric pattern backdrop */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative catalogue index watermark tag */}
      <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider uppercase text-slate-400 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-800">
        CAT #{product.catalogCategoryIndex || '01'}
      </div>

      {/* Verified quality marker */}
      <div className="absolute top-3 right-3 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 backdrop-blur-sm px-2 py-0.5 rounded border border-emerald-800/60 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        Authentic
      </div>

      {/* Center Icon & Visual Focal Point */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-inner backdrop-blur-sm">
          {getCategoryIcon()}
        </div>
        <span className="mt-2 text-xs font-medium text-slate-300 tracking-wide uppercase">
          {product.audience} • {product.category}
        </span>
      </div>

      {/* Subtle bottom overlay for quick catalogue jump */}
      {onOpenCatalogue && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenCatalogue();
          }}
          className="absolute bottom-2 right-2 text-[10px] text-blue-300 hover:text-white bg-blue-900/70 hover:bg-blue-800 px-2 py-1 rounded transition-colors backdrop-blur-sm flex items-center gap-1"
          title="Open in Master Catalogue Sheet"
        >
          <span>Poster Index</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      )}
    </div>
  );
};
