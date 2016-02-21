var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');

const common = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Website Starter',
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      // "_": "underscore",
    }),
  ],
  resolve: {
    alias: {
        jquery: "jquery/dist/jquery",
        jQuery: "jquery/dist/jquery"
    }
  },
  module: {
    loaders: [
      { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ["style", "css?sourceMap"] },
      {
        test: /.*\.(gif|png|jpe?g|ico|svg)$/i,
        loaders: [
            'file-loader?name=[name].[ext]',
            'image-webpack?progressive=true&bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      // helps to load bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2$/,
        loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file' },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
};

const TARGET = process.env.TARGET || process.env.NODE_ENV;

if(TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {
    module: {
      loaders: [
        { test: /\.scss$/, loaders: ["style", "css", "sass"]},
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]
  });
}

if(TARGET === 'watch') {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || '3000'
    },
    module: {
      loaders: [
        { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
      ]
    },
    output: {
      publicPath: 'http://' + (process.env.HOST || 'localhost') + ':' +
                  (process.env.PORT || '3000') + '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
