const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('./dev/scss/app.scss')
        .pipe(autoprefixer({
            overridebrowsersList: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("./public/css/"))
}

function watchFiles() {
    gulp.watch('./dev/scss/*.scss', css);
    gulp.watch('./public/index.html');
}

// tasks
gulp.task('css', css);
gulp.task("watch", gulp.parallel(watchFiles));