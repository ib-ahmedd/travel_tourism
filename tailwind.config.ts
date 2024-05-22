/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "semi-black": "#69727d",
        "hover-black": "#222",
        "text-gray": "#69727d",
      },
      backgroundImage: {
        "home-intro-bg": "/images/home/intro/bg-img.jpg",
        "room-intro-bg": "/images/rooms/intro/bg-img.jpg",
        "contact-intro-bg": "/images/contact/intro/bg-img.jpg",
        "footer-bg": "/images/footer/bg-img.jpg",
      },
      fontFamily: {
        "serif-display": ["'DM Serif Display'", "serif"],
        "open-sans": ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
