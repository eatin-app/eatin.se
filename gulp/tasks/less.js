"use strict";

var gulp = require("gulp"),
    less = require("gulp-less"),
    minifyCss = require("gulp-minify-css"),
    sourcemaps = require("gulp-sourcemaps"),
    cmq = require("gulp-combine-media-queries"),
    path = require("path"),
    rename = require("gulp-rename"),
    handleErrors = require("../util/handleErrors"),
    config = require("../config");

gulp.task("less", function() {
    return gulp.src(path.join(config.root, "less", "main.less"))
        .pipe(sourcemaps.init())
        .pipe(less())
        .on("error", handleErrors.warning)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(config.root, "dist")));
});

gulp.task("less-production", function() {
    return gulp.src(path.join(config.root, "less", "main.less"))
        .pipe(less())
        .on("error", handleErrors.warning)
        .pipe(cmq({
            log: true
        }))
        .pipe(minifyCss())
        .on("error", handleErrors.warning)
        //.pipe(rename("main.css"))
        .pipe(gulp.dest(path.join("builds", "production", "dist")));
});
