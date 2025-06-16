import React from 'react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-8">
            Subscribe to receive updates on new collections, artisan stories, and styling inspiration. Plus, enjoy 10% off your first order.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-beige-200 focus:ring-2 focus:ring-olive-500 focus:border-olive-500 outline-none"
            />
            <Button variant="primary" size="lg">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Karppasa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;