
module.exports = {
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png|\.woff2?|\.ttf|\.eot|\.svg$/,
        loader: 'url'
      }
    ]
  }
}
