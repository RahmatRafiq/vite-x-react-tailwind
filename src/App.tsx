import React from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import ThemeController from './components/ThemeController';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Dashboard />
      <ThemeController />
      <Footer />
    </div>
  );
};

export default App;
