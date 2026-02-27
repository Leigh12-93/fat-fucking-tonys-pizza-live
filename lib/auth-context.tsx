'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  name: string
  phone: string
  loyaltyPoints: number
  memberSince: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, name: string, phone: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('fft-user')
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser))
        } catch (error) {
          console.error('Error parsing saved user:', error)
          localStorage.removeItem('fft-user')
        }
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock successful login
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      phone: '+1234567890',
      loyaltyPoints: 250,
      memberSince: '2023-01-15'
    }
    
    setUser(mockUser)
    if (typeof window !== 'undefined') {
      localStorage.setItem('fft-user', JSON.stringify(mockUser))
    }
    setIsLoading(false)
    return true
  }

  const signup = async (email: string, password: string, name: string, phone: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock successful signup
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      phone,
      loyaltyPoints: 0,
      memberSince: new Date().toISOString().split('T')[0]
    }
    
    setUser(newUser)
    if (typeof window !== 'undefined') {
      localStorage.setItem('fft-user', JSON.stringify(newUser))
    }
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('fft-user')
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}