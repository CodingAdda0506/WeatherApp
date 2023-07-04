/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'Changa': ['Changa One']
    },
    extend: {
      backgroundImage: {
        'hot' : 'url("https://weather-app-yuvadi29.vercel.app/static/media/hot.9a2d2c8984d58c325d0f.jpg")'
      }
    },
  },
  plugins: [],
}

