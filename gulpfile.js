'use strict';

var gulp = require('gulp');
var newer = require('gulp-newer');
var server = require('gulp-webserver');
var htmlreplace = require('gulp-html-replace');
var webpack = require('gulp-webpack');
var del = require('del');

var DEST = 'dist';

gulp.task('default', ['webpack', 'override', 'data']);

gulp.task('webpack', function() {
  return gulp.src('src/scripts/main.jsx')
    .pipe(newer(DEST))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(DEST + '/resources/'));
});

gulp.task('override', function() {
  return gulp.src('src/index.html', { base: 'src' })
    .pipe(newer(DEST))
    .pipe(htmlreplace({ 'js': 'resources/bundle.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('data', function() {
  return gulp.src('src/data/**/*.*', { base: 'src' })
    .pipe(newer(DEST))
    .pipe(gulp.dest(DEST));
});

gulp.task('clean', function(done) {
  del([DEST], done);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
  return gulp.src(DEST)
    .pipe(server({
      livereload: true,
      open: true
    }));
});
