import { Currency, CurrencyConfig } from '../types';

export const CURRENCIES: Record<Currency, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    rate: 1.0,
    format: (amount: number) => `$${amount.toFixed(2)}`,
  },
  NGN: {
    code: 'NGN',
    symbol: '₦',
    rate: 1550, // 1 USD = 1,550 NGN
    format: (amount: number) => `₦${Math.round(amount * 1550).toLocaleString()}`,
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    rate: 1.38, // 1 USD = 1.38 CAD
    format: (amount: number) => `CA$${(amount * 1.38).toFixed(2)}`,
  },
};

export function formatPrice(amountUSD: number, currency: Currency): string {
  const config = CURRENCIES[currency] || CURRENCIES.USD;
  return config.format(amountUSD);
}
