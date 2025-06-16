import React from 'react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-sm">
      <div className="aspect-w-4 aspect-h-5 bg-beige-50">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="text-xl font-serif font-medium mb-1">{category.name}</h3>
        <p className="text-sm opacity-90 mb-3">{category.description}</p>
        <span className="inline-block border-b border-white pb-1 text-sm group-hover:border-b-2 transition-all duration-300">
          Explore Collection
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;