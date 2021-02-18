const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/img', to: 'img' }],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '70-80',
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 10,
        colors: 256,
      },
      svgo: {},
      plugins: [
        ImageminMozjpeg({
          quality: 85,
          progressive: true,
        }),
      ],
    }),
  ],
}
