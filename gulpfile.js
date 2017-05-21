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

var browserSync = require('browser-sync'),
    jsHint = require('gulp-jshint'),
    jsHintStylish = require('jshint-stylish');
    cssLint = require('gulp-csslint')


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


/* BROWSER-SYNC: atualização automática do navegador
------------------------------------------------------------------------------------*/
gulp.task('server', function(){

    browserSync.init({
        server:{
            baseDir:'projeto/src'
        }
    });

    gulp.watch('projeto/**/*').on('change', browserSync.reload);

    gulp.watch('projeto/src/js/*.js').on('change', function(event){
        gulp.src(event.path)
            .pipe(jsHint())
            .pipe(jsHint.reporter(jsHintStylish));
    })

    gulp.watch('projeto/src/css/*.css').on('change', function(event){
        gulp.src(event.path)
            .pipe(cssLint())
            .pipe(cssLint.reporter());
    })

});

// Formato da configuração de uma task
gulp.task('nomeDaTarefa', function() {
    // código da sua tarefa aqui
    // -- pipe() - liga fluxos de dados
});
