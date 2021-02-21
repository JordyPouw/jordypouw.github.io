module.exports = {
  mount: {
    src: { url: "/dist" },
    public: { url: "/" },
  },
  plugins: ["@snowpack/plugin-postcss"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
