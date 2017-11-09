const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task("watch", function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    gulp.task("cssInject", ["sass"], function() {
        return gulp.src("./app/assets/styles/main.css")
            .pipe(browserSync.stream());
    });

    gulp.watch("./app/assets/sass/**", function() {
        gulp.start("cssInject");
    });

    gulp.watch(["./app/assets/scripts/modules/*.js", "./app/assets/scripts/*.js"], function() {
        gulp.start("scripts");
    });

    gulp.watch("./app/assets/scripts/bundled/App.js", function() {
        browserSync.reload();
    });

    gulp.watch("./app/index.html", function() {
        browserSync.reload();
    });



})
