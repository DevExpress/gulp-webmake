var gulp   = require('gulp');
var mocha  = require('gulp-mocha');
var jshint = require('gulp-jshint');


function runJshint () {
  return gulp
    .src([
      './gulpfile.js',
      './index.js',
      './spec/*.js',
    ])
    .pipe(jshint())
    .pipe(jshint.reporter());
}

function runMocha () {
  return gulp
    .src('test/*.js')
    .pipe(mocha());
}

exports.jshint  = runJshint;
exports.mocha   = runMocha;
exports.default = gulp.series(exports.jshint, exports.mocha);
