module.exports = function(config) {
    var buildConfig = require('./build.config.js'),
        files = buildConfig.vendorJs.files.concat(
            buildConfig.appJs.files, buildConfig.testJs.files);
    config.set({
        frameworks: ['jasmine'],
        files: files,
        exclude: ['karma.conf*.js'],
        reporters: ['dots'],
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    });
};