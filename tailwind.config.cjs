module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'nig-ochre': '#D97706',
        'nig-green': '#0B6623',
        'nig-red': '#C02627'
      },
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
