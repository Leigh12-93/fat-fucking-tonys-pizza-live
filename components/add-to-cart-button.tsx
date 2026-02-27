'use client'

import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { Plus, Check } from 'lucide-react'

interface AddToCartButtonProps {
  item: {
    id: string
    name: string
    price: number
    image: string
  }
  size?: 'Small' | 'Medium' | 'Large' | 'Fucking Massive'
  customizations?: string[]
  className?: string
}

export default function AddToCartButton({ 
  item, 
  size = 'Large', 
  customizations = [],
  className = ''
}: AddToCartButtonProps) {
  const { dispatch } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...item,
        size,
        customizations
      }
    })
    
    setIsAdded(true)
    dispatch({ type: 'OPEN_CART' })
    
    // Reset the button state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`
        flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200
        ${isAdded 
          ? 'bg-green-600 text-white' 
          : 'bg-red-600 text-white hover:bg-red-700 hover:scale-105'
        }
        ${className}
      `}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="w-4 h-4" />
          Added!
        </>
      ) : (
        <>
          <Plus className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </button>
  )
}