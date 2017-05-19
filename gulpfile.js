// Importação de modulos
// procura na pasta do node models a pasta gulp
var gulp = require('gulp');

var imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    htmlReplace = require('gulp-html-replace'),
    concat = require('gulp-concat');


/* BUILD: minifica arquivos de imagem
--------------------------------------------------------------------*/
    gulp.task('minifica-img', ['copy'], function(){

        gulp.src('projeto/src/img/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/src/img'));
    });


/* CLEAN: apaga pasta pré-definida
--------------------------------------------------------------------*/
    gulp.task('clean', function(){

        return gulp.src('dist')
                .pipe(clean('dist'))
    });


/* COPY: copia arquivo ou pasta para um destino definido
--------------------------------------------------------------------*/
    gulp.task('copy', ['clean'], function() {
       return gulp.src('projeto/**/*')
            .pipe(gulp.dest('dist'))
    });


/* CONCAT: concatena arquivos: css e js
--------------------------------------------------------------------*/
    gulp.task('concat-js', function() {

        //abaixo é passado vários scripts em ordem, pois aqui a ordem é importante

        gulp.src(['dist/src/js/jquery.js','dist/src/js/home.js','dist/src/js/produtos.js'])
            .pipe(concat('allScripts.js'))
            .pipe(gulp.dest('dist/src/js'))
    });


/* HTML REPLACE: faz alterações na  página HTML - concatena chamadas
--------------------------------------------------------------------*/
    gulp.task('replace-html', function(){
        gulp.src('dist/**/*.html')
            .pipe(htmlReplace({
                js:'js/allScrips.js'
            }))
            .pipe(gulp.dest('dist'))
    });


// Formato da configuração de uma task
gulp.task('nomeDaTarefa', function() {
    // código da sua tarefa aqui
    // -- pipe() - liga fluxos de dados
});
