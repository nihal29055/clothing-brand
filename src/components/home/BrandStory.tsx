import React from 'react';
import Button from '../ui/Button';

const BrandStory: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-4">
              The Karppasa Story
            </h2>
            
            <p className="text-gray-600 mb-4">
              Karppasa, derived from the Sanskrit word for cotton, was born from a deep appreciation for India's rich textile heritage and a desire to create clothing that honors both tradition and the modern wearer.
            </p>
            
            <p className="text-gray-600 mb-6">
              Each Karppasa piece is thoughtfully designed and handcrafted by skilled artisans using natural fabrics like organic cotton, linen, and handloom textiles. We embrace slow fashion principles, creating timeless garments that celebrate the beauty of imperfection and the human touch.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-beige-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-700">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Ethical Production</h3>
                  <p className="text-sm text-gray-600">Fair wages and safe working conditions</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-beige-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-700">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Natural Materials</h3>
                  <p className="text-sm text-gray-600">Organic, breathable fabrics</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-beige-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-700">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Low-Impact Dyes</h3>
                  <p className="text-sm text-gray-600">Traditional natural dyeing techniques</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline">Our Sustainability Journey</Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7585607/pexels-photo-7585607.jpeg"
                alt="Artisan working on handloom"
                className="w-full h-auto rounded-sm"
              />
              <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-beige-100 rounded-sm flex items-center justify-center">
                <div className="text-center font-serif">
                  <p className="text-sm text-gray-600">Est.</p>
                  <p className="text-xl font-medium text-gray-900">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;