import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Link to="/" className="btn btn-primary mb-4">
          Halaman Utama
        </Link>
        <Link to="/halaman-lain" className="btn btn-secondary">
          Halaman Lain
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<h1>Halaman Utama</h1>} />
        <Route path="/halaman-lain" element={<h1>Halaman Lain</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
