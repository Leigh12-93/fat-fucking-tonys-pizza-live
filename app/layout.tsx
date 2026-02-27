import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { CartProvider } from '@/lib/cart-context'
import { AuthProvider } from '@/lib/auth-context'
import { OrderProvider } from '@/lib/order-context'
import CartSidebar from '@/components/cart-sidebar'
import { ErrorBoundary } from '@/components/error-boundary'

export const metadata: Metadata = {
  title: "Fat Fucking Tony's Fat Fucking Pizzas - The Boldest Pizza Chain",
  description: 'The biggest, boldest, and most fucking delicious pizzas on the planet. Order online for delivery or pickup from Fat Fucking Tony\'s.',
  keywords: 'pizza, delivery, takeout, Fat Tony, best pizza, pizza chain, online ordering',
  openGraph: {
    title: "Fat Fucking Tony's Fat Fucking Pizzas",
    description: 'The boldest pizza chain rivaling Dominos globally',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <ErrorBoundary>
          <AuthProvider>
            <OrderProvider>
              <CartProvider>
                <Header />
                <main className="min-h-screen">
                  {children}
                </main>
                <Footer />
                <CartSidebar />
              </CartProvider>
            </OrderProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}