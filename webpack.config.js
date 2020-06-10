const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/i, use: ['style-loader', 'css-loader']},
      {
        test: /\.(woff(2)?|ttf|eot|svg|mp3)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            // options: {
            //   name: '[name].[ext]',
            //   outputPath: 'fonts/'
            // }
          }
        ]
      },
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: true,
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 7777
},
};