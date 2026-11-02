import React from 'react';
import { STORE_LOCATIONS } from '../data/locations';

interface PhoneDialerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhoneDialerModal: React.FC<PhoneDialerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Call Hawkents Store Desk</h3>
              <p className="text-xs text-slate-400">Speak with a store associate or floor coach</p>
            </div>
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

        {/* Body Lines */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-300">
            Select your nearest region to dial directly or start a quick WhatsApp chat:
          </p>

          <div className="space-y-3">
            {STORE_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span>{loc.flag}</span>
                    <span className="text-xs font-bold text-white">{loc.city}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{loc.hoursWeekday}</div>
                  <div className="text-xs font-mono font-bold text-blue-400 mt-1">
                    {loc.phone}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${loc.phoneRaw}`}
                    className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Dial</span>
                  </a>

                  <a
                    href={`https://wa.me/${loc.whatsapp}?text=Hello%20Hawkents%20Store%2C%20I%20am%20inquiring%20about%20your%20products%20and%20store%20hours`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center transition-colors"
                    title="WhatsApp"
                  >
                    💬
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-blue-950/40 border border-blue-900/60 rounded-xl text-center text-xs text-blue-200">
            Need directions? Visit any branch for walk-in fittings, meal pickups, and gym orientation.
          </div>
        </div>

      </div>
    </div>
  );
};
