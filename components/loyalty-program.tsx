'use client'

import { useAuth } from '@/lib/auth-context'
import { Star, Gift, Crown, Zap } from 'lucide-react'

export default function LoyaltyProgram() {
  const { user } = useAuth()

  if (!user) return null

  const getLoyaltyTier = (points: number) => {
    if (points >= 1000) return { name: 'Fucking Legend', icon: Crown, color: 'text-purple-600', bgColor: 'bg-purple-100' }
    if (points >= 500) return { name: 'Pizza Master', icon: Zap, color: 'text-yellow-600', bgColor: 'bg-yellow-100' }
    if (points >= 100) return { name: 'Tony\'s Friend', icon: Star, color: 'text-blue-600', bgColor: 'bg-blue-100' }
    return { name: 'New Family', icon: Gift, color: 'text-green-600', bgColor: 'bg-green-100' }
  }

  const tier = getLoyaltyTier(user.loyaltyPoints)
  const TierIcon = tier.icon
  
  const nextTierPoints = user.loyaltyPoints >= 1000 ? 1000 : 
                        user.loyaltyPoints >= 500 ? 1000 : 
                        user.loyaltyPoints >= 100 ? 500 : 100
  
  const progressPercentage = (user.loyaltyPoints / nextTierPoints) * 100

  const rewards = [
    { points: 50, reward: 'Free Garlic Bread', available: user.loyaltyPoints >= 50 },
    { points: 100, reward: '$10 Off Any Pizza', available: user.loyaltyPoints >= 100 },
    { points: 200, reward: 'Free Medium Pizza', available: user.loyaltyPoints >= 200 },
    { points: 300, reward: 'Free Delivery for a Month', available: user.loyaltyPoints >= 300 },
    { points: 500, reward: 'Large Pizza + Sides Combo', available: user.loyaltyPoints >= 500 },
    { points: 1000, reward: 'Free Pizza for a Year!', available: user.loyaltyPoints >= 1000 }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Tony's Loyalty Program</h2>
        <p className="text-gray-600">Eat more pizza, get more rewards!</p>
      </div>

      {/* Current Tier */}
      <div className={`${tier.bgColor} rounded-lg p-4 mb-6`}>
        <div className="flex items-center justify-center mb-3">
          <TierIcon className={`w-8 h-8 ${tier.color} mr-2`} />
          <span className={`text-xl font-bold ${tier.color}`}>{tier.name}</span>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-1">{user.loyaltyPoints}</div>
          <div className="text-sm text-gray-600">Loyalty Points</div>
        </div>
      </div>

      {/* Progress to Next Tier */}
      {user.loyaltyPoints < 1000 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress to next tier</span>
            <span>{nextTierPoints - user.loyaltyPoints} points to go</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-red-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Available Rewards */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Rewards</h3>
        <div className="space-y-3">
          {rewards.map((reward, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                reward.available 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  reward.available 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-400 text-white'
                }`}>
                  {reward.points}
                </div>
                <span className={`ml-3 font-medium ${
                  reward.available ? 'text-gray-800' : 'text-gray-500'
                }`}>
                  {reward.reward}
                </span>
              </div>
              {reward.available && (
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                  Redeem
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* How to Earn Points */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">How to Earn Points</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 1 point for every $1 spent</li>
          <li>• 50 bonus points for signing up</li>
          <li>• 25 bonus points for each friend referral</li>
          <li>• Double points on your birthday month</li>
          <li>• Special bonus point events throughout the year</li>
        </ul>
      </div>
    </div>
  )
}