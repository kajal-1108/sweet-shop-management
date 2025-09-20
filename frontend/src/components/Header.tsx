import React from 'react';
import { Cake, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Cake className="h-8 w-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-amber-900">Sweet Shop</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          <button
            onClick={onLoginClick}
            className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <User className="h-4 w-4" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};