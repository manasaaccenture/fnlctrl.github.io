'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        'bundle': './'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        publicPath: 'dist' // for dev server
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.(less|css)$/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
        }, {
            test: /\.(png|jpg)$/,
            loader: "url"
        }, {
            test: /\.html/,
            loader: 'html'
        }, {
            test: /\.svg/,
            loader: 'svg-sprite'
        }, {
            test: /\.md$/,
            loader: "raw"
        }]
    },
    resolve: {
        modulesDirectories: ['src', 'data', 'icons', 'components', 'node_modules', 'lib'],
        extensions: ['', '.vue', '.svg', '.js']
    },
    htmlLoader: {
        attrs: ['img:src', 'icon:name']
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css!autoprefixer!less')
        }
    },
    plugins: [
        new ExtractTextPlugin("[name].css", {allChunks: true})
    ],
    devServer: {
        port: 1234,
        inline: true,
        host: "0.0.0.0",
        historyApiFallback: {
            index: 'src/index.html'
        }
    }
};