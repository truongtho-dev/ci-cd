const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
