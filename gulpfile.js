const gulp = require("gulp");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

gulp.task("message", async () => {
  return console.log("This is our message");
});

gulp.task("compress", async () => {
  return gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("dist"));
});

gulp.task("images", async () => {
  return gulp
    .src("src/images/*.{jpg,png,svg}")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("sass", async () => {
  return gulp.src("src/sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", async () => {
  return gulp
    .src("src/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("default", gulp.series("message", "images", "sass", "scripts"));

gulp.task("watch", async () => {
  gulp.watch("src/*.js", gulp.series("scripts"));
  gulp.watch("src/sass/*.scss", gulp.series("sass"));
});
