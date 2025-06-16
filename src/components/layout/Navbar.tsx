import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { navItems } from '../../data';

const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <a href="/" className="text-2xl font-serif font-medium text-gray-900">
              Karppasa
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-olive-700 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-olive-700">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-olive-700">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-olive-700">
              <Heart size={20} />
            </button>
            <button className="text-gray-700 hover:text-olive-700 relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-terracotta-600 text-white text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-4">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-800 hover:text-olive-700 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;