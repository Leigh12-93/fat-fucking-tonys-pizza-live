export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  isOpen: boolean;
}

export const locations: Location[] = [
  {
    id: 'downtown',
    name: "Fat Tony's Downtown",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    phone: "(555) 123-TONY",
    hours: {
      'Monday': '11:00 AM - 11:00 PM',
      'Tuesday': '11:00 AM - 11:00 PM',
      'Wednesday': '11:00 AM - 11:00 PM',
      'Thursday': '11:00 AM - 11:00 PM',
      'Friday': '11:00 AM - 1:00 AM',
      'Saturday': '11:00 AM - 1:00 AM',
      'Sunday': '12:00 PM - 10:00 PM'
    },
    coordinates: { lat: 40.7128, lng: -74.0060 },
    image: "https://source.unsplash.com/featured/?query=pizza+restaurant+storefront+neon+sign",
    isOpen: true
  },
  {
    id: 'brooklyn',
    name: "Fat Tony's Brooklyn",
    address: "456 Brooklyn Ave",
    city: "Brooklyn",
    state: "NY",
    zip: "11201",
    phone: "(555) 456-TONY",
    hours: {
      'Monday': '11:00 AM - 11:00 PM',
      'Tuesday': '11:00 AM - 11:00 PM',
      'Wednesday': '11:00 AM - 11:00 PM',
      'Thursday': '11:00 AM - 11:00 PM',
      'Friday': '11:00 AM - 1:00 AM',
      'Saturday': '11:00 AM - 1:00 AM',
      'Sunday': '12:00 PM - 10:00 PM'
    },
    coordinates: { lat: 40.6782, lng: -73.9442 },
    image: "https://source.unsplash.com/featured/?query=brooklyn+pizza+shop+brick+building",
    isOpen: true
  },
  {
    id: 'chicago',
    name: "Fat Tony's Chicago",
    address: "789 Deep Dish Blvd",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    phone: "(555) 789-TONY",
    hours: {
      'Monday': '11:00 AM - 11:00 PM',
      'Tuesday': '11:00 AM - 11:00 PM',
      'Wednesday': '11:00 AM - 11:00 PM',
      'Thursday': '11:00 AM - 11:00 PM',
      'Friday': '11:00 AM - 1:00 AM',
      'Saturday': '11:00 AM - 1:00 AM',
      'Sunday': '12:00 PM - 10:00 PM'
    },
    coordinates: { lat: 41.8781, lng: -87.6298 },
    image: "https://source.unsplash.com/featured/?query=chicago+pizza+restaurant+urban+storefront",
    isOpen: true
  },
  {
    id: 'la',
    name: "Fat Tony's Los Angeles",
    address: "321 Sunset Strip",
    city: "Los Angeles",
    state: "CA",
    zip: "90028",
    phone: "(555) 321-TONY",
    hours: {
      'Monday': '11:00 AM - 11:00 PM',
      'Tuesday': '11:00 AM - 11:00 PM',
      'Wednesday': '11:00 AM - 11:00 PM',
      'Thursday': '11:00 AM - 11:00 PM',
      'Friday': '11:00 AM - 1:00 AM',
      'Saturday': '11:00 AM - 1:00 AM',
      'Sunday': '12:00 PM - 10:00 PM'
    },
    coordinates: { lat: 34.0522, lng: -118.2437 },
    image: "https://source.unsplash.com/featured/?query=los+angeles+pizza+restaurant+palm+trees",
    isOpen: true
  },
  {
    id: 'miami',
    name: "Fat Tony's Miami Beach",
    address: "654 Ocean Drive",
    city: "Miami Beach",
    state: "FL",
    zip: "33139",
    phone: "(555) 654-TONY",
    hours: {
      'Monday': '11:00 AM - 11:00 PM',
      'Tuesday': '11:00 AM - 11:00 PM',
      'Wednesday': '11:00 AM - 11:00 PM',
      'Thursday': '11:00 AM - 11:00 PM',
      'Friday': '11:00 AM - 2:00 AM',
      'Saturday': '11:00 AM - 2:00 AM',
      'Sunday': '12:00 PM - 11:00 PM'
    },
    coordinates: { lat: 25.7617, lng: -80.1918 },
    image: "https://source.unsplash.com/featured/?query=miami+beach+restaurant+art+deco+neon",
    isOpen: true
  },
  {
    id: 'vegas',
    name: "Fat Tony's Las Vegas",
    address: "987 Las Vegas Blvd",
    city: "Las Vegas",
    state: "NV",
    zip: "89101",
    phone: "(555) 987-TONY",
    hours: {
      'Monday': '24 Hours',
      'Tuesday': '24 Hours',
      'Wednesday': '24 Hours',
      'Thursday': '24 Hours',
      'Friday': '24 Hours',
      'Saturday': '24 Hours',
      'Sunday': '24 Hours'
    },
    coordinates: { lat: 36.1699, lng: -115.1398 },
    image: "https://source.unsplash.com/featured/?query=las+vegas+restaurant+neon+lights+strip",
    isOpen: true
  }
];

export const comingSoonLocations = [
  { city: "Boston", state: "MA", openingDate: "Spring 2024" },
  { city: "Seattle", state: "WA", openingDate: "Summer 2024" },
  { city: "Austin", state: "TX", openingDate: "Fall 2024" },
  { city: "Denver", state: "CO", openingDate: "Winter 2024" },
  { city: "Atlanta", state: "GA", openingDate: "Spring 2025" },
  { city: "Phoenix", state: "AZ", openingDate: "Summer 2025" }
];