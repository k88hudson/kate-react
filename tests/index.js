const req = require.context(".", true, /\.test.js$/);
const files = req.keys();

describe("ActivtyStreams", () => {
  files.forEach(file => req(file));
  // require("test/components/NewTabPage.test.js");
});
