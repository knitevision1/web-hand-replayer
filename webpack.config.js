const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const paths = {
  src: path.resolve(__dirname, 'src/')
}

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'styles.css',
  allChunks: true,
  disable: process.env.NODE_ENV !== 'production'
})

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: paths.src
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [htmlPlugin, extractTextPlugin]
}
