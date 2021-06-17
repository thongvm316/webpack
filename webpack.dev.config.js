const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Use MiniCssExtractPlugin instead style-loader
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // [contenthash] create new file with new name when code changes, use in the cases that we need for bw catching
    path: path.resolve(__dirname, './dist'),
    publicPath: '', // show path when render to UI, '' will remove prefix when generator index.html in dist folder
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9000,
    writeToDisk: true,
  }, // config for live server - refer package.json: "dev": "webpack serve --config webpack.dev.config.js --hot"
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
        use: ['style-loader', 'css-loader'], // Loaders, load npm modules
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
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    // new TerserPlugin(), // TerserPlugin: minimize of bundle.js
    // new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }), --> dont need in development mode
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ], // '**/*' this means, it will remove all file according subfolder, no matter how nested are (dist), path.join(process.cwd(), 'build/**/*') remove all file in build folder and no matter nested are (build)
    }), // clear old version before genergate new for bw catching, note: if there is no argument parameter pass into this fn, it just remove files store in dist folder
    new HtmlWebpackPlugin({
      title: 'Hello World',
      template: 'src/index.hbs', // use template engine
      // filename: 'subfolder/custom_filename.html', // custom where and name of file would generate, if nok wp create html file into dist
      description: 'Some description',
    }), // Continues with bw catching, this will generator new file html when new version of js and css would create, if have no argument parameter it will generator index.html, otherwise it will generator according argument be pass
  ],
}
