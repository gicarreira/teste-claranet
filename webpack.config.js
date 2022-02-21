const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const env = process.env.REACT_APP_ENVIRONMENT
const path = require('path');
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      port: 4001,
      host: '000.000.00.00',
      historyApiFallback: true
      },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         },
         {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         }, {
            test: /\.(png|j?g|gif|jpg|svg)?$/,
            use: 'file-loader'
         },
         {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
               loader: "file-loader",
               options: {
                  name: "fonts/[name].[ext]",
               },
            },
         }

      ]
   },
   resolve: {
      extensions: ['*', '.js', '.jsx']
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve(__dirname, 'public/index.html'),
         filename: 'index.html'
      }),
      new Dotenv({
         path: `./.env.${env === "production" ? "prod" : "develop"}`,
      }),
      new CopyPlugin(
         [
            {
               from: 'public/images',
               to: './'
            }, 
            {
               from: 'src/assets/fonts',
               to: './src/assets/fonts'
            }
         ]
      )
   ]
};
