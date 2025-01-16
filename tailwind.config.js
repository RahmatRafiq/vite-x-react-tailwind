/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#0fa683',
        secondary: '#380FA6',
        tertiary: '#A60F32',
        quaternary: '#7EA60F',
        base: '#fff',
        'base-2': '#808080',
        'light-background': '#ffffff', // Tambahkan warna background untuk light mode
        'dark-background': '#1a202c',  // Tambahkan warna background untuk dark mode
        'light-text': '#333333',       // Tambahkan warna teks untuk light mode
        'dark-text': '#f7fafc',         // Tambahkan warna teks untuk dark mode
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: '#0fa683',
          secondary: '#380FA6',
          accent: '#A60F32',
          neutral: '#7EA60F',
          'base-100': '#ffffff',
          'base-200': '#808080',
        },
      },
      'light',
      'dark',
    ],
  },
};
