'use client'

import { Order } from '@/lib/order-context'
import { Clock, CheckCircle, Truck, Package, ChefHat, Timer } from 'lucide-react'

interface OrderStatusProps {
  order: Order
}

export default function OrderStatus({ order }: OrderStatusProps) {
  const statusSteps = [
    { 
      key: 'pending', 
      label: 'Order Received', 
      icon: Package,
      description: 'We\'ve got your order!'
    },
    { 
      key: 'confirmed', 
      label: 'Order Confirmed', 
      icon: CheckCircle,
      description: 'Payment processed, order confirmed'
    },
    { 
      key: 'preparing', 
      label: 'Preparing', 
      icon: ChefHat,
      description: 'Our chefs are working their magic'
    },
    { 
      key: 'baking', 
      label: 'In the Oven', 
      icon: Timer,
      description: 'Your pizza is baking to perfection'
    },
    { 
      key: 'ready', 
      label: 'Ready for Pickup/Delivery', 
      icon: Clock,
      description: 'Hot and ready!'
    },
    { 
      key: 'out-for-delivery', 
      label: 'Out for Delivery', 
      icon: Truck,
      description: 'On the way to you'
    },
    { 
      key: 'delivered', 
      label: 'Delivered', 
      icon: CheckCircle,
      description: 'Enjoy your fucking amazing pizza!'
    }
  ]

  const getCurrentStepIndex = () => {
    return statusSteps.findIndex(step => step.key === order.status)
  }

  const currentStepIndex = getCurrentStepIndex()
  const estimatedDelivery = new Date(order.estimatedDelivery)
  const isDelivered = order.status === 'delivered'
  const isCancelled = order.status === 'cancelled'

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Order Header */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Order #{order.id}</h2>
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            isCancelled ? 'bg-red-100 text-red-800' :
            isDelivered ? 'bg-green-100 text-green-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {order.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleString()}
          </div>
          <div>
            <strong>Estimated Delivery:</strong> {estimatedDelivery.toLocaleString()}
          </div>
          <div>
            <strong>Delivery Address:</strong><br />
            {order.deliveryAddress.street}<br />
            {order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.zipCode}
          </div>
          <div>
            <strong>Contact:</strong><br />
            {order.customerInfo.name}<br />
            {order.customerInfo.phone}
          </div>
        </div>
      </div>

      {/* Order Status Timeline */}
      {!isCancelled && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Progress</h3>
          <div className="space-y-4">
            {statusSteps.map((step, index) => {
              const StepIcon = step.icon
              const isCompleted = index <= currentStepIndex
              const isCurrent = index === currentStepIndex
              const isUpcoming = index > currentStepIndex

              return (
                <div key={step.key} className="flex items-center">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted ? 'bg-green-600 text-white' :
                    isCurrent ? 'bg-blue-600 text-white' :
                    'bg-gray-200 text-gray-400'
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className={`font-medium ${
                      isCompleted ? 'text-green-800' :
                      isCurrent ? 'text-blue-800' :
                      'text-gray-500'
                    }`}>
                      {step.label}
                    </div>
                    <div className={`text-sm ${
                      isCompleted ? 'text-green-600' :
                      isCurrent ? 'text-blue-600' :
                      'text-gray-400'
                    }`}>
                      {step.description}
                    </div>
                  </div>
                  
                  {isCurrent && (
                    <div className="flex-shrink-0">
                      <div className="animate-pulse bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Current
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Cancelled Order Message */}
      {isCancelled && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Order Cancelled</h3>
          <p className="text-red-700">
            This order has been cancelled. If you have any questions, please contact our support team.
          </p>
        </div>
      )}

      {/* Order Items */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Items</h3>
        <div className="space-y-3">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <div>
                <div className="font-medium text-gray-800">
                  {item.quantity}x {item.name}
                </div>
                {item.customizations && item.customizations.length > 0 && (
                  <div className="text-sm text-gray-600">
                    {item.customizations.join(', ')}
                  </div>
                )}
              </div>
              <div className="font-medium text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between items-center text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            You earned {order.loyaltyPointsEarned} loyalty points with this order!
          </div>
        </div>
      </div>

      {/* Special Instructions */}
      {order.specialInstructions && (
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Special Instructions</h3>
          <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
            {order.specialInstructions}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="border-t border-gray-200 pt-6 mt-6 flex space-x-4">
        {!isDelivered && !isCancelled && (
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Contact Support
          </button>
        )}
        
        {isDelivered && (
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Reorder
          </button>
        )}
        
        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Print Receipt
        </button>
      </div>
    </div>
  )
}