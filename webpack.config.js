const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, '.'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
