// Importação de modulos
// procura na pasta do node models a pasta gulp
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');


// BUILD: minifica arquivos de imagem
gulp.task('build-img', ['copy'], function(){

    gulp.src('projeto/src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('projeto/src/img02'));
});

// CLEAN: apaga pasta pré-dfinida
gulp.task('clean', function(){

    return gulp.src('distribuicao-projeto')
            .pipe(clean('distribuicao-projeto'))
});

// COPY: copia arquivo ou pasta para um destino definido
gulp.task('copy', ['clean'], function() {
   return gulp.src('projeto/**/*')
        .pipe(gulp.dest('distribuicao-projeto'))
});


// Formato da configuração de uma task
gulp.task('nomeDaTarefa', function() {
    // código da sua tarefa aqui
    // -- pipe() - liga fluxos de dados
});
