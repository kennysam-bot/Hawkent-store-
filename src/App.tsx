/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CartItem, Currency, Product } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { FoodBookingSection } from './components/FoodBookingSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MembershipPricing } from './components/MembershipPricing';
import { Testimonials } from './components/Testimonials';
import { LocationsContact } from './components/LocationsContact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FoodBookingModal } from './components/FoodBookingModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { PhoneDialerModal } from './components/PhoneDialerModal';
import { CatalogueModal } from './components/CatalogueModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hawkents_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFoodBookingOpen, setIsFoodBookingOpen] = useState(false);
  const [isPhoneDialerOpen, setIsPhoneDialerOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [catalogueCategoryIndex, setCatalogueCategoryIndex] = useState<number | undefined>(undefined);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('hawkents_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, size?: string, color?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedSize: size,
          selectedColor: color,
        },
      ];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenCatalogue = (categoryIndex?: number) => {
    setCatalogueCategoryIndex(categoryIndex);
    setIsCatalogueOpen(true);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
      
      {/* 1. Header (Follows Top Bar Contract) */}
      <Header
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFoodBooking={() => setIsFoodBookingOpen(true)}
        onOpenPhoneDialer={() => setIsPhoneDialerOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Critical) */}
        <Hero
          onOpenFoodBooking={() => setIsFoodBookingOpen(true)}
          onOpenPhoneDialer={() => setIsPhoneDialerOpen(true)}
          onOpenCatalogue={() => handleOpenCatalogue()}
        />

        {/* 3. Product Catalog (Collections 1-4) */}
        <ProductCatalog
          currency={currency}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          onOpenCatalogue={handleOpenCatalogue}
        />

        {/* 4. Food & Nutrition Bar Section */}
        <FoodBookingSection
          currency={currency}
          onOpenBooking={() => setIsFoodBookingOpen(true)}
        />

        {/* 5. About the Store & Fitness Center */}
        <AboutSection />

        {/* 6. Why Choose Hawkents Store & Fitness */}
        <WhyChooseUs />

        {/* 7. Membership & Fitness Pricing */}
        <MembershipPricing
          currency={currency}
          onOpenBooking={() => setIsFoodBookingOpen(true)}
          onOpenPhone={() => setIsPhoneDialerOpen(true)}
        />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Locations & Contact Form */}
        <LocationsContact />

        {/* 10. Final Call to Action */}
        <FinalCTA
          onOpenFoodBooking={() => setIsFoodBookingOpen(true)}
          onOpenPhone={() => setIsPhoneDialerOpen(true)}
          onScrollToCatalog={scrollToCatalog}
        />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenPhone={() => setIsPhoneDialerOpen(true)}
        onOpenFoodBooking={() => setIsFoodBookingOpen(true)}
        onOpenCatalogue={() => handleOpenCatalogue()}
      />

      {/* 12. Mobile Bottom Quick Bar */}
      <MobileBottomBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFoodBooking={() => setIsFoodBookingOpen(true)}
        onOpenPhone={() => setIsPhoneDialerOpen(true)}
      />

      {/* 13. Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <FoodBookingModal
        isOpen={isFoodBookingOpen}
        onClose={() => setIsFoodBookingOpen(false)}
        currency={currency}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
        onOpenCatalogue={handleOpenCatalogue}
      />

      <PhoneDialerModal
        isOpen={isPhoneDialerOpen}
        onClose={() => setIsPhoneDialerOpen(false)}
      />

      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        targetCategoryIndex={catalogueCategoryIndex}
      />
    </div>
  );
}
