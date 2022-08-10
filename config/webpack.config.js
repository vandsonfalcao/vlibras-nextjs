const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist/umd"),
    filename: "index.js",
    library: "vandsonfalcao/vlibras-nextjs",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.ts(x*)?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "config/tsconfig.umd.json",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
