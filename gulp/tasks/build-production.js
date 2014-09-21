"use strict";

var path = require('path');
var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var runSequence = require("run-sequence");
var config = require("../config");

gulp.task("build-production", function (callback) {
  runSequence("clean", "copy", "config",
    ["browserify-production", "less-production"],
    callback);
});

gulp.task("clean", function () {
  return gulp.src("./builds", { read: false }).pipe(clean(/*{ force: true }*/));
});

gulp.task("copy", function () {
  return gulp.src(path.join(config.root, "**"))
    .pipe(gulp.dest("./builds/production"));
});

gulp.task("config", function () {
  return gulp.src("./config/production.json")
    .pipe(rename("config.json"))
    .pipe(gulp.dest("./builds/production/js"));
});
