const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  cssnano = require('cssnano'),
  autoprefixer = require('autoprefixer'),
  postccsImport = require('postcss-import')
;

gulp.task('css', () => {
  return gulp.src('./styles/styles.scss')
    .pipe(sass())
    .pipe(postcss([postccsImport, autoprefixer, cssnano]))
    .pipe(gulp.dest('./public'))
})

gulp.task('default', gulp.parallel('css'))