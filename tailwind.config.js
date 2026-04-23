/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        confidence: {
          1: '#ef4444',
          2: '#f97316',
          3: '#eab308',
          4: '#84cc16',
          5: '#22c55e'
        }
      }
    }
  },
  plugins: []
};
