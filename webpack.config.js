var path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
