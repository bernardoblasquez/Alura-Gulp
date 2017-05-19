// Importação de bibliotecas
// procura na pasta do node models a pasta gulp
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('build-img', function(){

    gulp.src('projeto/src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('projeto/src/img02'));

});
