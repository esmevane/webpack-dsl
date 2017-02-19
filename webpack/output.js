const path = require("path")

const output = env => (
  {
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "./app.js"
    }
  }
)

module.exports = output
