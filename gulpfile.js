// Importação de modulos
// procura na pasta do node models a pasta gulp
var gulp = require('gulp');

var imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    usemin = require('gulp-usemin'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');


gulp.task('default', ['copy'], function(){
    gulp.start('minifica-img', 'usemin');
    //todos executados de forma assíncrona
})

/* MINIFICA: minifica arquivos de imagem
--------------------------------------------------------------------*/
    gulp.task('minifica-img', function(){

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


/* USEMIN: simplifica a utilização dos modulos CONCAT, UGLIFY, CSSMIN e HTMLREPLACE
------------------------------------------------------------------------------------*/
// CONCAT e UGLIFY: concatena e minifica arquivos css e js
// CSSMIN: minifica arquivos CSS
// HTMLREPLACE: faz alterações na  página HTML concatenanso chamadas de script ou
//              estilos em uma só.

    gulp.task('usemin', function(){
        gulp.src('dist/src/**/*.html')
            .pipe(usemin({
                'js':[uglify],
                'css':[cssmin]
            }))
            .pipe(gulp.dest('dist'))
    })

// Formato da configuração de uma task
gulp.task('nomeDaTarefa', function() {
    // código da sua tarefa aqui
    // -- pipe() - liga fluxos de dados
});
