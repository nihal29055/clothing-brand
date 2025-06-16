import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';
import { products } from '../data';

interface CartContextType {
  cart: CartItem[];
  itemCount: number;
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Calculate total items in cart
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count);
  }, [cart]);

  const addToCart = (product: Product, size: string, color: string, quantity: number) => {
    setCart(prev => {
      // Check if item already exists
      const existingItemIndex = prev.findIndex(
        item => item.productId === product.id && item.size === size && item.color === color
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new item
        return [...prev, { productId: product.id, quantity, size, color }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev => 
      prev.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      itemCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};