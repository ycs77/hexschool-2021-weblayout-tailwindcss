module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',

      yellow: '#FFDF65',

      gray: {
        100: '#F8F9FA',
        200: '#E8E8DB',
        500: '#858377', // gray
        600: '#636057', // dark
        700: '#53524F',
        800: '#494846',
        900: '#373A3C',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '5.125rem',
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
