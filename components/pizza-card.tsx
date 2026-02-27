'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { MenuItem } from '@/lib/menu-data';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';

interface PizzaCardProps {
  item: MenuItem;
}

export default function PizzaCard({ item }: PizzaCardProps) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    item.sizes ? item.sizes[1]?.name : undefined
  );
  const [isAdded, setIsAdded] = useState(false);

  const getCurrentPrice = () => {
    if (item.sizes && selectedSize) {
      const size = item.sizes.find(s => s.name === selectedSize);
      return size ? size.price : item.price;
    }
    return item.price;
  };

  const handleAddToCart = () => {
    const size = selectedSize as 'Small' | 'Medium' | 'Large' | 'Fucking Massive' || 'Large';
    
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: item.id,
          name: item.name,
          price: getCurrentPrice(),
          image: item.image,
          size
        }
      });
    }
    
    setIsAdded(true);
    dispatch({ type: 'OPEN_CART' });
    
    // Reset the button state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
          ${getCurrentPrice().toFixed(2)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>

        {/* Size Selection for Pizzas */}
        {item.sizes && (
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Size:</label>
            <div className="grid grid-cols-1 gap-2">
              {item.sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size.name)}
                  className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                    selectedSize === size.name
                      ? 'border-red-600 bg-red-50 text-red-600'
                      : 'border-gray-300 hover:border-red-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{size.name}</span>
                    <span className="font-bold">${size.price.toFixed(2)}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-semibold text-gray-700">Qty:</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
              isAdded 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 hover:bg-red-700 text-white hover:scale-105'
            }`}
          >
            <Plus className="h-4 w-4" />
            <span>{isAdded ? 'Added!' : 'Add'}</span>
          </button>
        </div>

        {/* Total Price */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total:</span>
            <span className="text-xl font-black text-red-600">
              ${(getCurrentPrice() * quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}