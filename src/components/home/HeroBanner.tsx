import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.pexels.com/photos/6213870/pexels-photo-6213870.jpeg',
    title: 'Spring Bloom Collection',
    subtitle: 'Handcrafted pieces in breathable natural fabrics',
    ctaText: 'Explore Collection',
    ctaLink: '/collections/spring-bloom'
  },
  {
    image: 'https://images.pexels.com/photos/7682670/pexels-photo-7682670.jpeg',
    title: 'Timeless Essentials',
    subtitle: 'Versatile staples for your everyday wardrobe',
    ctaText: 'Shop Now',
    ctaLink: '/shop'
  }
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };
  
  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg">
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-4"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
                >
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white mb-6">
                  {slide.subtitle}
                </p>
                <Button variant="primary" size="lg">
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
      {/* Arrow Navigation */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default HeroBanner;