import React from 'react';
import Header from '../components/Header';   // Import Header
import Footer from '../components/Footer';   // Import Footer

const Dashboard = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Selamat datang di Dashboard!</h2>
        <p>Ini adalah halaman dashboard untuk sistem informasi akademik.</p>
        <p>Data dan informasi akademik kamu bisa dilihat di sini.</p>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
