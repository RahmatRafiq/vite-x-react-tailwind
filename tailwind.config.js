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
          accent: '#A60F32', // Gunakan 'accent' untuk tombol tambahan
          neutral: '#7EA60F', // Warna untuk elemen netral
          'base-100': '#ffffff', // Warna latar belakang utama
          'base-200': '#808080', // Warna sekunder
        },
      },
      'light', // Tambahkan tema bawaan jika diperlukan
      'dark',
    ],
  },
};
