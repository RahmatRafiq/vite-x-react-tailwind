import React from 'react';
import AppRoutes from '@/routes/routes';

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen">
      {/* Memuat seluruh routing aplikasi */}
      <AppRoutes />
    </div>
  );
};

export default App;
