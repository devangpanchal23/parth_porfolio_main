/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Map existing red scale to the new brand palette so existing classes like
           `text-red-500`, `bg-red-500/20`, `from-red-500/10` continue to work
           but reflect the Kreo colors. Use rgb(...) with alpha placeholder to
           support Tailwind's `/opacity` shorthand. */
        red: {
          50: 'rgb(219 218 255 / <alpha-value>)',
          100: 'rgb(196 193 255 / <alpha-value>)',
          200: 'rgb(175 171 255 / <alpha-value>)',
          300: 'rgb(146 139 255 / <alpha-value>)',
          400: 'rgb(125 119 255 / <alpha-value>)',
          500: 'rgb(108 99 255 / <alpha-value>)', /* #6C63FF */
          600: 'rgb(154 148 255 / <alpha-value>)', /* #9A94FF */
          700: 'rgb(90 80 200 / <alpha-value>)',
          800: 'rgb(70 60 160 / <alpha-value>)',
          900: 'rgb(40 35 100 / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          '"Playfair Display"',
          'serif',
        ],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
