/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./*.{html,md}",
    "./**/*.{html,md}",
    "!./_site/**/*",
    "!./node_modules/**/*",
    "!./vendor/**/*"
  ],
  theme: {
    extend: {
      colors: {
        // Palette taken from the live kdu.cz / Noví lidovci site
        lidovci: {
          yellow: "#FFFA4B", // highlight / accent
          gold: "#FFDC04",   // yellow hover / gradient accent
          blue: {
            DEFAULT: "#034187", // primary deep blue (sections, headings)
            medium: "#00559D",  // links / brighter blue
            dark: "#023671",    // hover on blue
            line: "#004492",    // blue borders
            light: "#E5F6FF"    // pale blue tint background
          },
          ink: "#252525",     // near-black text & dark blocks
          black: "#000000",
          white: "#FFFFFF",
          gray: "#E5E5E5",    // light gray border
          grayblue: "#C6D4DF" // muted blue-gray border
        }
      },
      fontFamily: {
        // Headlines: Open Sans (heavy weight + uppercase), matching the live kdu.cz site
        heading: ['"Open Sans"', "Arial", "Helvetica", "sans-serif"],
        // Body & nav: Open Sans — the typeface the live kdu.cz site uses
        body: ['"Open Sans"', "ui-sans-serif", "system-ui", "-apple-system", "Arial", "sans-serif"],
        nav: ['"Open Sans"', "Arial", "sans-serif"]
      },
      maxWidth: {
        content: "1200px"
      }
    }
  },
  plugins: []
};
