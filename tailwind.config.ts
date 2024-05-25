/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "semi-black": "#222",
        "hover-black": "#333",
        "text-gray": "#555",
      },
      backgroundImage: {
        "home-hero-bg": "url('/images/home/intro/bg-img.jpg')",
        "room-hero-bg": "url('/images/rooms/intro/bg-img.jpg')",
        "amenities-hero-bg": "url('/images/amenities/intro/bg-img.jpg')",
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
