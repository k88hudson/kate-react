const webpack = require("./webpack.config");
const path = require("path");

const TESTS_ENTRY_FILE = "./tests/index.js";

const COVERAGE_SOURCE_PATH = "./src";
const COVERAGE_DIR = "./logs/reports/coverage";
const COVERAGE_REPORTERS = [
  {type: "lcov", subdir: "lcov"},
  {type: "html", subdir: "html"},
  {type: "text", subdir: ".", file: "text.txt"},
  {type: "text-summary", subdir: ".", file: "text-summary.txt"}
];

module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ["FirefoxNightly"],
    frameworks: ["mocha"],
    reporters: ["mocha", "coverage"],
    coverageReporter: {
      dir: COVERAGE_DIR,
      reporters: COVERAGE_REPORTERS
    },
    files: [TESTS_ENTRY_FILE],
    preprocessors: {
      "tests/**/*.js": ["webpack", "sourcemap"]
    },
    webpack: {
      devtool: "inline-source-map",
      resolve: webpack.resolve,
      module: {
        loaders: webpack.module.loaders,
        postLoaders: [{
          test: /\.js$/,
          loader: 'istanbul-instrumenter',
          include: [path.join(__dirname, COVERAGE_SOURCE_PATH)]
        }]
      },
      plugins: webpack.plugins
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
