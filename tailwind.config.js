module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e6e9fe',
        },
        light: {
          DEFAULT: '#ffba3c',
        },
        dark: {
          DEFAULT: '#5fdcc7',
        },
      },
      fontFamily: {
        title: ['Open sans'],
        body: ['Roboto'],
      },
      borderRadius: {
        '4xl': '3.5rem',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      transform: ['active'],
    },
  },

  plugins: [],
};
