import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = () => {
    addToCart(product, product.availableSizes[0], product.colors[0], 1);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-beige-50 aspect-w-3 aspect-h-4 rounded-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Quick shop overlay */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="p-4 text-center">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleAddToCart}
              className="mb-2 w-full"
            >
              Quick Add
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full bg-white/90"
            >
              View Details
            </Button>
          </div>
        </div>
        
        {/* Badge for new arrival or bestseller */}
        {(product.isNewArrival || product.isBestseller) && (
          <div className="absolute top-2 left-2">
            {product.isNewArrival && (
              <span className="inline-block bg-olive-600 text-white text-xs px-2 py-1 rounded-sm mr-2">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="inline-block bg-terracotta-600 text-white text-xs px-2 py-1 rounded-sm">
                Bestseller
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="mt-3">
        <h3 className="text-base font-medium text-gray-800">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">₹{product.price.toLocaleString()}</p>
        
        {/* Color options */}
        <div className="mt-2 flex space-x-1">
          {product.colors.map(color => (
            <div 
              key={color}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: getColorCode(color) }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to convert color names to color codes
function getColorCode(colorName: string): string {
  const colorMap: Record<string, string> = {
    'Indigo': '#3F51B5',
    'Rust': '#B7410E',
    'Olive': '#708238',
    'Natural': '#E8DCCA',
    'Sage': '#B2AC88',
    'Blush': '#FFB6C1',
    'Ivory': '#FFFFF0',
    'Blush Pink': '#FEC5E5',
    'Sea Green': '#2E8B57',
    'Off-White': '#FAF9F6',
    'Charcoal': '#36454F',
    'Mustard': '#E1AD01',
    'White': '#FFFFFF',
    'Ecru': '#C2B280',
    'Powder Blue': '#B0E0E6',
    'Terracotta': '#E2725B',
    'Black': '#000000'
  };
  
  return colorMap[colorName] || '#CCCCCC';
}

export default ProductCard;