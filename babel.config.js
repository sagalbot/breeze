/**
 * Edge 16 is the earliest version of Edge to support
 * intersection observer.
 * @see https://caniuse.com/intersectionobserver
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
          edge: "16",
        },
      },
    ],
  ],
};
