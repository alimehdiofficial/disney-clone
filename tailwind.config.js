module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login-background":
          "url('https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/login-background.jpg?raw=true')",
      }),
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
  ],
};
