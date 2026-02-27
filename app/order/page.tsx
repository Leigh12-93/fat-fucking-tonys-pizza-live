'use client';

import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, MapPin, Clock, CreditCard } from 'lucide-react';
import { menuItems, MenuItem } from '@/lib/menu-data';
import { locations } from '@/lib/locations-data';

interface CartItem {
  item: MenuItem;
  quantity: number;
  size?: string;
  id: string;
  price: number;
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [step, setStep] = useState<'menu' | 'cart' | 'checkout'>('menu');

  const addToCart = (item: MenuItem, size?: string) => {
    const price = size && item.sizes 
      ? item.sizes.find(s => s.name === size)?.price || item.price
      : item.price;

    const cartItem: CartItem = {
      item,
      quantity: 1,
      size,
      id: `${item.id}-${size || 'default'}-${Date.now()}`,
      price
    };
    
    setCart(prev => [...prev, cartItem]);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const featuredPizzas = menuItems.filter(item => 
    ['tony-special', 'meat-lovers', 'margherita', 'bbq-chicken'].includes(item.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-4xl font-black mb-2">Order Online</h1>
              <p className="text-red-100">Get your Fat Tony's fix delivered or ready for pickup</p>
            </div>
            
            {/* Order Type Toggle */}
            <div className="flex bg-red-700 rounded-lg p-1">
              <button
                onClick={() => setOrderType('delivery')}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  orderType === 'delivery' 
                    ? 'bg-white text-red-600' 
                    : 'text-white hover:bg-red-600'
                }`}
              >
                🚚 Delivery
              </button>
              <button
                onClick={() => setOrderType('pickup')}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  orderType === 'pickup' 
                    ? 'bg-white text-red-600' 
                    : 'text-white hover:bg-red-600'
                }`}
              >
                🏪 Pickup
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Order - Featured Pizzas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPizzas.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                    
                    {item.sizes ? (
                      <div className="space-y-2">
                        {item.sizes.map((size) => (
                          <button
                            key={size.name}
                            onClick={() => addToCart(item, size.name)}
                            className="w-full flex justify-between items-center p-2 border border-gray-300 rounded hover:border-red-600 hover:bg-red-50 transition-colors"
                          >
                            <span className="text-sm font-medium">{size.name}</span>
                            <span className="font-bold text-red-600">${size.price.toFixed(2)}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors"
                      >
                        Add ${item.price.toFixed(2)}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-red-600 px-8 py-3 rounded-lg font-bold transition-colors">
                  View Full Menu
                </button>
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Your Order ({getCartItemCount()})
                </h3>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🍕</div>
                  <p className="text-gray-500">Your cart is empty</p>
                  <p className="text-gray-400 text-sm">Add some delicious items to get started!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((cartItem) => (
                      <div key={cartItem.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <img 
                          src={cartItem.item.image} 
                          alt={cartItem.item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm truncate">
                            {cartItem.item.name}
                          </h4>
                          {cartItem.size && (
                            <p className="text-gray-500 text-xs">{cartItem.size}</p>
                          )}
                          <p className="text-red-600 font-bold text-sm">
                            ${cartItem.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold">{cartItem.quantity}</span>
                          <button
                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax:</span>
                      <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-sm">
                        <span>Delivery Fee:</span>
                        <span>{getCartTotal() >= 25 ? 'FREE' : '$3.99'}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2">
                      <span>Total:</span>
                      <span className="text-red-600">
                        ${(getCartTotal() * 1.08 + (orderType === 'delivery' && getCartTotal() < 25 ? 3.99 : 0)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Location & Time */}
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <span className="font-semibold text-sm">{selectedLocation.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-gray-600">
                        {orderType === 'delivery' ? '25-35 min' : '15-20 min'}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-colors mt-6 flex items-center justify-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Checkout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}