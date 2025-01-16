import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeController from '../components/ThemeController';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <Header />

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Selamat datang di Dashboard!</h2>
        <p className="mb-4">Ini adalah halaman dashboard untuk sistem informasi akademik.</p>
        <p>Data dan informasi akademik kamu bisa dilihat di sini.</p>
      </div>

      <Footer />
      <ThemeController />
    </div>
  );
};

export default Dashboard;
