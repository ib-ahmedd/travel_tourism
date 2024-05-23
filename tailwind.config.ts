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
        "semi-black": "#222",
        "hover-black": "#333",
        "text-gray": "#555",
      },
      backgroundImage: {
        "home-hero-bg": "url('/images/home/intro/bg-img.jpg')",
        "room-hero-bg": "url('/images/rooms/intro/bg-img.jpg')",
        "contact-hero-bg": "url('/images/contact/intro/bg-img.jpg')",
        "footer-bg": "url('/images/footer/bg-img.jpg')",
      },
      fontFamily: {
        "serif-display": ["'DM Serif Display'", "serif"],
        "open-sans": ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
