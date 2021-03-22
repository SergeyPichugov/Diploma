const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'dev-bundle.js',
      path: path.resolve(__dirname, './build')
   },
   mode: 'development',
   devServer: {
      open: true,
      port: 3000,
      hot: true,
      writeToDisk: false,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/env']
               },
            },
            exclude: /node_modules/,
         }
      ]
   }
};