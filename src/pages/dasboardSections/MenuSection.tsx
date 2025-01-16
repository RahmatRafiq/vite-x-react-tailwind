import React from 'react';
import { FaHome, FaInfoCircle, FaChartBar, FaCog, FaUserCircle, FaInstagram } from 'react-icons/fa';

const MenuSection = () => {
  const menuItems = [
    { id: 1, name: 'Home', icon: <FaHome />, tooltip: 'Home' },
    { id: 2, name: 'Details', icon: <FaInfoCircle />, tooltip: 'Details' },
    { id: 3, name: 'Stats', icon: <FaChartBar />, tooltip: 'Stats' },
    { id: 4, name: 'Settings', icon: <FaCog />, tooltip: 'Settings' },
    { id: 5, name: 'Profile', icon: <FaUserCircle />, tooltip: 'Profile' },
    { id: 6, name: 'Social Media', icon: <FaInstagram />, tooltip: 'Social Media' },
];

  return (
    <ul className="menu bg-base-200 rounded-box p-4 grid grid-cols-3 gap-4 mt-6">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a
            className="tooltip flex flex-col items-center justify-center"
            data-tip={item.tooltip}
          >
            <div className="text-3xl">{item.icon}</div>
            <span className="text-sm mt-2">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuSection;
