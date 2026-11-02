export type Currency = 'USD' | 'NGN' | 'CAD';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number; // relative to USD 1.00
  format: (amountInUSD: number) => string;
}

export type Category = 'shoes' | 'clothes' | 'bags' | 'fitness';
export type Audience = 'men' | 'women' | 'baby' | 'unisex' | 'all';

export interface Product {
  id: string;
  name: string;
  category: Category;
  audience: Audience;
  priceUSD: number;
  originalPriceUSD?: number;
  rating: number;
  reviewCount: number;
  description: string;
  sizes?: string[];
  colors?: string[];
  badge?: string;
  inStock: boolean;
  features: string[];
  imagePlaceholderCategory: string;
  catalogCategoryIndex?: number; // references section 1-12 in user's poster
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'bowls' | 'smoothies' | 'recovery' | 'juices';
  priceUSD: number;
  calories: number;
  protein: string;
  description: string;
  ingredients: string[];
  isPopular?: boolean;
}

export interface FoodBooking {
  customerName: string;
  phone: string;
  email: string;
  locationId: string;
  date: string;
  timeSlot: string;
  diningType: 'dine-in' | 'pickup';
  selectedFoods: { foodId: string; quantity: number }[];
  promoCode: string;
  notes?: string;
}

export interface StoreLocation {
  id: string;
  city: string;
  country: string;
  flag: string;
  address: string;
  neighborhood: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  email: string;
  hoursWeekday: string;
  hoursWeekend: string;
  services: string[];
  googleMapsQuery: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  countryFlag: string;
  verifiedPurchase: string;
  quote: string;
  rating: number;
  date: string;
}
