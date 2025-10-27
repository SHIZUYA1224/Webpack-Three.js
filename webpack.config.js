const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
  mode: "development",
  entry: "./src/javascripts/main.js",
  output: {
    filename: "javascripts/main.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, 'src'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: '> 0.25%, not dead' }],
              '@babel/preset-react'
            ],
          },
        },
      },
      {
          test: /\.(css|scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: false,
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
          },
        },
        ],
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
          test: /\.pug/,
          use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true  
            }
          },
        ],
      },
      {
        test: /\.(glsl|vs|fs)$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
  
  new MiniCssExtractPlugin({
    filename: './stylesheets/main.css'
  }),
  new HtmlWebpackPlugin({
    template: './src/templates/index.pug',
  }),
  new CleanWebpackPlugin(),
],
};


