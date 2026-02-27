'use client'

import { useCart } from '@/lib/cart-context'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartSidebar() {
  const { state, dispatch } = useCart()

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold">Your Fucking Order</h2>
          </div>
          <button
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add some fucking delicious pizzas!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.size}</p>
                    {item.customizations && item.customizations.length > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        {item.customizations.join(', ')}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch({ 
                            type: 'UPDATE_QUANTITY', 
                            payload: { id: `${item.id}-${item.size}`, quantity: item.quantity - 1 }
                          })}
                          className="p-1 hover:bg-white rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({ 
                            type: 'UPDATE_QUANTITY', 
                            payload: { id: `${item.id}-${item.size}`, quantity: item.quantity + 1 }
                          })}
                          className="p-1 hover:bg-white rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-red-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => dispatch({ 
                            type: 'REMOVE_ITEM', 
                            payload: `${item.id}-${item.size}`
                          })}
                          className="p-1 hover:bg-red-100 text-red-600 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-red-600">${state.total.toFixed(2)}</span>
            </div>
            
            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block"
              >
                Checkout ({state.itemCount} items)
              </Link>
              
              <button
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
                className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}