import { merge } from "webpack-merge";
import singleSpaDefaults from "webpack-config-single-spa-ts";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (webpackConfigEnv, argv) => {
  const orgName = "home-hub";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  // eslint-disable-next-line no-console
  console.log(webpackConfigEnv);

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],

    output: {
      filename: "home-hub-root-config.js",
      libraryTarget: "system",
    },
  });
};
