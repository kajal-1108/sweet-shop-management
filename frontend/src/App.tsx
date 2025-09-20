import React, { useState } from 'react';
import { Homepage } from './components/Homepage';
import { LoginPage } from './components/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login'>('home');

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Homepage onLoginClick={handleLoginClick} />}
      {currentPage === 'login' && <LoginPage onBack={handleBackToHome} />}
    </div>
  );
}

export default App;