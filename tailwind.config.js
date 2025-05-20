// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // include all components/pages
    './src/global.css',            // include your global CSS file
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
