import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Features } from './Features';
import { Footer } from './Footer';

interface HomepageProps {
  onLoginClick: () => void;
}

export const Homepage: React.FC<HomepageProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={onLoginClick} />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};