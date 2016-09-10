var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var input = './css/*.css';
var output = './build/css';

// Static Server + watching scss/html files
gulp.task('serve', ['css'], function () {

    browserSync.init({
        server: "./build"
    });

    gulp.watch(input).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
