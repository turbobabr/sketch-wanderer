'use strict';

var webpack = require('webpack');
var path = require('path');
var SketchFusionExtensionPlugin = require('sketch-fusion-extension-plugin-webpack');

const CONTEXT = path.resolve(__dirname),
  createPath = function(nPath) { return path.resolve(CONTEXT, nPath); },
  SRC_PATH = createPath('src'),
  NODE_MODULES = createPath('node_modules'),
  RESOURCES = createPath('resources'),
  COMPILER = createPath('compiler');

module.exports = {
  context: CONTEXT,
  entry: './src/plugin.js',
  output: {
    path: 'build',
    filename: 'plugin.js'
  },
  watchOptions: {
    aggregateTimeout: 100
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015','stage-0'],
        plugins: ['transform-object-rest-spread']
      },
      include: [SRC_PATH],
      exclude: [NODE_MODULES,COMPILER,RESOURCES]
    },{ test: /\.json$/, loader: "json" }]
  },
  plugins:[
    new SketchFusionExtensionPlugin({
      buildReleaseVersion: true,
      autoDeployToSketch: true
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
};