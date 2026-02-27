'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, User } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-black">🍕</div>
            <div className="text-xl font-black tracking-tight">
              FAT FUCKING TONY'S
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-yellow-300 transition-colors font-semibold">
              Home
            </Link>
            <Link href="/menu" className="hover:text-yellow-300 transition-colors font-semibold">
              Menu
            </Link>
            <Link href="/locations" className="hover:text-yellow-300 transition-colors font-semibold">
              Locations
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition-colors font-semibold">
              About
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:555-FAT-TONY" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">555-FAT-TONY</span>
            </a>
            
            {/* User Account */}
            {user ? (
              <div className="flex items-center space-x-2">
                <Link href="/account" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
                  <User className="h-4 w-4" />
                  <span className="font-semibold">{user.name}</span>
                </Link>
              </div>
            ) : (
              <Link href="/login" className="hover:text-yellow-300 transition-colors font-semibold">
                Sign In
              </Link>
            )}
            
            {/* Cart Button */}
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative p-2 hover:text-yellow-300 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </button>
            
            <Link 
              href="/order" 
              className="bg-yellow-400 text-red-600 px-6 py-2 rounded-full font-black hover:bg-yellow-300 transition-colors flex items-center space-x-2"
            >
              <span>ORDER NOW</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="hover:text-yellow-300 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="hover:text-yellow-300 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/locations" 
                className="hover:text-yellow-300 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <Link 
                href="/about" 
                className="hover:text-yellow-300 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile User Account */}
              {user ? (
                <Link 
                  href="/account" 
                  className="hover:text-yellow-300 transition-colors font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Account ({user.name})
                </Link>
              ) : (
                <Link 
                  href="/login" 
                  className="hover:text-yellow-300 transition-colors font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
              
              <div className="pt-4 border-t border-red-500">
                <a href="tel:555-FAT-TONY" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors mb-4">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">555-FAT-TONY</span>
                </a>
                <Link 
                  href="/order" 
                  className="bg-yellow-400 text-red-600 px-6 py-3 rounded-full font-black hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>ORDER NOW ({state.itemCount})</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}