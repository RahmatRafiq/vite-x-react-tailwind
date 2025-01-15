import React from 'react';
import AppRoutes from '@/routes/routes';
const appName = import.meta.env.VITE_APP_NAME || 'SISFO';

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="App-header">
      <h1>{appName}</h1>
      </header>
      <AppRoutes />
    </div>
  );
};

export default App;