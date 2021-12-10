module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',

      white: '#FFFFFF',
      black: '#000000',

      yellow: '#FFDF65',
      'light-yellow': '#FFEA98',

      red: '#FF785E',
      'light-red': '#FFA391',

      gray: {
        50: '#F8F9FA',
        100: '#E5E5E5',
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
        baloo: ['"Baloo Tamma 2"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        around: '0 0 8px 0 rgba(73, 72, 70, 0.15)',
        'bottom-btn': '0 -2px 4px 0 rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
