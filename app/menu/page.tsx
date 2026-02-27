import MenuGrid from '@/components/menu-grid';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">
            Our Fucking Menu
          </h1>
          <p className="text-xl text-red-100">
            Every item on this menu is crafted with passion, precision, and a whole lot of attitude. 
            Choose your weapon of mass deliciousness.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <MenuGrid />

      {/* Bottom CTA */}
      <section className="bg-yellow-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-red-600 mb-4">
            Can't Decide? Let Tony Choose for You!
          </h2>
          <p className="text-lg text-red-700 mb-6">
            Try our "Tony's Choice" surprise box - a curated selection of our best items 
            chosen by the man himself. It's like Christmas, but with more cheese.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-black transition-colors">
            Surprise Me, Tony!
          </button>
        </div>
      </section>
    </div>
  );
}