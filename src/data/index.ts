import { Product, Category, BlogPost } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Kalamkari Cotton Kurta',
    price: 2800,
    category: 'kurtas',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
      'https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg'
    ],
    description: 'Handcrafted Kalamkari cotton kurta with traditional block prints and intricate detailing. Perfect for both casual and festive occasions.',
    fabricDetails: '100% Organic Cotton | Hand Block Printed | Natural Dyes',
    isNewArrival: true,
    isBestseller: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Indigo', 'Rust', 'Olive']
  },
  {
    id: '2',
    name: 'Linen Palazzo Co-ord Set',
    price: 4200,
    category: 'co-ords',
    images: [
      'https://images.pexels.com/photos/11679544/pexels-photo-11679544.jpeg',
      'https://images.pexels.com/photos/11679545/pexels-photo-11679545.jpeg'
    ],
    description: 'Premium linen co-ord set featuring a relaxed-fit top and wide-leg palazzo pants. Versatile and breathable for everyday elegance.',
    fabricDetails: '100% Pure Linen | Hand Finished | Natural Texture',
    isNewArrival: true,
    isBestseller: false,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Natural', 'Sage', 'Blush']
  },
  {
    id: '3',
    name: 'Chanderi Silk Dress',
    price: 5600,
    category: 'dresses',
    images: [
      'https://images.pexels.com/photos/7682350/pexels-photo-7682350.jpeg',
      'https://images.pexels.com/photos/7682351/pexels-photo-7682351.jpeg'
    ],
    description: 'Elegant Chanderi silk dress with delicate hand embroidery. A timeless piece that transitions effortlessly from day to evening wear.',
    fabricDetails: 'Chanderi Silk Cotton Blend | Hand Embroidered | Ethical Production',
    isNewArrival: false,
    isBestseller: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Blush Pink', 'Sea Green']
  },
  {
    id: '4',
    name: 'Mulmul Cotton Palazzo',
    price: 2200,
    category: 'bottoms',
    images: [
      'https://images.pexels.com/photos/7682637/pexels-photo-7682637.jpeg',
      'https://images.pexels.com/photos/7682638/pexels-photo-7682638.jpeg'
    ],
    description: 'Flowy Mulmul cotton palazzo pants with a comfortable elasticated waistband. Perfect for the summer months.',
    fabricDetails: 'Soft Mulmul Cotton | Breathable | Hand Washed Finish',
    isNewArrival: false,
    isBestseller: false,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Off-White', 'Charcoal', 'Mustard']
  },
  {
    id: '5',
    name: 'Jamdani Weave Kurta',
    price: 3800,
    category: 'kurtas',
    images: [
      'https://images.pexels.com/photos/7760845/pexels-photo-7760845.jpeg',
      'https://images.pexels.com/photos/7760846/pexels-photo-7760846.jpeg'
    ],
    description: 'Exquisite Jamdani weave kurta with intricate patterns. A celebration of traditional craftsmanship with a contemporary silhouette.',
    fabricDetails: 'Fine Cotton | Jamdani Weave | Artisan Crafted',
    isNewArrival: true,
    isBestseller: false,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Ecru', 'Powder Blue']
  },
  {
    id: '6',
    name: 'Handloom Cotton Dress',
    price: 3600,
    category: 'dresses',
    images: [
      'https://images.pexels.com/photos/7682670/pexels-photo-7682670.jpeg',
      'https://images.pexels.com/photos/7682672/pexels-photo-7682672.jpeg'
    ],
    description: 'Relaxed handloom cotton dress with pockets and minimal detailing. An everyday essential that combines comfort with effortless style.',
    fabricDetails: 'Handloom Cotton | Natural Texture | Low Impact Dyes',
    isNewArrival: false,
    isBestseller: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Terracotta', 'Indigo', 'Black']
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Kurtas',
    slug: 'kurtas',
    description: 'Discover our collection of handcrafted kurtas made from the finest natural fabrics.',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg'
  },
  {
    id: '2',
    name: 'Co-ords',
    slug: 'co-ords',
    description: 'Elevate your wardrobe with our matching co-ord sets that blend comfort with elegance.',
    image: 'https://images.pexels.com/photos/11679544/pexels-photo-11679544.jpeg'
  },
  {
    id: '3',
    name: 'Dresses',
    slug: 'dresses',
    description: 'From casual to festive, our dresses are designed for the modern woman who values both style and comfort.',
    image: 'https://images.pexels.com/photos/7682350/pexels-photo-7682350.jpeg'
  },
  {
    id: '4',
    name: 'Bottoms',
    slug: 'bottoms',
    description: 'Complete your look with our range of premium handcrafted bottoms in breathable natural fabrics.',
    image: 'https://images.pexels.com/photos/7682637/pexels-photo-7682637.jpeg'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Layering: Styling Your Kurtas for Different Seasons',
    excerpt: 'Discover versatile styling techniques to make the most of your Karppasa pieces all year round.',
    image: 'https://images.pexels.com/photos/7679436/pexels-photo-7679436.jpeg',
    date: 'May 15, 2023',
    category: 'styling',
    slug: 'art-of-layering'
  },
  {
    id: '2',
    title: 'Understanding Natural Dyes: The Karppasa Commitment',
    excerpt: 'Learn about our eco-friendly dyeing process and why we choose natural dyes for our garments.',
    image: 'https://images.pexels.com/photos/6044260/pexels-photo-6044260.jpeg',
    date: 'April 22, 2023',
    category: 'sustainability',
    slug: 'natural-dyes-commitment'
  },
  {
    id: '3',
    title: 'The Journey of Cotton: From Field to Fabric',
    excerpt: 'Follow the fascinating journey of how organic cotton transforms from a humble plant to your favorite Karppasa garment.',
    image: 'https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg',
    date: 'March 10, 2023',
    category: 'textile',
    slug: 'cotton-journey'
  }
];

export const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Shop', href: '/shop' },
  { title: 'Collections', href: '/collections' },
  { title: 'Our Story', href: '/story' },
  { title: 'Journal', href: '/journal' },
  { title: 'Contact', href: '/contact' }
];