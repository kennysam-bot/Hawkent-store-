import React, { useState } from 'react';
import { Currency, Product } from '../types';
import { formatPrice } from '../data/currencies';
import { ProductVisual } from './ProductVisual';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onQuickView: (product: Product) => void;
  onOpenCatalogue: (categoryIndex?: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onAddToCart,
  onQuickView,
  onOpenCatalogue,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.sizes?.[0], product.colors?.[0]);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group flex flex-col bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-xl cursor-pointer"
    >
      {/* Product Visual Container */}
      <ProductVisual
        product={product}
        onOpenCatalogue={() => onOpenCatalogue(product.catalogCategoryIndex)}
      />

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-4 justify-between space-y-3">
        <div>
          {/* Clean Unboxed Metadata */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium uppercase tracking-wider mb-1.5">
            <span className="text-blue-400">{product.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{product.audience}</span>
            {product.originalPriceUSD && (
              <>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-red-400 font-semibold">Special</span>
              </>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* 1-Line Description */}
          <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing, Sizes & Action Row */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold font-mono text-white tabular-nums">
                {formatPrice(product.priceUSD, currency)}
              </span>
              {product.originalPriceUSD && (
                <span className="text-xs font-mono text-slate-400 line-through tabular-nums">
                  {formatPrice(product.originalPriceUSD, currency)}
                </span>
              )}
            </div>

            {/* In-Store Ready Badge */}
            <span className="text-[11px] text-emerald-400 font-medium">
              In Stock · Walk-In Ready
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="py-2 px-3 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors text-center"
            >
              Details
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
              }`}
            >
              {isAdded ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Added</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
