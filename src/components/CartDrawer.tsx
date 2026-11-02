import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../data/currencies';
import { STORE_LOCATIONS } from '../data/locations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');
  const [fulfillmentMethod, setFulfillmentMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedLocation, setSelectedLocation] = useState(STORE_LOCATIONS[0].city);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentOption, setPaymentOption] = useState<'cod' | 'card'>('cod');
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const rawSubtotalUSD = cartItems.reduce(
    (sum, item) => sum + item.product.priceUSD * item.quantity,
    0
  );

  const discountRate = appliedPromo === 'HAWKFIRST' ? 0.15 : 0;
  const discountUSD = rawSubtotalUSD * discountRate;
  const totalUSD = Math.max(0, rawSubtotalUSD - discountUSD);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HAWKFIRST') {
      setAppliedPromo('HAWKFIRST');
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try HAWKFIRST for 15% off.');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) {
      alert('Please provide your name and phone number for delivery or pickup.');
      return;
    }
    const id = `HAWK-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(id);
    setIsOrdered(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col text-slate-100">
          
          {/* Drawer Header */}
          <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h2 className="text-base font-bold text-white">Your Shopping Cart</h2>
              <span className="text-xs font-mono text-slate-400">({cartItems.length} items)</span>
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

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isOrdered ? (
              /* Success confirmation */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Order Confirmed!</h3>
                <p className="text-xs text-slate-300">
                  Order <strong className="text-white font-mono">{orderNumber}</strong> has been logged. Our local store desk in {selectedLocation} will call {phone} to verify delivery details.
                </p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-left space-y-1.5 font-mono">
                  <div>Customer: {customerName}</div>
                  <div>Phone: {phone}</div>
                  <div>Method: {fulfillmentMethod.toUpperCase()}</div>
                  <div>Payment: {paymentOption === 'cod' ? 'Pay upon pickup/delivery' : 'Direct Card/Transfer'}</div>
                </div>
                <button
                  onClick={() => {
                    setIsOrdered(false);
                    onClose();
                  }}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <svg className="w-12 h-12 text-slate-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-sm font-semibold text-slate-300">Your cart is empty</h3>
                <p className="text-xs text-slate-500">
                  Explore our footwear, clothing, bags, and fitness equipment collections.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-start gap-3"
                    >
                      <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-blue-400 shrink-0 border border-slate-800">
                        CAT #{item.product.catalogCategoryIndex || '01'}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {item.product.audience} · {item.product.category}
                        </div>
                        <div className="text-xs font-mono font-bold text-white mt-1 tabular-nums">
                          {formatPrice(item.product.priceUSD, currency)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold"
                          >
                            -
                          </button>
                          <span className="text-xs font-mono font-bold w-6 text-center text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold"
                          >
                            +
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="ml-auto text-[11px] text-red-400 hover:text-red-300"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-300">
                    Promo Code (Try: <span className="text-amber-400 font-mono">HAWKFIRST</span>)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white uppercase font-mono focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <div className="text-[11px] text-emerald-400">
                      ✓ Promo code <strong>{appliedPromo}</strong> applied (15% Off)!
                    </div>
                  )}
                  {promoError && (
                    <div className="text-[11px] text-red-400">{promoError}</div>
                  )}
                </form>

                {/* Fulfillment Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300">
                    Fulfillment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setFulfillmentMethod('pickup')}
                      className={`p-2.5 rounded-lg border text-center font-semibold transition-colors ${
                        fulfillmentMethod === 'pickup'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      Store Walk-In Pick-Up (Free)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFulfillmentMethod('delivery')}
                      className={`p-2.5 rounded-lg border text-center font-semibold transition-colors ${
                        fulfillmentMethod === 'delivery'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      Doorstep Delivery
                    </button>
                  </div>
                </div>

                {/* Checkout Fields */}
                <form onSubmit={handleCheckout} className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oluwaseun Adeleke"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Phone Number (Required for confirmation) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 802 000 0000 or +1 800..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {fulfillmentMethod === 'delivery' ? (
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Delivery Address (Nigeria, USA, Canada)</label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Street address, City, State/Province, Country..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Pick-Up Branch</label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500"
                      >
                        {STORE_LOCATIONS.map((loc) => (
                          <option key={loc.id} value={loc.city}>
                            {loc.flag} {loc.city}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Payment Preference */}
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Payment Option</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setPaymentOption('cod')}
                        className={`p-2 rounded-lg border text-center transition-colors ${
                          paymentOption === 'cod'
                            ? 'bg-slate-700 text-white border-slate-500 font-semibold'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Pay on Pickup / Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentOption('card')}
                        className={`p-2 rounded-lg border text-center transition-colors ${
                          paymentOption === 'card'
                            ? 'bg-slate-700 text-white border-slate-500 font-semibold'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Card / Bank Transfer
                      </button>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-slate-400 font-sans">
                      <span>Subtotal:</span>
                      <span className="text-white font-mono">{formatPrice(rawSubtotalUSD, currency)}</span>
                    </div>
                    {discountUSD > 0 && (
                      <div className="flex justify-between text-emerald-400 font-sans">
                        <span>Promo Code (15% OFF):</span>
                        <span className="font-mono">-{formatPrice(discountUSD, currency)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-bold text-white pt-1.5 border-t border-slate-800 font-sans">
                      <span>Estimated Total:</span>
                      <span className="text-emerald-400 font-mono">{formatPrice(totalUSD, currency)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs shadow-lg transition-colors cursor-pointer"
                  >
                    Place Order & Confirm with Store
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
