const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const ts = require('gulp-typescript');
const merge = require('merge2');
const libPath = 'dist/lib',
  typesPath = 'dist/types';
const tsProject = ts.createProject('tsconfig.json');

gulp.task('babel', () => {
  return gulp
    .src(['src/**/*.js', 'src/**/*.ts'])
    .pipe(babel())
    .pipe(gulp.dest(`${libPath}/`));
});

gulp.task('types', () => {
  const tsResult = gulp.src('src/**/*.ts').pipe(tsProject());
  return merge([tsResult.dts.pipe(gulp.dest(`${typesPath}/`))]);
});

gulp.task('default', ['babel', 'types']);
gulp.task('watch', () => watch('src/**/*', () => gulp.start(['babel', 'types'])));