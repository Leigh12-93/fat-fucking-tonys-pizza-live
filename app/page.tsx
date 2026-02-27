import Link from 'next/link';
import { Star, Truck, Clock, Award, ChefHat, MapPin } from 'lucide-react';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Featured Pizzas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Our Fucking Legendary Pizzas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-crafted with the finest ingredients and a whole lot of attitude. 
              These aren't just pizzas, they're masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tony's Special */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://source.unsplash.com/featured/?query=loaded+supreme+pizza+pepperoni+sausage" 
                  alt="Tony's Fat Fucking Special"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tony's Fat Fucking Special</h3>
                  <p className="text-lg font-semibold">Starting at $19.99</p>
                </div>
              </div>
            </div>

            {/* Meat Lovers */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://source.unsplash.com/featured/?query=meat+lovers+pizza+pepperoni+bacon+sausage" 
                  alt="Meat Lovers Madness"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Meat Lovers Madness</h3>
                  <p className="text-lg font-semibold">Starting at $21.99</p>
                </div>
              </div>
            </div>

            {/* Margherita */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://source.unsplash.com/featured/?query=margherita+pizza+fresh+basil+mozzarella" 
                  alt="Classic Margherita"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Classic Margherita</h3>
                  <p className="text-lg font-semibold">Starting at $14.99</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/menu" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-black transition-colors inline-flex items-center space-x-2"
            >
              <span>View Full Menu</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Why We're the Fucking Best
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just make pizza, we make legends. Here's why Fat Tony's 
              is taking over the world, one slice at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <ChefHat className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Master Chefs</h3>
              <p className="text-gray-600">
                Our pizza masters have been perfecting their craft for decades. 
                Every pizza is a work of fucking art.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Truck className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Delivery</h3>
              <p className="text-gray-600">
                30 minutes or less, guaranteed. Our drivers are faster than 
                your ex leaving you for someone better.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Award Winning</h3>
              <p className="text-gray-600">
                Voted "Best Fucking Pizza" by everyone who matters. 
                Our trophy case is fuller than our stomachs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Ingredients</h3>
              <p className="text-gray-600">
                Only the finest ingredients make it onto our pizzas. 
                We're picky as hell, and it shows.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Fresh</h3>
              <p className="text-gray-600">
                Made to order, every single time. We don't do leftovers, 
                and neither should you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nationwide</h3>
              <p className="text-gray-600">
                From coast to coast, we're bringing the best fucking pizza 
                to every corner of America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">
            Ready for the Best Fucking Pizza of Your Life?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Don't wait. Your taste buds are already thanking you. 
            Order now and join the Fat Tony's revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/order" 
              className="bg-yellow-400 hover:bg-yellow-300 text-red-600 px-8 py-4 rounded-full text-lg font-black transition-colors"
            >
              ORDER NOW
            </Link>
            <Link 
              href="/locations" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-full text-lg font-black transition-colors"
            >
              FIND A LOCATION
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}