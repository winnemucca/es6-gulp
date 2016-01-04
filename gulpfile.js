var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require('browser-sync');
var clean = require('gulp-clean');
// change default
gulp.task("babelIt", function () {
	console.log('in');
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task("copyIndex", ['clean'], function() {
	gulp.src("src/index.html")
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task("browserSync", function() {
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

gulp.task('watchFiles', function() {
	gulp.watch('src/index.html', ['copyIndex']);
	gulp.watch('src/**/*.js', ['babelIt']);
})

gulp.task('clean', function() {
	return gulp.src('./build', {read: false})
			.pipe(clean());
});


gulp.task('default', ['copyIndex', 'browserSync', 'watchFiles']);