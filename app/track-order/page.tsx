'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useOrders } from '@/lib/order-context'
import OrderStatus from '@/components/order-status'
import { Search, Package } from 'lucide-react'

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [searchedOrder, setSearchedOrder] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState('')
  const { trackOrder } = useOrders()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if order ID is in URL params
    const urlOrderId = searchParams.get('id')
    if (urlOrderId) {
      setOrderId(urlOrderId)
      handleSearch(urlOrderId)
    }
  }, [searchParams])

  const handleSearch = async (searchOrderId?: string) => {
    const idToSearch = searchOrderId || orderId
    if (!idToSearch.trim()) {
      setError('Please enter an order ID')
      return
    }

    setIsSearching(true)
    setError('')
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const order = trackOrder(idToSearch.trim())
    
    if (order) {
      setSearchedOrder(order)
    } else {
      setError('Order not found. Please check your order ID and try again.')
      setSearchedOrder(null)
    }
    
    setIsSearching(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Track Your Order
          </h1>
          <p className="text-xl text-gray-600">
            Enter your order ID to see the status of your fucking amazing pizza
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="FFT-1234567890"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                You can find your order ID in your confirmation email or receipt
              </p>
            </div>

            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSearching}
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Track Order
                </>
              )}
            </button>
          </form>
        </div>

        {/* Order Status */}
        {searchedOrder && (
          <div className="max-w-4xl mx-auto">
            <OrderStatus order={searchedOrder} />
          </div>
        )}

        {/* No Order Found State */}
        {!searchedOrder && !isSearching && orderId && error && (
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Order Not Found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find an order with that ID. Please double-check your order number.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Tips:</strong></p>
                <ul className="text-left space-y-1">
                  <li>• Check your confirmation email for the correct order ID</li>
                  <li>• Order IDs start with "FFT-" followed by numbers</li>
                  <li>• Make sure you're entering the full order ID</li>
                  <li>• Orders may take a few minutes to appear in our system</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Can't find your order?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Check your email for the order confirmation</li>
                  <li>• Look for a text message with your order details</li>
                  <li>• Contact the store where you placed your order</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Contact Support</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📞 Call: 1-800-FAT-TONY</p>
                  <p>💬 Chat: Available 24/7 on our website</p>
                  <p>📧 Email: help@fatfuckingtony.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}