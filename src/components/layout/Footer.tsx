import React from 'react';
import { Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-beige-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter signup */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Join Our Community</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive updates on new collections, styling tips, and exclusive offers.
          </p>
          
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white border border-beige-200 focus:ring-1 focus:ring-olive-500 focus:border-olive-500 outline-none"
            />
            <button className="bg-olive-600 text-white px-5 py-3 flex items-center justify-center hover:bg-olive-700 transition-colors">
              <Send size={18} className="mr-2" />
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & About */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-serif font-medium text-gray-900 mb-4">Karppasa</h4>
            <p className="text-gray-600 mb-4">
              Premium handcrafted ethnic wear celebrating the rich textile heritage of India through sustainable and ethical practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-olive-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-olive-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-olive-700">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-olive-700">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Bestsellers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Kurtas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Co-ords</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Dresses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Bottoms</a></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Journal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Fabric Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Size Chart</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Sustainability</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-olive-700">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-beige-200 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Karppasa. All rights reserved.</p>
          <p className="mt-1">
            Handcrafted with care in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;