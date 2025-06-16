import React from 'react';
import BlogCard from '../ui/BlogCard';
import { BlogPost } from '../../types';
import Button from '../ui/Button';

interface JournalSectionProps {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
}

const JournalSection: React.FC<JournalSectionProps> = ({
  title,
  subtitle,
  posts
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;