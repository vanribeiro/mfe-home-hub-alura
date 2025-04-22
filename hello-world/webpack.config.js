const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "home-hub",
    projectName: "hello-world",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    output: {
      filename: "home-hub-hello-world.js",
      publicPath: "//localhost:8500/",
    },
  });
};
