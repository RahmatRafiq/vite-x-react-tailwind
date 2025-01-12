import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Halaman Utama</h1>} />
        <Route path="/halaman-lain" element={<h1>Halaman Lain</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
