var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var postcss = require('gulp-postcss');

var cssnext = require('postcss-cssnext');
var messages = require('postcss-browser-reporter');


var input = './css/*.css';
var output = './build/css';

// Static Server + watching scss/html files
gulp.task('serve', ['css'], function () {

    browserSync.init({
        server: "./build"
    });

    gulp.watch(input, ['css']);
    gulp.watch(input).on('change', browserSync.reload);
});

gulp.task('css', function () {
    var processors = [
        
    ];
    return gulp.src(input)
        .pipe(postcss(
            [
                cssnext,
                messages()
            ]
        )
        )
        .pipe(gulp.dest(output))
});

gulp.task('default', ['serve']);
