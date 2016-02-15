
"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var sourcemaps = require('gulp-sourcemaps');
var config = require('./gulp.config');


gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify({
		 entries: [config.paths.mainJs]
		 ,options: {
			           browserifyOptions: {
			             plugin: [
			               ['tsify', {extensions: 'tsx', target: 'es6'}]
			             ]
								 }
							 }
		,debug: true
	})
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});
