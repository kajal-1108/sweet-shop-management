import React from 'react';
import { ChefHat, Award, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight">
                Sweet Delights
                <span className="block text-orange-600">Management</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Streamline your confectionery business with our comprehensive management system. 
                From inventory to sales, we've got your sweet business covered.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <ChefHat className="h-8 w-8 text-amber-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quality</h3>
                  <p className="text-sm text-gray-600">Premium ingredients</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-orange-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-sm text-gray-600">Award winning</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Fresh</h3>
                  <p className="text-sm text-gray-600">Made daily</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Delicious pastries and sweets"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-amber-200 to-orange-200 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};