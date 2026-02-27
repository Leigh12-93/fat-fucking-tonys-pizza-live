'use client'

import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { CreditCard, MapPin, Clock, Check, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    instructions: ''
  })

  const deliveryFee = 3.99
  const tax = state.total * 0.08875 // NY tax rate
  const finalTotal = state.total + (orderType === 'delivery' ? deliveryFee : 0) + tax

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 3000))

    const newOrderNumber = `FFT${Date.now().toString().slice(-6)}`
    setOrderNumber(newOrderNumber)
    setOrderComplete(true)
    setIsProcessing(false)
    dispatch({ type: 'CLEAR_CART' })
  }

  if (state.items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some fucking delicious pizzas to get started!</p>
          <Link
            href="/menu"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your fucking amazing order #{orderNumber} has been received!
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center gap-2 text-red-600 mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">
                  Estimated {orderType === 'delivery' ? 'Delivery' : 'Pickup'} Time: 25-35 minutes
                </span>
              </div>
              <p className="text-gray-600">
                We'll send you updates via SMS to {customerInfo.phone}
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/menu"
                className="block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Order More Fucking Pizza
              </Link>
              <Link
                href="/"
                className="block bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/menu"
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Order Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Order Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      orderType === 'delivery'
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-red-300'
                    }`}
                  >
                    <MapPin className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">Delivery</div>
                    <div className="text-sm text-gray-600">+$3.99</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      orderType === 'pickup'
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-red-300'
                    }`}
                  >
                    <Clock className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">Pickup</div>
                    <div className="text-sm text-gray-600">15-20 min</div>
                  </button>
                </div>
              </div>

              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />

                {orderType === 'delivery' && (
                  <>
                    <input
                      type="text"
                      placeholder="Street Address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        value={customerInfo.city}
                        onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={customerInfo.zipCode}
                        onChange={(e) => setCustomerInfo({...customerInfo, zipCode: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </>
                )}

                <textarea
                  placeholder="Special Instructions (optional)"
                  value={customerInfo.instructions}
                  onChange={(e) => setCustomerInfo({...customerInfo, instructions: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  rows={3}
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-red-300'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">Credit Card</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      paymentMethod === 'cash'
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-red-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">💵</div>
                    <div className="font-semibold">Cash</div>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing Your Fucking Order...' : `Place Order - $${finalTotal.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.size}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                      <span className="font-semibold text-red-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              {orderType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                <span>Total:</span>
                <span className="text-red-600">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Estimated {orderType === 'delivery' ? 'Delivery' : 'Pickup'} Time:</strong> 25-35 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}