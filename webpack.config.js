"use strict";
const WebpackNotifierPlugin = require("webpack-notifier");
const webpack = require("webpack");
const yaml = require("yamljs");
const path = require("path");
const absolute = (relPath) => path.join(__dirname, relPath);

const srcDir = absolute("./src");
const srcPath = absolute("./src/main.js");
const distDir = absolute("./www");
const distFilename = "main.js"

let config = yaml.load("config.default.yml");
try {
  // Load user config if it exists
  config = Object.assign({}, config, yaml.load("config.yml"));
} catch (e) {}

module.exports = {
  entry: srcPath,
  output: {
    path: distDir,
    filename: distFilename,
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      "components": absolute("./src/components"),
      "reducers": absolute("./src/reducers"),
      "actions": absolute("./src/actions"),
      "constants": absolute("./src/constants"),
      "lib": absolute("./src/lib"),
      "strings": absolute("./strings"),
      "tests": absolute("./tests")
    }
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint"},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "jscs"}
    ],
    loaders: [
      {test: /\.json$/, loader: "json"},
      {
        test: /\.jsx?$/,
        include: /.\/(src|tests)\//,
        loader: "babel"
      }
    ]
  },
  devtool: "eval", // This is for Firefox
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({__CONFIG__: JSON.stringify(config)})
  ]
};
