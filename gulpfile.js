
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
gulp.task('lint', function(){
    return gulp.src('pyangtest/static/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
gulp.task('unit-test', function(){
    return karma({ configFile: 'karma.conf.js' }).once();
});

gulp.task('default', ['lint','unit-test']);