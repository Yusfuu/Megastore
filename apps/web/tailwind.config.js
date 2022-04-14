module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ['"Cairo"', "sans-serif"],
    },
    extend: {
      colors: {
        'primary': {
          50: '#fffcf2',
          100: '#fff8e6',
          200: '#feeebf',
          300: '#fde399',
          400: '#fccf4d',
          500: '#fbba00',
          600: '#e2a700',
          700: '#bc8c00',
          800: '#977000',
          900: '#7b5b00'
        },
        'secondary': {
          50: '#fffffa',
          100: '#fffef5',
          200: '#fffde6',
          300: '#fffcd7',
          400: '#fffab8',
          500: '#fff89a',
          600: '#e6df8b',
          700: '#bfba74',
          800: '#99955c',
          900: '#7d7a4b'
        }
      },
      screens: {
        'xs': { 'max': '360px' },
        '3xl': '1920px',
        '4xl': '2560px',
      }
    }
  }
};
