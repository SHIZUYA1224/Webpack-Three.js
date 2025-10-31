const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';



module.exports = {
  mode: "development",
  entry: "./src/javascripts/main.js",
  output: {
    filename: "javascripts/main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
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
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        },
        use: isProd
          ? [{
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: { progressive: true, quality: 65 }
              }
            }]
          : []
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
        type: 'asset/source',
      },
      {
        test: /\.(glb|gltf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/models/[name][ext]'
        }
      },
    ],
  },
  plugins: [
  
  new MiniCssExtractPlugin({
    filename: './stylesheets/main.css'
  }),
  new HtmlWebpackPlugin({
    template: './src/templates/index.pug',
    filename: 'index.html',
  }),
  new HtmlWebpackPlugin({
    template: './src/templates/another-page.pug',
    filename: 'another-page.html',
  }),
  new CleanWebpackPlugin(),
],
};


