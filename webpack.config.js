var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'release');
var APP_DIR = path.resolve(__dirname, 'src');


const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8080";
/* "bootstrap-sass-webpack!./" + APP_DIR+ "/scss/bootstrap-sass.config.js",
 */
var config = {
  entry:      [
    "babel-polyfill",
    APP_DIR + '/js/index.js'

  ]
  ,
  output:     {
    path:     BUILD_DIR,
    filename: 'bundle.js'
  },
  module:     {
    loaders: [
      {
        test:    /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,

        loader: 'babel'
      }/*,
      {
        test:    /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }*/
      /*,{ test: /\.less$/, loader: "style!css!less" }
*/
       ,  {
        test:    /\.less$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "less"]
      }
      ,
      {test: /\.woff$/, loader: "url-loader?minetype=application/font-woff"}

    ]
  },
  devServer:  {
    publicPath: "/release",
    inline:     true

  },
  sassLoader: {
    includePaths: ["./src/scss/"]
  }
};

module.exports = config;