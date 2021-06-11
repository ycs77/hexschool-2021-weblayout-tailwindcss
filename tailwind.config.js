module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      yellow: '#FFDF65',

      white: '#FFFFFF',
      light: '#F8F9FA',

      'light-gray': '#E8E8DB',
      gray: '#858377',
      dark: '#636057',
      darken: '#53524F',
      black: '#494846',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '0rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        'baloo': ['"Baloo Tamma 2"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
