import React from 'react';
import Dashboard from './pages/Dashboard';
const appName = import.meta.env.VITE_APP_NAME || 'SISFO';

const App = () => {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="App-header">
      <h1>{appName}</h1>
      </header>
      <Dashboard/>
    </div>
  );
};

export default App;