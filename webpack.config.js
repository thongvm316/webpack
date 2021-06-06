const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

// Asset resource
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, './dist'),
//     publicPath: 'dist/', // show path when render to UI
//   },
//   mode: 'none',
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg)$/,
//         type: 'asset/resource',
//       },
//     ],
//   },
// }

/* ------------------------------------------ */
// Asset inline
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, './dist'),
//     publicPath: 'dist/', // show path when render to UI
//   },
//   mode: 'none',
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg)$/,
//         type: 'asset/inline',
//       },
//     ],
//   },
// }

/* ------------------------------------------ */
// Asset
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/', // show path when render to UI
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kilobytes
          }, // conditional to choose asset/resource or asset/inline
        },
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loaders
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [new TerserPlugin()], // minimize of bundle.js
}
