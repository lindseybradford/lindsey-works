/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      technicolor: {
        blue: 'var(--technicolor-blue)',
        orange: 'var(--technicolor-orange)',
        plum: 'var(--technicolor-plum)',
        pavement: 'var(--technicolor-pavement)',
        green: 'var(--technicolor-green)',
        yellow: 'var(--technicolor-yellow)',
      },
      white: '#ECECE3',
    },
    variables: {
      DEFAULT: {
        technicolor: {
          blue: '#008CD1',
          orange: '#F36523',
          plum: '#942977',
          pavement: '#161616',
          green: '#008A4C',
          yellow: '#FFC20F',
        },
      },
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
