export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pizza' | 'sides' | 'drinks' | 'desserts';
  sizes?: { name: string; price: number }[];
  toppings?: string[];
}

export const menuItems: MenuItem[] = [
  // PIZZAS
  {
    id: 'tony-special',
    name: "Tony's Fat Fucking Special",
    description: "Our signature pizza loaded with pepperoni, sausage, mushrooms, peppers, onions, and extra cheese. It's fucking massive!",
    price: 24.99,
    image: "https://source.unsplash.com/featured/?query=loaded+supreme+pizza+pepperoni+sausage",
    category: 'pizza',
    sizes: [
      { name: 'Medium (12")', price: 19.99 },
      { name: 'Large (16")', price: 24.99 },
      { name: 'Fat Tony XL (20")', price: 34.99 }
    ]
  },
  {
    id: 'margherita',
    name: "Classic Margherita",
    description: "Fresh mozzarella, San Marzano tomatoes, fresh basil, and olive oil. Simple but fucking perfect.",
    price: 18.99,
    image: "https://source.unsplash.com/featured/?query=margherita+pizza+fresh+basil+mozzarella",
    category: 'pizza',
    sizes: [
      { name: 'Medium (12")', price: 14.99 },
      { name: 'Large (16")', price: 18.99 },
      { name: 'Fat Tony XL (20")', price: 26.99 }
    ]
  },
  {
    id: 'meat-lovers',
    name: "Meat Lovers Madness",
    description: "Pepperoni, sausage, bacon, ham, and ground beef. For the carnivores who don't fuck around.",
    price: 26.99,
    image: "https://source.unsplash.com/featured/?query=meat+lovers+pizza+pepperoni+bacon+sausage",
    category: 'pizza',
    sizes: [
      { name: 'Medium (12")', price: 21.99 },
      { name: 'Large (16")', price: 26.99 },
      { name: 'Fat Tony XL (20")', price: 36.99 }
    ]
  },
  {
    id: 'veggie-supreme',
    name: "Veggie Supreme",
    description: "Mushrooms, bell peppers, onions, black olives, tomatoes, and spinach. Even vegetarians deserve good fucking pizza.",
    price: 22.99,
    image: "https://source.unsplash.com/featured/?query=vegetarian+pizza+vegetables+peppers+mushrooms",
    category: 'pizza',
    sizes: [
      { name: 'Medium (12")', price: 17.99 },
      { name: 'Large (16")', price: 22.99 },
      { name: 'Fat Tony XL (20")', price: 32.99 }
    ]
  },
  {
    id: 'bbq-chicken',
    name: "BBQ Chicken Ranch",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro, and ranch drizzle. Fucking delicious combo.",
    price: 23.99,
    image: "https://source.unsplash.com/featured/?query=bbq+chicken+pizza+ranch+cilantro",
    category: 'pizza',
    sizes: [
      { name: 'Medium (12")', price: 18.99 },
      { name: 'Large (16")', price: 23.99 },
      { name: 'Fat Tony XL (20")', price: 33.99 }
    ]
  },
  {
    id: 'buffalo-chicken',
    name: "Buffalo Chicken Heat",
    description: "Spicy buffalo chicken, blue cheese, celery, and hot sauce. For those who like it fucking hot.",
    price: 23.99,
    image: "https://source.unsplash.com/featured/?query=buffalo+chicken+pizza+spicy+hot+sauce",
    category: 'pizza',
    sizes: [
      { name: 'Medium (12")', price: 18.99 },
      { name: 'Large (16")', price: 23.99 },
      { name: 'Fat Tony XL (20")', price: 33.99 }
    ]
  },

  // SIDES
  {
    id: 'garlic-knots',
    name: "Tony's Garlic Knots",
    description: "Fresh baked knots with garlic butter and parmesan. Fucking addictive.",
    price: 8.99,
    image: "https://source.unsplash.com/featured/?query=garlic+knots+bread+butter+parmesan",
    category: 'sides'
  },
  {
    id: 'buffalo-wings',
    name: "Buffalo Wings",
    description: "Crispy wings tossed in buffalo sauce. Choose mild, medium, or 'holy shit' hot.",
    price: 12.99,
    image: "https://source.unsplash.com/featured/?query=buffalo+chicken+wings+crispy+sauce",
    category: 'sides'
  },
  {
    id: 'mozzarella-sticks',
    name: "Mozzarella Sticks",
    description: "Golden fried mozzarella with marinara dipping sauce. Cheese pulls for days.",
    price: 9.99,
    image: "https://source.unsplash.com/featured/?query=mozzarella+sticks+fried+cheese+marinara",
    category: 'sides'
  },
  {
    id: 'caesar-salad',
    name: "Caesar Salad",
    description: "Crisp romaine, parmesan, croutons, and Caesar dressing. For when you pretend to be healthy.",
    price: 10.99,
    image: "https://source.unsplash.com/featured/?query=caesar+salad+romaine+parmesan+croutons",
    category: 'sides'
  },

  // DRINKS
  {
    id: 'coke',
    name: "Coca-Cola",
    description: "Ice cold Coke. The classic.",
    price: 2.99,
    image: "https://source.unsplash.com/featured/?query=coca+cola+glass+ice+cold",
    category: 'drinks'
  },
  {
    id: 'beer',
    name: "Ice Cold Beer",
    description: "Local craft beer on tap. Perfect with pizza.",
    price: 4.99,
    image: "https://source.unsplash.com/featured/?query=beer+glass+tap+craft+cold",
    category: 'drinks'
  },
  {
    id: 'lemonade',
    name: "Fresh Lemonade",
    description: "House-made lemonade. Tart and refreshing.",
    price: 3.99,
    image: "https://source.unsplash.com/featured/?query=fresh+lemonade+glass+ice+lemon",
    category: 'drinks'
  },

  // DESSERTS
  {
    id: 'chocolate-cake',
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center. Fucking decadent.",
    price: 7.99,
    image: "https://source.unsplash.com/featured/?query=chocolate+lava+cake+molten+dessert",
    category: 'desserts'
  },
  {
    id: 'tiramisu',
    name: "Classic Tiramisu",
    description: "Italian coffee-soaked ladyfingers with mascarpone. Authentic as fuck.",
    price: 6.99,
    image: "https://source.unsplash.com/featured/?query=tiramisu+italian+dessert+mascarpone+coffee",
    category: 'desserts'
  }
];

export const categories = [
  { id: 'pizza', name: 'Pizzas', icon: '🍕' },
  { id: 'sides', name: 'Sides', icon: '🍗' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' }
];