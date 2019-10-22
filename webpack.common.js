module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      }
    ]
  }
};
