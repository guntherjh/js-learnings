var gulp = require("gulp");
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var babel = require("gulp-babel");


gulp.task("babel", function () {
  return gulp.src("tests/test.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('browserify', function() {
    return browserify('./tests/run.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['babel', 'browserify']);

gulp.task('default', ['build']);