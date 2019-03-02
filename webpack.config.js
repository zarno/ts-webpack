const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    // }),
  ],
};

module.exports = config;
