var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var purify = require("purifycss-webpack-plugin");

module.exports = {
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
    new ExtractTextPlugin("main.css"),
    new purify({
        basePath: __dirname,
        paths: [
            "./src/*.html",
        ],
        purifyOptions: {info: true, minify: true}
    })
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap") },
      { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
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
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
};
