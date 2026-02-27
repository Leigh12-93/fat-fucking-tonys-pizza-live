'use client';

import Link from 'next/link';
import { ArrowRight, Star, Clock, Truck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://source.unsplash.com/featured/?query=delicious+pizza+margherita+cheese+melting')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          FAT FUCKING TONY'S
          <span className="block text-yellow-400">FAT FUCKING PIZZAS</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          The biggest, boldest, and most fucking delicious pizzas on the planet. 
          We don't just make pizza, we make legends.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/order" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <Link 
            href="/menu" 
            className="bg-yellow-400 hover:bg-yellow-300 text-red-600 px-8 py-4 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>VIEW MENU</span>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm">
            <Star className="h-8 w-8 text-yellow-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">5-Star Rated</h3>
            <p className="text-gray-300 text-sm">Consistently rated the best fucking pizza in town</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm">
            <Clock className="h-8 w-8 text-yellow-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">30 Min Delivery</h3>
            <p className="text-gray-300 text-sm">Hot, fresh pizza delivered faster than you can say 'Tony'</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm">
            <Truck className="h-8 w-8 text-yellow-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-300 text-sm">On orders over $25. Because we're fucking generous</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}