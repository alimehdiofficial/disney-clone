module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login-background":
          "url('https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/login-background.jpg?raw=true')",
        "home-background":
          "url('https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/home-background.png?raw=true')",
      }),
      boxShadow: {
        "3xl":
          "rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px",
        "4xl":
          "rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px",
      },
      width: {
        initial: "initial",
      },
      transformOrigin: {
        "left-center": "left center",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-pseudo-elements")({
      customPseudoClasses: ["foo"],
      customPseudoElements: ["bar"],
      contentUtilities: false,
      emptyContent: true,
      classNameReplacer: {
        "hover:before:text-black": "hbt",
      },
    }),
    require("tailwind-scrollbar-hide"),
  ],
};
