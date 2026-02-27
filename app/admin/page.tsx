'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp,
  Pizza,
  MapPin,
  Star,
  AlertCircle
} from 'lucide-react';
import AdminSidebar from '@/components/admin-sidebar';

interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  activeCustomers: number;
  averageRating: number;
  pendingOrders: number;
  totalLocations: number;
}

export default function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 1247,
    totalRevenue: 89420,
    activeCustomers: 3891,
    averageRating: 4.8,
    pendingOrders: 23,
    totalLocations: 47
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      router.push('/login');
    }
  }, [user, isAdmin, router]);

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600">You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Orders',
      value: stats.totalOrders.toLocaleString(),
      icon: ShoppingBag,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Active Customers',
      value: stats.activeCustomers.toLocaleString(),
      icon: Users,
      color: 'bg-purple-500',
      change: '+15%'
    },
    {
      title: 'Average Rating',
      value: stats.averageRating.toString(),
      icon: Star,
      color: 'bg-yellow-500',
      change: '+0.2'
    },
    {
      title: 'Pending Orders',
      value: stats.pendingOrders.toString(),
      icon: Pizza,
      color: 'bg-red-500',
      change: '-5%'
    },
    {
      title: 'Locations',
      value: stats.totalLocations.toString(),
      icon: MapPin,
      color: 'bg-indigo-500',
      change: '+3'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Fat Fucking Tony's Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back, {user.name}! Here's what's happening with your pizza empire.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Orders
            </h3>
            <div className="space-y-3">
              {[
                { id: '#1247', customer: 'John Smith', total: '$24.99', status: 'Preparing' },
                { id: '#1246', customer: 'Sarah Johnson', total: '$31.50', status: 'Out for Delivery' },
                { id: '#1245', customer: 'Mike Wilson', total: '$18.75', status: 'Delivered' },
                { id: '#1244', customer: 'Lisa Brown', total: '$42.25', status: 'Preparing' }
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.total}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Out for Delivery' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Top Selling Pizzas
            </h3>
            <div className="space-y-3">
              {[
                { name: 'The Fat Fucking Margherita', sales: 234, revenue: '$2,808' },
                { name: 'Meat Lovers Supreme', sales: 189, revenue: '$2,646' },
                { name: 'Pepperoni Paradise', sales: 156, revenue: '$1,872' },
                { name: 'Veggie Deluxe', sales: 134, revenue: '$1,608' }
              ].map((pizza, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{pizza.name}</p>
                    <p className="text-sm text-gray-600">{pizza.sales} orders</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{pizza.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Trends
          </h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Revenue chart would go here</p>
              <p className="text-sm text-gray-400">Integration with charting library needed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}