'use client';

import { useState } from 'react';
import { menuItems, categories, MenuItem } from '@/lib/menu-data';
import PizzaCard from './pizza-card';

interface CartItem {
  item: MenuItem;
  quantity: number;
  size?: string;
  id: string;
}

export default function MenuGrid() {
  const [selectedCategory, setSelectedCategory] = useState('pizza');
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item: MenuItem, quantity: number, size?: string) => {
    const cartItem: CartItem = {
      item,
      quantity,
      size,
      id: `${item.id}-${size || 'default'}-${Date.now()}`
    };
    
    setCart(prev => [...prev, cartItem]);
    
    // Show success message (you could replace this with a toast notification)
    alert(`Added ${quantity}x ${item.name}${size ? ` (${size})` : ''} to cart!`);
  };

  const getCartTotal = () => {
    return cart.reduce((total, cartItem) => {
      const price = cartItem.size && cartItem.item.sizes 
        ? cartItem.item.sizes.find(s => s.name === cartItem.size)?.price || cartItem.item.price
        : cartItem.item.price;
      return total + (price * cartItem.quantity);
    }, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-2 ${
              selectedCategory === category.id
                ? 'bg-red-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Cart Summary (if items in cart) */}
      {cart.length > 0 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mb-8 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-yellow-800">
                Cart ({cart.length} items)
              </h3>
              <p className="text-yellow-700">
                Total: ${getCartTotal().toFixed(2)}
              </p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <PizzaCard 
            key={item.id} 
            item={item} 
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🍕</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-600">
            Try selecting a different category.
          </p>
        </div>
      )}
    </div>
  );
}