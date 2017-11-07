const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssImport = require('postcss-import');


gulp.task("sass", function() {
    return gulp.src("./app/assets/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([cssImport, autoprefixer]))
        .pipe(gulp.dest("./app/assets/styles/"));
});
