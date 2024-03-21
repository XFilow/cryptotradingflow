module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors:{
        'light-white': 'rgba(255,255,255,0.18)',
        "discord": "#7289da", 
      }
    },
  },
  variants: {
    extend: {},
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}