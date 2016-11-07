const gulp = require('gulp');
const config = require('./config').path;

gulp.task('copyFonts', function() {
     gulp.src([config.fonts.all])
         .pipe(gulp.dest(config.fonts.dest))
 });