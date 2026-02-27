# Fat Fucking Tony's Fat Fucking Pizzas 🍕

The boldest pizza chain website built to rival Dominos globally. A comprehensive Next.js application with online ordering, user authentication, loyalty program, and order tracking.

## Features

### 🍕 Core Features
- **Bold Branding** - Unapologetic, memorable brand identity
- **Online Ordering** - Full pizza ordering system with cart functionality
- **User Authentication** - Sign up, login, and account management
- **Order Tracking** - Real-time order status updates
- **Loyalty Program** - Points system with rewards and tiers
- **Location Finder** - Store locator with contact information
- **Responsive Design** - Mobile-first, works on all devices

### 🚀 Advanced Features
- **Order History** - Complete order tracking and history
- **Account Dashboard** - User profile, stats, and preferences
- **Cart Management** - Add, remove, modify orders
- **Payment Integration** - Credit card and cash payment options
- **Delivery Tracking** - Real-time delivery status
- **Admin Dashboard** - Order management system (coming soon)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React
- **State Management:** React Context API
- **Authentication:** Custom auth system
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/fat-fucking-tonys-pizza.git
cd fat-fucking-tonys-pizza
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── account/           # User account dashboard
│   ├── checkout/          # Checkout process
│   ├── locations/         # Store locations
│   ├── login/             # User login
│   ├── menu/              # Pizza menu
│   ├── order/             # Order page
│   ├── order-history/     # Order history
│   ├── signup/            # User registration
│   └── track-order/       # Order tracking
├── components/            # Reusable components
│   ├── auth-form.tsx      # Authentication form
│   ├── cart-sidebar.tsx   # Shopping cart
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   ├── loyalty-program.tsx # Loyalty system
│   └── order-status.tsx   # Order tracking
├── lib/                   # Utilities and contexts
│   ├── auth-context.tsx   # Authentication state
│   ├── cart-context.tsx   # Shopping cart state
│   ├── order-context.tsx  # Order management
│   ├── menu-data.ts       # Pizza menu data
│   └── locations-data.ts  # Store locations
└── public/                # Static assets
```

## Key Pages

- **Homepage** (`/`) - Hero section, featured pizzas, call-to-actions
- **Menu** (`/menu`) - Full pizza catalog with categories
- **Order** (`/order`) - Pizza selection and customization
- **Checkout** (`/checkout`) - Order completion and payment
- **Account** (`/account`) - User dashboard with profile, orders, loyalty
- **Track Order** (`/track-order`) - Real-time order status
- **Locations** (`/locations`) - Store finder and contact info
- **About** (`/about`) - Company story and values

## Features in Detail

### User Authentication
- Sign up with email, name, and phone
- Login with email and password
- User dashboard with profile management
- Order history and tracking
- Loyalty points and rewards

### Ordering System
- Browse pizza menu by category
- Add items to cart with customizations
- Delivery or pickup options
- Multiple payment methods
- Order confirmation and tracking

### Loyalty Program
- Points earned on every purchase (1 point per $1)
- Tier system: New Family → Tony's Friend → Pizza Master → Fucking Legend
- Redeemable rewards and special offers
- Birthday bonuses and referral rewards

### Order Tracking
- Real-time status updates
- Estimated delivery times
- SMS notifications
- Order history with reorder functionality

## Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

## Contributing

This is a demonstration project showcasing modern web development practices for a pizza chain website.

## License

This project is for demonstration purposes.

---

**Fat Fucking Tony's** - The Best Fucking Pizza in the Universe! 🍕🔥