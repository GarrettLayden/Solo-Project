const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js', 
    output: {
      path: path.resolve(__dirname, 'dist'),  
      filename: 'bundle.js',
      publicPath: '/',
    }, 
    mode: 'development', 
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /(node.modules)/,  
          use: {
            loader: 'babel-loader',  
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']  
            }
          }
        },
        {
          test: /.(css|scss)$/, 
          use: ['style-loader', 'css-loader'],
          // use: ['style-loader', 'css-loader', 'sass-loader']
        }    
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: './index.html'
    })],
    devServer: {
      // publicPath: '/dist/',
      proxy: {
        '/api': 'http://localhost:3000',
      },
      hot: true,
      static: {
        // directory: path.join(__dirname, 'client'),
        publicPath: '/dist/bundle.js'  
      },
      port: 8080  
    },
  }