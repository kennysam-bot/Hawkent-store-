import React, { useState } from 'react';
import { STORE_LOCATIONS } from '../data/locations';

export const LocationsContact: React.FC = () => {
  const [selectedLocId, setSelectedLocId] = useState<string>(STORE_LOCATIONS[0].id);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: STORE_LOCATIONS[0].city,
    topic: 'Store Visit & Sizing',
    message: '',
  });

  const activeLoc = STORE_LOCATIONS.find((l) => l.id === selectedLocId) || STORE_LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out your name and phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section id="locations" className="py-16 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1.5">
            <span>Physical Storefronts & Inquiries</span>
            <span className="text-slate-600">·</span>
            <span>Local Service Desks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Visit Our Walk-In Stores or Call Us Today
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Our floor managers and certified coaches are ready to welcome you in Nigeria, the United States, and Canada.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
          {STORE_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setSelectedLocId(loc.id);
                setFormData((prev) => ({ ...prev, location: loc.city }));
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
                selectedLocId === loc.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="text-base">{loc.flag}</span>
              <span>{loc.city}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Grid: Active Location Card & Fast Contact / Callback Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Location Details Card */}
          <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                  {activeLoc.country} Flagship
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeLoc.city}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeLoc.neighborhood}</p>
              </div>
              <span className="text-3xl">{activeLoc.flag}</span>
            </div>

            {/* Address & Hours */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <strong className="text-white block font-medium">Physical Address:</strong>
                  <span>{activeLoc.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-white block font-medium">Operating Hours:</strong>
                  <span>Mon – Sat: {activeLoc.hoursWeekday}</span>
                  <span className="block text-slate-400">Sunday: {activeLoc.hoursWeekend}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <strong className="text-white block font-medium">Direct Phone Line:</strong>
                  <a href={`tel:${activeLoc.phoneRaw}`} className="font-mono text-blue-400 font-bold hover:underline">
                    {activeLoc.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* In-Store Available Services */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Available In-Store Facilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeLoc.services.map((srv, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons: Call Now, WhatsApp, Directions */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a
                href={`tel:${activeLoc.phoneRaw}`}
                className="py-3 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Store</span>
              </a>

              <a
                href={`https://wa.me/${activeLoc.whatsapp}?text=Hello%20Hawkents%20Store%2C%20I%20would%20like%20to%20inquire%20about%20visiting%20the%20${encodeURIComponent(activeLoc.city)}%20store`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${activeLoc.googleMapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Instant Message & Callback Request Form */}
          <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                Fast Response Guarantee
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Send a Message or Request a Call Back
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                We respond within 15 minutes during store hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3 bg-slate-900 rounded-xl border border-slate-800 p-6">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-white">Message Received!</h4>
                <p className="text-xs text-slate-300">
                  Thank you <strong className="text-white">{formData.name}</strong>. Our team in {formData.location} will call or reply to <strong className="text-white">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs text-blue-400 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Lawal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Phone Number (Call or WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 802 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Target Store Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
                    >
                      {STORE_LOCATIONS.map((l) => (
                        <option key={l.id} value={l.city}>
                          {l.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Topic / Department
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Store Visit & Sizing">Store Walk-In & Sizing</option>
                      <option value="Food & Nutrition Booking">Food & Nutrition Bar Booking</option>
                      <option value="Gym Membership / Day Pass">Gym Membership / Day Pass</option>
                      <option value="Delivery & Order Status">Delivery & Order Status</option>
                      <option value="Wholesale / Bulk Inquiry">Wholesale / Bulk Store Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Your Message / Sizing Question
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what shoe sizes or clothing items you want us to set aside in the fitting room..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs shadow-lg transition-colors cursor-pointer"
                >
                  Send Inquiry / Request Immediate Callback
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
