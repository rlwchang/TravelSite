const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');
const svg2png = require('gulp-svg2png');

var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: function() {
                    return function(sprite, render) {return render(sprite).split(".svg").join(".png")}
                }
            },
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
    return del(["./app/assets/images/sprites/*.svg", "./app/assets/images/sprites/*.png"]);
});

gulp.task("endClean", ["moveSprite"], function() {
    return del(["./app/assets/images/sprites/css/*.svg"]);
});

gulp.task("createSprite", ["beginClean"], function() {
    return gulp.src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/assets/images/sprites/"));
});

gulp.task("createPngCopy", ["createSprite"], function() {
    return gulp.src("./app/assets/images/sprites/css/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest("./app/assets/images/sprites"));
})

gulp.task("moveSprite", ["createSprite"], function() {
    return gulp.src("./app/assets/images/sprites/css/*.{svg,png}")
    .pipe(gulp.dest("./app/assets/images/sprites"));
})

gulp.task("copySpriteCSS", ["createSprite"], function() {
    return gulp.src("./app/assets/images/sprites/css/sprite.css")
    .pipe(rename("_sprite.scss"))
    .pipe(gulp.dest("./app/assets/sass/modules"));
})

gulp.task("icons", ["beginClean", "createSprite", "createPngCopy", "moveSprite", "copySpriteCSS", "endClean"]);
