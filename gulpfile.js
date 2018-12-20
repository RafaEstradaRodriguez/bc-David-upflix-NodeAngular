const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('copy', ()=>{
    console.log('Moviendo el compilado de netflix');
    return gulp.src('../Up-Flix/dist/Up-Flix**/*')
        .pipe(gulp.dest('./Public/dist'));
});
gulp.task('clean', ()=>{
    console.log('Borrando el compilado anterior de netflix');
    return gulp.src('./Public/dist/**/*')
        .pipe(clean());
});
gulp.task('default', ()=>{
    console.log('watching: ../Up-Flix/dist');
    gulp.watch('../Up-Flix/dist', gulp.series('clean', 'copy', 'deleteSource'))
});



/*const del = require('del');
gulp.task('default', ()=>{
    console.log('Default task');
});
gulp.task('delete', ()=>{
    console.log('Deleting');
    return del('./public/dist/!**', {force:true});
});
gulp.task('copy',['delete'], ()=>{
    console.log('Copying');
    return gulp.src('../Upflix/dist/')
        .pipe(gulp.dest('./public/dist/'));
});
gulp.task('angularReady',['copy'], ()=>{
    console.log('Done');
});*/