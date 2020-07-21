/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const webpack = require('webpack')
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')

const ROOT_PATH = path.resolve(__dirname)
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const env = process.env.NODE_ENV || 'development'
const isDeveloping = env !== 'production'
const PORT = process.env.PORT || 3000
const HOST = 'localhost' // Set to localhost if need be.

const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = { devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH, 'src/app/index'),
  ],
  optimization: { splitChunks: { chunks: 'all',
    minSize: 30000,
    minRemainingSize: 0,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 6,
    maxInitialRequests: 4,
    automaticNameDelimiter: '~',
    cacheGroups: { defaultVendors: { test: /[\\/]node_modules[\\/]/,
      priority: -10 },
    default: { minChunks: 2,
      priority: -20,
      reuseExistingChunk: true } } } },
  module: { preLoaders: [
    { test: /\.jsx?$/,
      loaders: isDeveloping ? ['eslint'] : [],
      include: path.resolve(ROOT_PATH, './app') },
  ],
  loaders: [{ test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['react-hot', 'babel'] },
  { test: /\.svg$/,
    loader: 'babel!svg-react' },
  { test: /\.json$/,
    loader: 'json' },
  { test: /\.scss$/,
    loader: isDeveloping
      ? 'style-loader!css-loader!postcss-loader!sass-loader'
      : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader',
        loader: 'css-loader!postcss-loader!sass-loader' }) },
  { test: /\.css$/,
    loader: isDeveloping
      ? 'style-loader!css-loader!postcss-loader'
      : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader',
        loader: 'css-loader!postcss-loader' }) },
  { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
    loader: 'url-loader?mimetype=application/font-woff' },
  { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
    loader: 'file-loader?name=[name].[ext]' },
  { test: /\.(jpg|png)$/,
    loader: 'file?name=[path][name].[hash].[ext]' },
  ] },
  resolve: { extensions: ['', '.js', '.jsx'],
    alias: { actions: path.resolve(ROOT_PATH, 'app/src/actions'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils'),
      reducers: path.resolve(ROOT_PATH, 'app/src/reducers'),
      store: path.resolve(ROOT_PATH, 'app/src/stores'),
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      constants: path.resolve(ROOT_PATH, 'app/src/constants'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages') } },
  output: { path: !isDeveloping
    ? path.resolve(ROOT_PATH, 'public') : path.resolve(ROOT_PATH, 'app/build'),
  publicPath: '/',
  filename: isDeveloping ? 'bundle.js' : '[name].[chunkhash].js',
  chunkFilename: '[name].[chunkhash].chunk.js' },
  stats: { chunks: true },
  devServer: { contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: HOST,
    port: PORT },
  postcss() {
    return { defaults: [precss, autoprefixer],
      cleaner: [autoprefixer({ browsers: [] })] }
  },
  plugins: process.env.NODE_ENV === 'production'
    ? [
      new ExtractTextPlugin('[name].[contenthash].css'),
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor',
        children: true,
        minChunks: 2,
        async: true }),
      new HtmlwebpackPlugin({ template: 'public/templates/_index.html',
        minify: { removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true },
        inject: true }),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
      new OfflinePlugin({ relativePaths: false,
        publicPath: '/public',

        excludes: [],

        caches: { main: [':rest:'],

          // All chunks marked as `additional`, loaded after main section
          // and do not prevent SW to install. Change to `optional` if
          // do not want them to be preloaded at all (cached only when first loaded)
          additional: ['*.chunk.js'] },

        // Removes warning for about `additional` section usage
        safeToUseOptionalCaches: true,

        AppCache: true }),
    ]
    : [
      new WebpackBundleAnalyzer(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({ title: 'React Weekly',
        template: 'index.html' }),
      new OfflinePlugin({ relativePaths: false,
        publicPath: '/public',

        excludes: [],

        caches: { main: [':rest:'],

          // All chunks marked as `additional`, loaded after main section
          // and do not prevent SW to install. Change to `optional` if
          // do not want them to be preloaded at all (cached only when first loaded)
          additional: ['*.chunk.js'] },

        // Removes warning for about `additional` section usage
        safeToUseOptionalCaches: true,

        AppCache: false }),
      new WebpackBundleAnalyzer(),
    ] }
