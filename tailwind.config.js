/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      zIndex: {
        1000: 1000,
      },
      colors: {
        btnColor: '#7192F4',
        secondaryColor: '#D6D6D6',
        darkBlue: '#007AFF',
        adminBG: '#EAEDF7',
      },
    },
  },
  daisyui: {
    themes: ['cupcake', 'cmyk'],
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-filters'),
    require('flowbite/plugin'),
  ],
};
