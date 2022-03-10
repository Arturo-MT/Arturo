module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backdropFilter: {
    'none': 'none',
    'blur': 'blur(20px)',
  },
    screens: {
      'phone': '300px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
},
  plugins: [require('tailwindcss-filters')],
}
