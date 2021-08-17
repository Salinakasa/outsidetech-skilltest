const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// compile scss into css
function style() {
	// 1. Find my css file
	return gulp.src('./assets/scss/**/*.scss')
	// 2. Pass that file through sass compiler
	.pipe(sass())
	// 3. Location of compiled CSS
	.pipe(gulp.dest('./assets/css'))
}

// Watch for any changes in scss and HTML files
function watch() {
	gulp.watch('./assets/scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;