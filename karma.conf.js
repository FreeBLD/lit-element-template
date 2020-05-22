var webpackConf = require('./webpack-test.config');

module.exports = function (config) {
    return config.set({
        browsers: ['Chrome'],
        frameworks: ['mocha'],
        files: ['./index.ts'],
        preprocessors: {
            './index.ts': ['webpack']
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-webpack'
        ],
        webpack: webpackConf,
        webpackMiddleware: {
            noInfo: true
        }
    })
}