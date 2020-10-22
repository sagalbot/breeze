const path = require("path");

module.exports = {
  entry: "./src/breeze.js",
  mode: "production",
  output: {
    filename: "breeze.js",
    path: path.resolve(__dirname, "dist"),
    library: "breeze",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
