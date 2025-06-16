import React from 'react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  subtitle,
  products
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;