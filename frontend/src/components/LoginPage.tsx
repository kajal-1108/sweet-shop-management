import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, Cake } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
      
      <button
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center space-x-2 text-amber-700 hover:text-amber-800 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back to Home</span>
      </button>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl">
                <Cake className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-amber-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Sweet Shop account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#forgot" className="text-sm text-amber-600 hover:text-amber-700 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 px-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#signup" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};