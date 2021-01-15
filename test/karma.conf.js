var webpackConf = require('./karma-webpack.config');

module.exports = function (config) {
    return config.set({
        browsers: ['Chrome'],
        frameworks: ['mocha'],
        reporters: ['progress'],
        colors: true,
        files: ['./all.tests.js'],
        preprocessors: {
            './all.tests.js': ['webpack', 'coverage']
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-webpack'
        ],
        singleRun: false,
        autoWatch: true,
        port: 9876,
        concurrency: Infinity,
        webpack: webpackConf,
        webpackMiddleware: {
            noInfo: true
        }
    })
}