// Karma configuration
// Generated on Tue Jun 09 2015 15:36:18 GMT-0500 (CDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'pyangtest/static/bower_components/angular/angular.js',
            'pyangtest/static/bower_components/angular-mocks/angular-mocks.js',
            'pyangtest/static/js/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "rubicon/webui/static/*(partials|js)/**/*.html": "ng-html2js",
            "rubicon/webui/static/js/**/!(*spec|*Spec|*mock|*test).js": "coverage"
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage', 'junit', 'notify'],

        mochaReporter: {
            output: 'full'
        },

        //notify reporter
        notifyReporter: {
            reportEachFailure: true, // Default: false, Will notify on every failed sepc
            reportSuccess: true // Default: true, Will notify when a suite was successful
        },
        // web server port
        port: 9876,


        plugins: [

            "karma-phantomjs-launcher",
            "karma-jasmine",

            "karma-coverage",
            "karma-notify-reporter",
            "karma-mocha-reporter",
            "karma-junit-reporter"
        ],

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
