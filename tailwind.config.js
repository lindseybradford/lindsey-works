/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        technicolor: {
          blue: '##008CD1',
          orange: '#F36523',
          plum: '#942977',
          pavement: '#161616',
          green: '#008A4C',
          yellow: '#FFC20F',
        },
        white: '#ECECE3',
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
  ],
};
