// Karma configuration
// Generated on Thu Feb 18 2016 09:04:41 GMT-0800 (PST)

module.exports = function(config) {
  var webpackConfig = JSON.parse(JSON.stringify(require("./webpack.config.js")));
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // plugins: [
    //     require('karma-webpack')
    // ],

    // list of files / patterns to load in the browser
    files: [
        './app/app.module.js',
        './app/**/*.html',
        './node_modules/angular-mocks/angular-mocks.js',
        './tests/unit/**/*.js'
    ],

    webpack: webpackConfig,


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './app/app.module.js' : ['webpack'],
        './app/**/*.html': ['ng-html2js'],
        'tests/unit/**/*.js': ['webpack']
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/',
      moduleName: 'template-module'
      },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','nyan'],


    // web server port
    port: 9876,


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
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
