var gulp = require('gulp');
/*
    gulp-load-plugins: lazy loads npm modules when they are called,
    using camelCase (default)
    e.g. plugins.jshint()
*/
var plugins = require('gulp-load-plugins')({pattern: ['*']});

var paths = {
  style: {sass:'style/sass/**/*.scss', css: 'style/css/**/.*css'},
  scripts: 'app/**/*.js',
  views: 'app/**/*.html',
  output: 'build'
};

gulp.task('clean', function() {
    return plugins.del(paths.output + "/**/*");
});

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default',{ verbose: true }));
});

gulp.task('webpack', function() {
    return gulp.src('/app/app.module.js')
        .pipe(plugins.webpackStream( require('./webpack.config.js') ))
        .pipe(gulp.dest(paths.output));
});

gulp.task('copy:views', function() {
    return gulp.src(paths.views)
        .pipe(gulp.dest(paths.output));
});

gulp.task('style:css', function() {
    return gulp.src(paths.style)
        .pipe(gulp.dest(paths.output));
});

gulp.task('style:sass', function() {
    return gulp.src(paths.style.sass)
        .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
        .pipe(gulp.dest(paths.output));
});

gulp.task('style',['style:sass']);

gulp.task('test:karma', function() {
    new plugins.karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});

gulp.task('test', ['test:karma'])

gulp.task('build', ['clean', 'lint', 'webpack', 'test', 'copy:views', 'style']);


gulp.task('watch', ['webpack:devServer'], function() {
  gulp.watch([paths.style.sass, paths.style.css], ['style']);
});

gulp.task('webpack:devServer', function() {
    var config = require('./webpack.config.js')
    config.output.path = __dirname  + '/build/';
    var compiler = plugins.webpack(config);

    new plugins.webpackDevServer(compiler, {
        devtool: 'eval',
        progress: 'colors',
        contentBase: paths.output,
        inline: true
    }).listen(8080, "localhost", function(err) {
        if(err) throw new plugins.gutil.PluginError("webpack-dev-server", err);
    });
});
