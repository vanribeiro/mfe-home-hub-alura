const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
      path: path.resolve(__dirname, "dist"),
      publicPath: "//localhost:8500/",
      libraryTarget: "system",
    },
  });
};
