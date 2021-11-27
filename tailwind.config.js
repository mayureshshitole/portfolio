module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 4s infinite",
      bounceFirst: "bounceFirst 4s infinite",
    },
    keyframes: {
      spin: {
        to: { transform: "rotate(360deg)" },
      },
      ping: {
        "75%, 100%": { transform: "scale(2)", opacity: "0" },
      },
      pulse: {
        "50%": { opacity: ".5" },
      },
      bounce: {
        "0%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
        "50%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
        "100%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
      },
      bounceFirst: {
        "0%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
        "50%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
        "100%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
      },
    },
    fontFamily: {
      nunito: ["Nunito"],
    },
    extend: {},
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
};
