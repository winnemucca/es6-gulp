var gulp = require("gulp");
var babel = require("gulp-babel");

var browserSync = require('browser-sync');

gulp.task("default", function () {
	console.log('in');
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("copyIndex", function() {
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
	gulp.watch('src/index.html', ['copyIndex'])
})
