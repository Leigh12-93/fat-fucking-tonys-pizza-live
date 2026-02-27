'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Order {
  id: string
  userId: string
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    customizations?: string[]
  }>
  total: number
  status: 'pending' | 'confirmed' | 'preparing' | 'baking' | 'ready' | 'out-for-delivery' | 'delivered' | 'cancelled'
  orderDate: string
  estimatedDelivery: string
  deliveryAddress: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  customerInfo: {
    name: string
    phone: string
    email: string
  }
  paymentMethod: string
  specialInstructions?: string
  loyaltyPointsEarned: number
}

interface OrderContextType {
  orders: Order[]
  currentOrder: Order | null
  placeOrder: (orderData: Omit<Order, 'id' | 'orderDate' | 'status' | 'estimatedDelivery' | 'loyaltyPointsEarned'>) => Promise<string>
  trackOrder: (orderId: string) => Order | null
  getUserOrders: (userId: string) => Order[]
  updateOrderStatus: (orderId: string, status: Order['status']) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null)

  useEffect(() => {
    // Load orders from localStorage
    if (typeof window !== 'undefined') {
      const savedOrders = localStorage.getItem('fft-orders')
      if (savedOrders) {
        try {
          setOrders(JSON.parse(savedOrders))
        } catch (error) {
          console.error('Error parsing saved orders:', error)
          localStorage.removeItem('fft-orders')
        }
      }
    }
  }, [])

  const placeOrder = async (orderData: Omit<Order, 'id' | 'orderDate' | 'status' | 'estimatedDelivery' | 'loyaltyPointsEarned'>): Promise<string> => {
    const orderId = `FFT-${Date.now()}`
    const orderDate = new Date().toISOString()
    const estimatedDelivery = new Date(Date.now() + 45 * 60 * 1000).toISOString() // 45 minutes from now
    const loyaltyPointsEarned = Math.floor(orderData.total / 10) // 1 point per $10

    const newOrder: Order = {
      ...orderData,
      id: orderId,
      orderDate,
      status: 'pending',
      estimatedDelivery,
      loyaltyPointsEarned
    }

    const updatedOrders = [...orders, newOrder]
    setOrders(updatedOrders)
    setCurrentOrder(newOrder)
    if (typeof window !== 'undefined') {
      localStorage.setItem('fft-orders', JSON.stringify(updatedOrders))
    }

    // Simulate order processing
    setTimeout(() => updateOrderStatus(orderId, 'confirmed'), 2000)
    setTimeout(() => updateOrderStatus(orderId, 'preparing'), 5000)
    setTimeout(() => updateOrderStatus(orderId, 'baking'), 15000)

    return orderId
  }

  const trackOrder = (orderId: string): Order | null => {
    return orders.find(order => order.id === orderId) || null
  }

  const getUserOrders = (userId: string): Order[] => {
    return orders.filter(order => order.userId === userId).sort((a, b) => 
      new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
    )
  }

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prevOrders => {
      const updatedOrders = prevOrders.map(order => 
        order.id === orderId ? { ...order, status } : order
      )
      if (typeof window !== 'undefined') {
        localStorage.setItem('fft-orders', JSON.stringify(updatedOrders))
      }
      return updatedOrders
    })

    // Update current order if it matches
    setCurrentOrder(prevOrder => 
      prevOrder?.id === orderId ? { ...prevOrder, status } : prevOrder
    )
  }

  return (
    <OrderContext.Provider value={{
      orders,
      currentOrder,
      placeOrder,
      trackOrder,
      getUserOrders,
      updateOrderStatus
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider')
  }
  return context
}