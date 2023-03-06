/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
      marcellus:["Marcellus","serif"]
    },

    extend: {
      colors: {
        text: {
          primary: {
            default: "#495591",
          },
          secondary: {
            default: "#807EB8",
          },
          black: {
            default: "#0F0C28",
          },
          lite: {
            default: "#D4DDEE",
          },
          success: {
            default: "#06D6A0",
          },
        },
        bg: {
          primary: "#495591",
          secondary: "#807EB8",
          black: "#0F0C28",
          lite: "#D4DDEE",
          success: "#06D6A0",
        },

        
        white: {
          default: "#fff",
         
        },
     
      },
     
      boxShadow: {
        myshadow: "0px 3.94531px 27.6172px rgba(3, 2, 18, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
