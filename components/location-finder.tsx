'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { locations, comingSoonLocations } from '@/lib/locations-data';

export default function LocationFinder() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Location List */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Our Locations</h2>
          
          <div className="space-y-6">
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedLocation.id === location.id
                    ? 'border-red-600 bg-red-50 shadow-lg'
                    : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">
                        {location.address}, {location.city}, {location.state} {location.zip}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className={`text-sm font-semibold ${
                        location.isOpen ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {location.isOpen ? 'Open' : 'Closed'} • {location.hours[getCurrentDay()]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Location Details */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src={selectedLocation.image} 
              alt={selectedLocation.name}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedLocation.name}</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      {selectedLocation.address}<br />
                      {selectedLocation.city}, {selectedLocation.state} {selectedLocation.zip}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href={`tel:${selectedLocation.phone}`} className="text-red-600 hover:text-red-700">
                      {selectedLocation.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-2" />
                  Hours
                </h4>
                <div className="space-y-1">
                  {Object.entries(selectedLocation.hours).map(([day, hours]) => (
                    <div key={day} className={`flex justify-between text-sm ${
                      day === getCurrentDay() ? 'font-semibold text-red-600' : 'text-gray-600'
                    }`}>
                      <span>{day}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-bold transition-colors">
                  Order for Pickup
                </button>
                <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-red-600 py-3 px-4 rounded-lg font-bold transition-colors flex items-center justify-center space-x-2">
                  <Navigation className="h-4 w-4" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Locations */}
      <div className="mt-16">
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonLocations.map((location, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {location.city}, {location.state}
              </h3>
              <p className="text-red-600 font-semibold">{location.openingDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}