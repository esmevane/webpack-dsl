const style = env => "style-loader"
const css = env => "css-loader?importLoaders=1"
const postcss = env => (
  {
    loader: "postcss-loader",
    options: {
      plugins: context => [ require("autoprefixer") ]
    }
  }
)

const styles = env => (
  {
    test: /\.css$/,
    use: [ style(env), css(env), postcss(env) ]
  }
)

module.exports = env => (
  {
    module: {
      rules: [ styles(env) ]
    }
  }
)
