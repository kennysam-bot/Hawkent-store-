import React, { useState } from 'react';
import { Currency } from '../types';
import { FOOD_MENU } from '../data/foodMenu';
import { STORE_LOCATIONS } from '../data/locations';
import { formatPrice } from '../data/currencies';

interface FoodBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const FoodBookingModal: React.FC<FoodBookingModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({
    'food-1': 1, // Default selected power bowl
  });
  const [locationId, setLocationId] = useState<string>(STORE_LOCATIONS[0].id);
  const [diningType, setDiningType] = useState<'dine-in' | 'pickup'>('dine-in');
  const [date, setDate] = useState<string>('Today');
  const [timeSlot, setTimeSlot] = useState<string>('12:30 PM (Lunch)');
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [promoCode, setPromoCode] = useState<string>('HAWKFIRST');
  const [promoApplied, setPromoApplied] = useState<boolean>(true);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmationNumber, setConfirmationNumber] = useState<string>('');

  if (!isOpen) return null;

  const handleQuantity = (foodId: string, delta: number) => {
    setSelectedItems((prev) => {
      const current = prev[foodId] || 0;
      const next = Math.max(0, current + delta);
      const copy = { ...prev };
      if (next === 0) {
        delete copy[foodId];
      } else {
        copy[foodId] = next;
      }
      return copy;
    });
  };

  const subtotalUSD = Object.entries(selectedItems).reduce((sum, [foodId, qty]) => {
    const item = FOOD_MENU.find((f) => f.id === foodId);
    return sum + (item ? item.priceUSD * qty : 0);
  }, 0);

  const discountRate = promoApplied && promoCode.trim().toUpperCase() === 'HAWKFIRST' ? 0.15 : 0;
  const discountUSD = subtotalUSD * discountRate;
  const totalUSD = Math.max(0, subtotalUSD - discountUSD);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    const orderNum = `HWK-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationNumber(orderNum);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-red-400">
                1st Timer Special
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">Fresh Fitness Fuel Bar</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Book a Food Order & Nutrition Table
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-200">
          {bookingConfirmed ? (
            /* Confirmation Receipt State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h4 className="text-xl font-bold text-white">Food Booking Confirmed!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you <strong className="text-white">{customerName}</strong>! Your table and kitchen prep ticket has been issued with your 1st-timer 15% discount.
              </p>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Ticket #:</span>
                  <span className="text-white font-bold">{confirmationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white">{STORE_LOCATIONS.find((l) => l.id === locationId)?.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">When:</span>
                  <span className="text-white">{date} at {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Type:</span>
                  <span className="text-white uppercase font-bold">{diningType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone:</span>
                  <span className="text-white">{phone}</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-2 text-sm font-sans font-bold">
                  <span className="text-emerald-400">Total (15% Off Applied):</span>
                  <span className="text-white font-mono">{formatPrice(totalUSD, currency)}</span>
                </div>
              </div>

              <div className="text-xs text-slate-400">
                We've sent an instant SMS confirmation to {phone}. Show this receipt or give your phone number at the counter.
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-xs"
                >
                  Done & Return to Store
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Promo Banner Applied */}
              <div className="p-3 bg-gradient-to-r from-red-950/60 to-blue-950/60 border border-red-900/50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎟️</span>
                  <div>
                    <span className="text-xs font-bold text-red-300">
                      1st-Timer Promo Code Active: HAWKFIRST
                    </span>
                    <p className="text-[11px] text-slate-400">
                      Enjoy 15% discount automatically deducted from your kitchen order.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800">
                  -15% OFF
                </span>
              </div>

              {/* Step 1: Select Meals & Smoothies */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Choose Your Fresh Fitness Meals & Fuel Shakes
                </label>
                <div className="space-y-2">
                  {FOOD_MENU.map((food) => {
                    const qty = selectedItems[food.id] || 0;
                    return (
                      <div
                        key={food.id}
                        className={`p-3 rounded-lg border transition-colors flex items-center justify-between gap-3 ${
                          qty > 0
                            ? 'bg-slate-800/90 border-blue-600/60'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white truncate">
                              {food.name}
                            </span>
                            <span className="text-[10px] text-blue-400 font-mono bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-900">
                              {food.protein}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {food.description}
                          </p>
                          <div className="text-xs font-mono font-bold text-slate-300 mt-1">
                            {formatPrice(food.priceUSD, currency)} · {food.calories} kcal
                          </div>
                        </div>

                        {/* Quantity Buttons */}
                        <div className="flex items-center gap-2 shrink-0">
                          {qty > 0 ? (
                            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-md">
                              <button
                                type="button"
                                onClick={() => handleQuantity(food.id, -1)}
                                className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white text-sm"
                              >
                                -
                              </button>
                              <span className="w-7 text-center font-mono font-bold text-xs text-white">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleQuantity(food.id, 1)}
                                className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white text-sm"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleQuantity(food.id, 1)}
                              className="px-3 py-1 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-semibold rounded-md border border-slate-700 transition-colors"
                            >
                              + Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Location & Dining Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    2. Select Flagship Kitchen
                  </label>
                  <select
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {STORE_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.flag} {loc.city} ({loc.country})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    3. Dining Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDiningType('dine-in')}
                      className={`py-2 text-xs font-semibold rounded-lg border text-center transition-colors ${
                        diningType === 'dine-in'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      Dine-In Table
                    </button>
                    <button
                      type="button"
                      onClick={() => setDiningType('pickup')}
                      className={`py-2 text-xs font-semibold rounded-lg border text-center transition-colors ${
                        diningType === 'pickup'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      Quick Store Pickup
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3: Schedule Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    4. Day
                  </label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Today">Today (Within 30–45 mins)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Weekend (Saturday)">Saturday (Post-Cardio Session)</option>
                    <option value="Sunday">Sunday (Recovery Day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    5. Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="8:30 AM (Morning Fuel)">8:30 AM (Morning Fuel)</option>
                    <option value="12:30 PM (Lunch)">12:30 PM (Midday Power Meal)</option>
                    <option value="3:30 PM (Pre-Workout)">3:30 PM (Pre-Workout Boost)</option>
                    <option value="6:30 PM (Post-Gym Dinner)">6:30 PM (Post-Gym Recovery Dinner)</option>
                    <option value="8:00 PM (Late Refuel)">8:00 PM (Late Refuel)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samuel Adeleke"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone Number (SMS Alert) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 802 000 0000 or +1 800..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Order Total & Promo Calculation Summary */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal ({Object.values(selectedItems).reduce((a, b) => a + b, 0)} items):</span>
                  <span className="font-mono text-white">{formatPrice(subtotalUSD, currency)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>1st Timer Promo (15% OFF):</span>
                    <span className="font-mono">-{formatPrice(discountUSD, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                  <span>Pay at Counter / Pickup Total:</span>
                  <span className="font-mono text-emerald-400">{formatPrice(totalUSD, currency)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={subtotalUSD === 0}
                className="w-full py-3 px-4 bg-red-600 hover:bg-red-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold rounded-lg text-sm shadow-lg transition-colors cursor-pointer"
              >
                Confirm Food Booking & Claim 15% Promo
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
