'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', watch);

gulp.task('sass', compileSass);

function compileSass() {
  return gulp
    .src('./styles/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
}

function watch() {
  gulp.watch('./styles/scss/**/*.scss', compileSass);
}
