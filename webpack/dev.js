const merge = require('webpack-merge');
const common = require('./common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
    },
});
