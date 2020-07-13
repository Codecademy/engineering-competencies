const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  
  plugins: [],

  devServer: {
    contentBase: [path.join(__dirname, '../'), path.join(__dirname, '../..')],
    publicPath: '/competency-explorer/dist/',
    compress: true,
    port: 5000
  }
  
};
