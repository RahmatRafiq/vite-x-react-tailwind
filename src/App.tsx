import React from 'react';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App flex flex-col min-h-screen">
           <Header />
      <Dashboard/>
      <Footer/>
    </div>
  );
};

export default App;