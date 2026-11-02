import React, { useState, useMemo } from 'react';
import { Audience, Category, Currency, Product } from '../types';
import { ALL_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  currency: Currency;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onQuickView: (product: Product) => void;
  onOpenCatalogue: (categoryIndex?: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currency,
  onAddToCart,
  onQuickView,
  onOpenCatalogue,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedAudience, setSelectedAudience] = useState<Audience>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Audience filter
      if (selectedAudience !== 'all' && product.audience !== selectedAudience) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesAudience = product.audience.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesAudience) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      return 0;
    });
  }, [selectedCategory, selectedAudience, searchQuery, sortBy]);

  const categoriesConfig: { id: Category | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'All Collections', count: ALL_PRODUCTS.length },
    { id: 'shoes', label: 'Shoes & Footwear', count: ALL_PRODUCTS.filter((p) => p.category === 'shoes').length },
    { id: 'clothes', label: 'Clothing & Apparel', count: ALL_PRODUCTS.filter((p) => p.category === 'clothes').length },
    { id: 'fitness', label: 'Fitness Center Gear', count: ALL_PRODUCTS.filter((p) => p.category === 'fitness').length },
    { id: 'bags', label: 'Bags & Luggage', count: ALL_PRODUCTS.filter((p) => p.category === 'bags').length },
  ];

  const audienceOptions: { id: Audience; label: string }[] = [
    { id: 'all', label: 'All Departments' },
    { id: 'men', label: "Men's ($12 - $50)" },
    { id: 'women', label: "Women's ($18 - $90)" },
    { id: 'baby', label: "Baby & Kids ($12 - $250)" },
    { id: 'unisex', label: "Unisex ($20 - $150)" },
  ];

  return (
    <section id="catalog" className="py-16 bg-[#0b0f19] border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1.5">
              <span>Verified Store Inventory</span>
              <span className="text-slate-600">·</span>
              <span>Available In-Store & Online</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Curated Collections & Fitness Gear
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Authentic footwear, apparel, and durable bags for ages 11 to 60, alongside professional gym equipment ($80–$200).
            </p>
          </div>

          {/* Master Poster Quick Trigger */}
          <button
            onClick={() => onOpenCatalogue()}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-blue-300 rounded-lg border border-slate-700 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>View Full 12-Section Catalogue Sheet</span>
          </button>
        </div>

        {/* Filter Toolbar: Categories, Audiences, Search & Sort */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-8 space-y-4">
          {/* Collection Tabs (Single-line controls) */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {categoriesConfig.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[11px] opacity-75 font-mono">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Sub-Filters: Audience Segment & Search & Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-3 border-t border-slate-800 items-center">
            {/* Audience Segment Buttons */}
            <div className="md:col-span-7 flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
              {audienceOptions.map((aud) => (
                <button
                  key={aud.id}
                  onClick={() => setSelectedAudience(aud.id)}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedAudience === aud.id
                      ? 'bg-slate-700 text-white border border-slate-600'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {aud.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="md:col-span-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search styles, sizes, gear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <svg
                  className="w-4 h-4 text-slate-500 absolute left-2.5 top-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1.5 text-slate-400 hover:text-white text-xs"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Catalog Results Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-slate-900/50 rounded-xl border border-slate-800">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="text-base font-semibold text-white">No products found</h4>
            <p className="mt-1 text-xs text-slate-400">
              Try adjusting your search query or department filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedAudience('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4 text-xs text-slate-400">
              <span>
                Showing <strong className="text-white font-mono">{filteredProducts.length}</strong> items in inventory
              </span>
              <span>All items available for walk-in try-on & international dispatch</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                  onOpenCatalogue={onOpenCatalogue}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};
