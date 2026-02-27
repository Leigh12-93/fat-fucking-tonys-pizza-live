import LocationFinder from '@/components/location-finder';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">
            Find Your Fat Tony's
          </h1>
          <p className="text-xl text-red-100">
            We're spreading across the nation like melted cheese on a hot pizza. 
            Find the Fat Tony's nearest you and taste the legend.
          </p>
        </div>
      </section>

      {/* Location Finder */}
      <LocationFinder />

      {/* Franchise CTA */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-red-600 mb-4">
            Want to Bring Fat Tony's to Your City?
          </h2>
          <p className="text-lg text-red-700 mb-8">
            Join the Fat Tony's family and become part of the pizza revolution. 
            Franchise opportunities available for qualified partners who share our passion 
            for fucking amazing pizza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-black transition-colors">
              Franchise Info
            </button>
            <button className="bg-transparent border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-8 py-4 rounded-full text-lg font-black transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}