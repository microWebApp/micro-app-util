const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "patpat-f2e",
    projectName: "turing-util",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.less$/i,
          use: ["style-loader", "css-loader", "less-loader"]
        },
        {
          test: /\.vue$/,
          use: ["vue-loader"]
        }
      ]
    },
    externals: ["vue", "vue-router", /^@patpat-f2e\/.+/],
    plugins: [new VueLoaderPlugin()],
    devServer: {
      host: '127.0.0.1',
      port: 8180
    },
  });
};
