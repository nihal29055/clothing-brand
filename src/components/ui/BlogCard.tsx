import React from 'react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-sm bg-beige-50">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover object-center aspect-w-16 aspect-h-9 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="mt-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span className="capitalize">{post.category}</span>
        </div>
        
        <h3 className="text-lg font-medium font-serif text-gray-800 group-hover:text-olive-700 transition-colors">
          {post.title}
        </h3>
        
        <p className="mt-2 text-sm text-gray-600">
          {post.excerpt}
        </p>
        
        <span className="inline-block mt-3 text-olive-700 text-sm group-hover:underline">
          Read more
        </span>
      </div>
    </div>
  );
};

export default BlogCard;