var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Horray - gulp task");
});

gulp.task('html', function(){
    console.log("HTML changed");
});

gulp.task('styles', function(){
    console.log("STYLES changed");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html'); 
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});