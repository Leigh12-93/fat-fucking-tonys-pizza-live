'use client'

import { useAuth } from '@/lib/auth-context'
import { useOrders } from '@/lib/order-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import LoyaltyProgram from '@/components/loyalty-program'
import { User, MapPin, Phone, Mail, Calendar, LogOut, Package, Star } from 'lucide-react'

export default function AccountPage() {
  const { user, logout } = useAuth()
  const { getUserOrders } = useOrders()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('profile')

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your account...</p>
        </div>
      </div>
    )
  }

  const userOrders = getUserOrders(user.id)
  const recentOrders = userOrders.slice(0, 3)

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Order History', icon: Package },
    { id: 'loyalty', label: 'Loyalty Program', icon: Star }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user.name}!</h1>
                <p className="text-gray-600">Member since {new Date(user.memberSince).toLocaleDateString()}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600 hover:text-red-700 font-semibold"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const TabIcon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-red-600 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <TabIcon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                    
                    <div className="flex items-center text-gray-600">
                      <User className="w-5 h-5 mr-3" />
                      <span>{user.name}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>{user.email}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-3" />
                      <span>{user.phone}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span>Member since {new Date(user.memberSince).toLocaleDateString()}</span>
                    </div>

                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Edit Profile
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Quick Stats</h2>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{user.loyaltyPoints}</div>
                      <div className="text-sm text-gray-600">Loyalty Points</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{userOrders.length}</div>
                      <div className="text-sm text-gray-600">Total Orders</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        ${userOrders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600">Total Spent</div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders Preview */}
                {recentOrders.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
                    <div className="space-y-3">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-semibold text-gray-800">Order #{order.id}</div>
                            <div className="text-sm text-gray-600">
                              {new Date(order.orderDate).toLocaleDateString()} • ${order.total.toFixed(2)}
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'out-for-delivery' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className="mt-4 text-red-600 hover:text-red-700 font-semibold"
                    >
                      View All Orders →
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order History</h2>
                {userOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No orders yet</h3>
                    <p className="text-gray-500 mb-6">Ready to order some fucking amazing pizza?</p>
                    <a 
                      href="/menu" 
                      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Browse Menu
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">Order #{order.id}</h3>
                            <p className="text-sm text-gray-600">
                              {new Date(order.orderDate).toLocaleDateString()} at {new Date(order.orderDate).toLocaleTimeString()}
                            </p>
                          </div>
                          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'out-for-delivery' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.quantity}x {item.name}</span>
                              <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                          <div className="text-sm text-gray-600">
                            Total: <span className="font-semibold text-gray-800">${order.total.toFixed(2)}</span>
                          </div>
                          <div className="space-x-2">
                            <a 
                              href={`/track-order?id=${order.id}`}
                              className="text-red-600 hover:text-red-700 text-sm font-semibold"
                            >
                              Track Order
                            </a>
                            <button className="text-gray-600 hover:text-gray-700 text-sm font-semibold">
                              Reorder
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Loyalty Tab */}
            {activeTab === 'loyalty' && (
              <LoyaltyProgram />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}