module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: theme('colors.orange.400'),
            },
          },
        },
      }),
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
