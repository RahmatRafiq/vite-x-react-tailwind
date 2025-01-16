import React, { useEffect, useState } from 'react';

const ThemeController = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Menyinkronkan tema dengan preferensi yang disimpan di localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark'); // Aktifkan dark mode
    } else {
      document.documentElement.classList.remove('dark'); // Nonaktifkan dark mode
    }
  }, []);

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString()); // Menyimpan preferensi mode
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <div className="fixed bottom-16 right-4 flex items-center gap-2 bg-light-primary text-white rounded-full py-2 px-6 shadow-lg hover:bg-light-accent transition z-50 hover:scale-105 transform">
  <label className="flex cursor-pointer gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
      />
    </svg>
    <input
      type="checkbox"
      checked={darkMode}
      onChange={toggleDarkMode}
      className="toggle theme-controller"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>
</div>

  );
};

export default ThemeController;
