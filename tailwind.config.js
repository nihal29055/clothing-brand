/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        beige: {
          50: '#F9F7F4',
          100: '#F2EEE8',
          200: '#E5DFD6',
          300: '#D8D0C3',
          400: '#C1B7A7',
          500: '#AB9F8C',
          600: '#8A7E6B',
          700: '#6A5F4F',
          800: '#493F34',
          900: '#292419',
        },
        olive: {
          50: '#F7F8F3',
          100: '#EFF0E6',
          200: '#DFE2CD',
          300: '#CED3B4',
          400: '#ADB782',
          500: '#8C9A51',
          600: '#708238',
          700: '#55622A',
          800: '#39421C',
          900: '#1C210E',
        },
        terracotta: {
          50: '#FBF4F2',
          100: '#F7E9E5',
          200: '#EFD3CC',
          300: '#E7BDB2',
          400: '#D79280',
          500: '#C6664D',
          600: '#B44D34',
          700: '#883A28',
          800: '#5B271B',
          900: '#2D130D',
        },
      },
      aspectRatio: {
        'portrait': '3 / 4',
      },
    },
  },
  plugins: [],
};