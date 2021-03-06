module.exports = {
  entry: __dirname + '/src/scripts/main.jsx',
  output: {
    path: __dirname + '/dist/resources/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /bootstrap/,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png|\.woff2?|\.ttf|\.eot|\.svg$/,
        loader: 'url'
      }
    ]
  }
}
