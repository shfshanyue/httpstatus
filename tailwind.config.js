module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
