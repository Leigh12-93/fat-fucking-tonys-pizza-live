import { Award, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://source.unsplash.com/featured/?query=pizza+restaurant+kitchen+chef+cooking')`
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-6">
            The Fat Tony's Story
          </h1>
          <p className="text-xl text-red-100 leading-relaxed">
            From a small Brooklyn joint to a global pizza empire, 
            this is the story of how one man's obsession with perfect pizza 
            changed the fucking world.
          </p>
        </div>
      </section>

      {/* Tony's Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://source.unsplash.com/featured/?query=italian+chef+pizza+maker+portrait" 
                alt="Fat Tony"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Meet Fat Fucking Tony
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tony Marcelli didn't set out to revolutionize pizza. He just wanted to make 
                  the best fucking slice in Brooklyn. Growing up in his nonna's kitchen, 
                  Tony learned that great food comes from three things: premium ingredients, 
                  passionate preparation, and a healthy dose of attitude.
                </p>
                <p>
                  In 1995, Tony opened his first shop with $500, a dream, and a recipe 
                  that had been passed down through four generations of Marcellis. 
                  The neighborhood thought he was crazy. "Who names a pizza place 
                  'Fat Fucking Tony's'?" they asked.
                </p>
                <p>
                  Twenty-nine years later, with over 500 locations worldwide and counting, 
                  Tony's answer is simple: "Someone who makes the best fucking pizza 
                  on the planet, that's who."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These aren't just corporate buzzwords. These are the principles 
              that guide every pizza we make and every customer we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on ingredients, preparation, or taste. 
                If it's not perfect, it doesn't leave our kitchen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Values</h3>
              <p className="text-gray-600">
                Every customer is family, every employee matters, 
                and every community we serve becomes our home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                We're not just feeding people, we're bringing communities together 
                one slice at a time, all around the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion Driven</h3>
              <p className="text-gray-600">
                Every pizza is made with love, every customer served with care, 
                and every day approached with fucking enthusiasm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-red-100">
              From humble beginnings to global domination, here's how far we've come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-yellow-400 mb-2">500+</div>
              <div className="text-lg font-semibold">Locations Worldwide</div>
            </div>
            <div>
              <div className="text-5xl font-black text-yellow-400 mb-2">50M+</div>
              <div className="text-lg font-semibold">Pizzas Served</div>
            </div>
            <div>
              <div className="text-5xl font-black text-yellow-400 mb-2">25K+</div>
              <div className="text-lg font-semibold">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-black text-yellow-400 mb-2">29</div>
              <div className="text-lg font-semibold">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-8">
            Our Mission
          </h2>
          <blockquote className="text-2xl text-gray-600 italic leading-relaxed mb-8">
            "To serve the best fucking pizza on the planet while building communities, 
            creating jobs, and proving that when you do something with passion and integrity, 
            the world takes notice."
          </blockquote>
          <div className="text-lg font-semibold text-red-600">
            - Fat Fucking Tony Marcelli, Founder & CEO
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-red-600 mb-4">
            Ready to Join the Family?
          </h2>
          <p className="text-lg text-red-700 mb-8">
            Whether you're looking for a career, a franchise opportunity, 
            or just the best fucking pizza of your life, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-black transition-colors">
              Join Our Team
            </button>
            <button className="bg-transparent border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-8 py-4 rounded-full text-lg font-black transition-colors">
              Franchise With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}