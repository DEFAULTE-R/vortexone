/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'] },
      colors: {
        'vortex-black': '#000000', 'vortex-dark': '#0a0a0a', 'vortex-grey': '#6b7280',
        'vortex-light-grey': '#d1d5db', 'vortex-white': '#f9fafb',
        accent: '#dc2626', 'accent-hover': '#b91c1c'
      }
    }
  },
  plugins: []
};
