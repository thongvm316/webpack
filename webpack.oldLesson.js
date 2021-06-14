const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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

// /* ------------------------------------------ */
// Asset
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
//         type: 'asset',
//         parser: {
//           dataUrlCondition: {
//             maxSize: 3 * 1024, // 3 kilobytes
//           }, // conditional to choose asset/resource or asset/inline
//         },
//       },
//       {
//         test: /\.txt/,
//         type: 'asset/source',
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'], // Loaders, load npm modules
//       },
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/env'],
//             plugins: ['@babel/plugin-proposal-class-properties'],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new TerserPlugin(),
//     new MiniCssExtractPlugin({ filename: 'styles.css' }),
//   ], // TerserPlugin: minimize of bundle.js, MiniCssExtractPlugin ???
// }

/* ------------------------------------------ */
// Use MiniCssExtractPlugin instead style-loader
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js', // [contenthash] create new file with new name when code changes, use in the cases that we need for bw catching
    path: path.resolve(__dirname, './dist'),
    publicPath: '', // show path when render to UI, '' will remove prefix when generator index.html in dist folder
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Loaders, load npm modules
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Loaders
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
  plugins: [
    new TerserPlugin(), // TerserPlugin: minimize of bundle.js
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ], // '**/*' this means, it will remove all file according sub folder, no matter how nested are (dist), path.join(process.cwd(), 'build/**/*') remove all file in build folder and no matter nested are (build)
    }), // clear old version before genergate new for bw catching, note: if there is no argument parameter pass into this fn, it just remove files store in dist folder
    new HtmlWebpackPlugin({
      title: 'Hello World',
      filename: 'subfolder/custom_filename.html',
      meta: {
        description: 'Some description',
      },
    }), // Continues with bw catching, this will generator new html when new version of js and css would create, if have no argument parameter it will generator index.html, otherwise it will generator according argument be pass
  ],
}
