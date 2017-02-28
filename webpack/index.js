const path = require("path")

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "./app.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?importLoaders=1"
          {
            loader: "postcss-loader",
            options: {
              plugins: context => [ require("autoprefixer") ]
            }
          }
        ]
      }
    ]
  }
}
