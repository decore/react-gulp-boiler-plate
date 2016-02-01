"use strict";

var gulp = require('gulp');

var config = require('./gulp.config');
var browser = require('./gulp.browser');
var browser = require('./gulp.build');

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);
