const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';



module.exports = {
  mode: "development",
  entry: {
    main: './src/javascripts/main.js',
    music: './src/javascripts/music/music.js',
    '3dmodeling': './src/javascripts/3dmodeling/3dmodeling.js',  // 追加
  },
  output: {
    filename: "javascripts/[name].js",
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
        test: /\.(glb|gltf|vrm)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/models/[name][ext]'
        }
      },
      {
        test: /\.(mp3|wav|ogg)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/audio/[name][ext]' }
      }
    ],
  },
  plugins: [
  
  new MiniCssExtractPlugin({
    filename: './stylesheets/main.css'
  }),
  new HtmlWebpackPlugin({
    template: './src/templates/index.pug',
    filename: 'index.html',
    chunks: ['main']
  }),
  new HtmlWebpackPlugin({
    template: './src/templates/3dmodeling.pug',
    filename: '3dmodeling.html',
    chunks: ['main', '3dmodeling']  // 変更
  }),
  new HtmlWebpackPlugin({
    template: './src/templates/music.pug',
    filename: 'music.html',
    chunks: ['main','music']
  }),
  new CleanWebpackPlugin(),
],
};

