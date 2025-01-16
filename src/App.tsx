import React, { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Menyimpan preferensi tema di localStorage dan memastikan tema diterapkan pada saat pertama kali dimuat
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); // Aktifkan dark mode
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark'); // Nonaktifkan dark mode
    }
  }, []);

  // Fungsi untuk toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevState) => {
      const newState = !prevState;
      localStorage.setItem('theme', newState ? 'dark' : 'light');
      if (newState) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newState;
    });
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <button 
        onClick={toggleTheme} 
        className="p-2 m-4 bg-blue-500 text-white rounded">
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Dashboard />
    </div>
  );
};

export default App;
