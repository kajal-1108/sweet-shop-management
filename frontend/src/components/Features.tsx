import React from 'react';
import { Package, BarChart3, Users, ShoppingCart, Calendar, TrendingUp } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Track ingredients, finished products, and supplies with real-time updates.',
      color: 'text-amber-600'
    },
    {
      icon: ShoppingCart,
      title: 'Sales Tracking',
      description: 'Monitor daily sales, customer orders, and revenue analytics.',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Maintain customer profiles, preferences, and order history.',
      color: 'text-yellow-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into business performance and trends.',
      color: 'text-red-600'
    },
    {
      icon: Calendar,
      title: 'Order Scheduling',
      description: 'Schedule custom orders and manage delivery timelines.',
      color: 'text-amber-700'
    },
    {
      icon: TrendingUp,
      title: 'Growth Insights',
      description: 'Identify popular products and optimize your sweet selection.',
      color: 'text-orange-700'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Everything You Need to Manage Your Sweet Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools you need to run a successful confectionery business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-amber-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};