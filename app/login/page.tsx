import AuthForm from '@/components/auth-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Fat Fucking Tony's
          </h1>
          <p className="text-xl text-gray-600">
            The Best Fucking Pizza in the Universe
          </p>
        </div>
        
        <AuthForm mode="login" />
      </div>
    </div>
  )
}