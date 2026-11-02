import React, { useState } from 'react';
import { Currency, Product } from '../types';
import { formatPrice } from '../data/currencies';
import { ProductVisual } from './ProductVisual';

interface ProductQuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onOpenCatalogue: (categoryIndex?: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  currency,
  onAddToCart,
  onOpenCatalogue,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const currentSize = selectedSize || product.sizes?.[0];
  const currentColor = selectedColor || product.colors?.[0];

  const handleAdd = () => {
    onAddToCart(product, currentSize, currentColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>{product.category}</span>
            <span className="text-slate-600">·</span>
            <span>{product.audience}</span>
            <span className="text-slate-600">·</span>
            <span>Catalog #{product.catalogCategoryIndex || '01'}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Visual Box */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <ProductVisual product={product} />
              <div className="p-3 bg-slate-950 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCatalogue(product.catalogCategoryIndex);
                  }}
                  className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 flex items-center justify-center gap-1 mx-auto"
                >
                  <span>Locate in Master 12-Section Catalogue Sheet</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product Details & Purchase Controls */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-black font-mono text-white tabular-nums">
                    {formatPrice(product.priceUSD, currency)}
                  </span>
                  {product.originalPriceUSD && (
                    <span className="text-xs font-mono text-slate-400 line-through tabular-nums">
                      {formatPrice(product.originalPriceUSD, currency)}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* Sizes Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Select Size:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                          currentSize === s
                            ? 'bg-blue-600 text-white border-blue-500 font-bold'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Color:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                          currentColor === c
                            ? 'bg-slate-700 text-white border-slate-500 font-semibold'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Specifications & Integrity:
                </span>
                <ul className="space-y-1 text-xs text-slate-400">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Bag Action */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-xs text-center transition-all cursor-pointer ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                  }`}
                >
                  {added ? 'Added to Bag!' : `Add to Bag • ${formatPrice(product.priceUSD, currency)}`}
                </button>
                <div className="text-center text-[10px] text-slate-400 mt-2">
                  Available for walk-in try-on today in Lagos, Houston, and Toronto.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
