const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

var config = {
    mode: {
        css: {
            sprite: "sprite.svg",
            render: {
                css: {
                    template: "./gulp/templates/sprite.css"
                }
            }
        }
    }
}
gulp.task("beginClean", function() {
    return del(["./app/assets/images/sprites/*.svg"]);
});


gulp.task("endClean", ["moveSprite"], function() {
    return del(["./app/assets/images/sprites/css/*.svg"]);
});

gulp.task("createSprite", ["beginClean"], function() {
    return gulp.src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/assets/images/sprites/"));
});

gulp.task("moveSprite", ["createSprite"], function() {
    return gulp.src("./app/assets/images/sprites/css/*.svg")
    .pipe(gulp.dest("./app/assets/images/sprites"));
})

gulp.task("copySpriteCSS", ["createSprite"], function() {
    return gulp.src("./app/assets/images/sprites/css/sprite.css")
    .pipe(rename("_sprite.scss"))
    .pipe(gulp.dest("./app/assets/sass/modules"));
})

gulp.task("icons", ["beginClean", "createSprite", "moveSprite", "copySpriteCSS", "endClean"]);
