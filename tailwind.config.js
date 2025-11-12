module.exports = {
  content: [
    './client/src/**/*.{js,ts,jsx,tsx}',
    './client/public/index.html',
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
};