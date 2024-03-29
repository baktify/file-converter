/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        banner: 'url("../assets/images/banner-grid.webp")',
        "banner-splash":
          'url("../assets/images/banner-splash.png"), url("../assets/images/banner-grid.webp")',
        "navbar-toggler-icon":
          'url("../assets/images/navbar-toggler-icon.svg")',
        twitter: 'url("../assets/images/twitter.svg")',
        // Divider
        "banner-other": 'url("../assets/images/banner-grid.webp")',
        "convert-page-banner":
          'url("../assets/images/convert-page-banner.webp")',
        "navbar-toggler-icon-other":
          'url("../assets/images/navbar-toggler-icon.svg")'
      },
      animation: {
        "ping-slow": "ping 1.5s linear 0.5s infinite",
        "ping-scale": "customScale 2s linear 0.5s infinite"
      },
      boxShadow: {
        "white-rounded": "0 0 0 3px #f7f7f7"
      },
      keyframes: {
        customScale: {
          "50%": { transform: "scale(1.03, 1.35)", opacity: "0.4" },
          "100%": { transform: "scale(1.04, 1.45)", opacity: "0.1" }
        }
      }
    },
    screens: {
      xs: "330px",
      // => @media (min-width: 330px) { ... }

      "x-xs": "540px",
      // => @media (min-width: 540px) { ... }

      sm: "720px",
      // => @media (min-width: 720px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "x-md": "820px",
      // => @media (min-width: 820px) { ... }

      "2x-md": "992px",
      // => @media (min-width: 992px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      "x-lg": "1200px",
      // => @media (min-width: 1200px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
}
