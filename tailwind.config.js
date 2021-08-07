module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        mainbg: "url('/assets/todobg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
