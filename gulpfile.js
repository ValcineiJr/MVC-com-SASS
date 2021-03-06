var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

//taask para watch
gulp.task('watch', () => {
    gulp.watch('./assets/sass/**/*.sass', (done) => {
        gulp.series(['sass'])(done);
    });
});

//task default
gulp.task('default', gulp.series(['sass', 'watch']));