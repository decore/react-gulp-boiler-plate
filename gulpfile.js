"use strict";

var gulp = require('gulp');

var config = require('./gulp.config');
var build = require('./gulp.build');

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);
gulp.task('build', ['js'])
