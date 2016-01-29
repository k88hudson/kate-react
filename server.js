const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.js");
const compiler = require("webpack")(config);

const server = new WebpackDevServer(compiler, {
  contentBase: 'www',
  publicPath: config.output.path,
  hot: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false
  }
});

server.listen(1989, 'localhost', err => {
  if (err) console.error(err);
  console.log('Started server at localhost:1989');
});
