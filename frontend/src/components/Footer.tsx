import React from 'react';
import { Cake, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Cake className="h-8 w-8 text-amber-300" />
              <h3 className="text-2xl font-bold">Sweet Shop</h3>
            </div>
            <p className="text-amber-200 leading-relaxed">
              Your trusted partner in confectionery business management. 
              Making sweet dreams come true since 2025.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-300">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-amber-200 hover:text-white transition-colors">
                Home
              </a>
              <a href="#products" className="block text-amber-200 hover:text-white transition-colors">
                Products
              </a>
              <a href="#about" className="block text-amber-200 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-amber-200 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-300">Services</h4>
            <nav className="space-y-2">
              <a href="#inventory" className="block text-amber-200 hover:text-white transition-colors">
                Inventory Management
              </a>
              <a href="#sales" className="block text-amber-200 hover:text-white transition-colors">
                Sales Analytics
              </a>
              <a href="#customers" className="block text-amber-200 hover:text-white transition-colors">
                Customer Management
              </a>
              <a href="#reports" className="block text-amber-200 hover:text-white transition-colors">
                Business Reports
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200">info@sweetshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200">123 Sweet Street, Candy City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-200">
            © 2025 Sweet Shop Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};