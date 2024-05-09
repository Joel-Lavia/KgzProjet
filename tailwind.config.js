/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'smartphone': '310px',
        // => @media (min-width: 640px) { ... }
      },

      backgroundImage: {
        'heroImg': "url('https://res.cloudinary.com/dp9skoyde/image/upload/v1713811350/Pictures%20Masterpieces%20project/Pictures/ydi9pzaeoilms3nvwvmi.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
