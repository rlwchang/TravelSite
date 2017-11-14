const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const usemin = require('gulp-usemin');
const del = require('del');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task("previewDist", function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task("deleteDistFolder", function() {
    return del("./dist")
})

gulp.task("copyGeneralFiles", ["deleteDistFolder"], function() {
    var pathsToCopy = [
        "./app/**/*",
        "!./app/index.html",
        "!./app/assets/images/**",
        "!./app/assets/sass/**",
        "!./app/assets/scripts/**",
        "!./app/assets/styles/**"
    ]

    return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./dist"));
})

gulp.task("optimizeImages", ["deleteDistFolder", "icons"], function() {
    return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons/",  "!.app/assets/images/icons/**/*"])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
})

gulp.task("usemin", ["deleteDistFolder", "sass", "scripts"], function() {
    return gulp.src("./app/index.html")
    .pipe(usemin({
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./dist/"))
})

gulp.task("build", ["deleteDistFolder", "copyGeneralFiles", "optimizeImages", "usemin"]);
