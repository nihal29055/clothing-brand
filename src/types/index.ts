export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'kurtas' | 'co-ords' | 'dresses' | 'bottoms';
  images: string[];
  description: string;
  fabricDetails: string;
  isNewArrival: boolean;
  isBestseller: boolean;
  availableSizes: string[];
  colors: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: 'kurtas' | 'co-ords' | 'dresses' | 'bottoms';
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: 'styling' | 'sustainability' | 'textile' | 'craftsmanship';
  slug: string;
}

export interface NavItem {
  title: string;
  href: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}