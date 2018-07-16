const gulp = require('gulp');
const sass = require('gulp-sass');
const bs = require('browser-sync').create();

gulp.task('html', function() {
  return gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function() {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function() {
  return gulp.src('./app/js/*.js')
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('bs', function() {
  bs.init({
    server: {
      baseDir: 'dist'
    }
  })
});



gulp.task('watch', function() {
  gulp.watch('./app/*.html', gulp.parallel('html')).on('change', bs.reload)
  gulp.watch('./app/scss/**/*.scss', gulp.parallel('sass')).on('change', bs.reload)
  gulp.watch('./app/js/*js', gulp.parallel('js')).on('chgange', bs.reload)
});
gulp.task('default', gulp.series(gulp.parallel('watch', 'bs')));
