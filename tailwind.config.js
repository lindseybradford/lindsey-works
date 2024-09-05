/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: 'AKM',
      heading: 'GTC',
    },
    colors: {
      technicolor: {
        blue: 'var(--technicolor-blue)',
        orange: 'var(--technicolor-orange)',
        plum: 'var(--technicolor-plum)',
        green: 'var(--technicolor-green)',
        yellow: 'var(--technicolor-yellow)',
        rose: 'var(--technicolor-rose)',
      },
      white: '#ECECE3',
      black: '#1A1918',
      pavement: 'var(--pavement)',
      putty: {
        DEFAULT: 'var(--putty)',
        dark: 'var(--putty-dark)',
      },
    },
    variables: {
      DEFAULT: {
        pavement: 'rgb(22, 22, 22)', // #161616
        putty: {
          DEFAULT: '#A0A0A0',
          dark: '#585858',
        },
        technicolor: {
          blue: 'rgb(0, 140, 209)', // #008CD1
          orange: '#F36523',
          plum: '#942977',
          green: '#008A4C',
          yellow: '#FFC20F',
          rose: '#BF245E',
        },
      },
    },
    lineHeight: {
      1: 1,
      2: 1.25,
      3: 1.5,
      4: 1.75,
      5: 2,
      6: 2.25,
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
    // eslint-disable-next-line no-undef
    require('@mertasan/tailwindcss-variables'),
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
};
