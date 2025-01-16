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
        base: '#ffffff',
        'base-2': '#808080',
        'light-background': '#ffffff', 
        'dark-background': '#1a202c',
        'light-text': '#333333',       
        'dark-text': '#f7fafc',
      },
    },
  },
  plugins: [require('daisyui')],
  // daisyui: {
  //   themes: [
  //     {
  //       customTheme: {
  //         primary: '#0fa683',
  //         secondary: '#380FA6',
  //         accent: '#A60F32',
  //         neutral: '#7EA60F',
  //         'base-100': '#ffffff',  // Light theme base
  //         'base-200': '#808080',  // Light theme secondary
  //       },
  //     },
  //     'light',
  //     'dark',
  //   ],
  // },
};
