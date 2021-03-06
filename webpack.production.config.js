const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin') --> auto import in production mode
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Use MiniCssExtractPlugin instead style-loader
module.exports = {
  // entry: './src/index.js',
  entry: {
    'hello-world': './src/hello-world.js',
    kiwi: './src/kiwi.js',
  },
  output: {
    // filename: 'bundle.[contenthash].js', // [contenthash] create new file with new name when code changes, use in the cases that we need for bw catching
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '', // show path when render to UI, '' will remove prefix when generator index.html in dist folder
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000, // conditional for create bundle file of npm or not
    },
  }, // Use in case, hello-world.js and kiwi.js both use lodash module, when wp run, loadsh npm would be generator one bundle.js file, hello-world.js one file and aslo with kiwi.js, so this things avoid situation two file hello-world.js and kiwi.js would be wp add lodash to those file, so each size of file will be large. ---> Note: Npm module will generator if its > 30kilobyte
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
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    // new TerserPlugin(), // TerserPlugin: minimize of bundle.js --> can remove cuz, in production mode it be use by default
    new MiniCssExtractPlugin({
      // filename: 'styles.[contenthash].css',
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ], // '**/*' this means, it will remove all file according subfolder, no matter how nested are (dist), path.join(process.cwd(), 'build/**/*') remove all file in build folder and no matter nested are (build)
    }), // clear old version before genergate new for bw catching, note: if there is no argument parameter pass into this fn, it just remove files store in dist folder
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      title: 'Hello World',
      chunks: ['hello-world'],
      template: 'src/page-template.hbs', // use template engine
      // filename: 'subfolder/custom_filename.html', // custom where and name of file would generate, if nok wp create html file into dist
      description: 'Hello World',
      minify: false, // html file will auto minify in production mode --> use this to dont do that
    }), // Continues with bw catching, this will generator new file html when new version of js and css would create, if have no argument parameter it will generator index.html, otherwise it will generator according argument be pass
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      title: 'Kiwi',
      chunks: ['kiwi'],
      template: 'src/page-template.hbs',
      description: 'Kiwi',
      minify: false,
    }),
  ],
}
