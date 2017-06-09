var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');
var zip = require('gulp-zip');
var forceDeploy = require('gulp-jsforce-deploy');

//get rid of all comments and space
gulp.task('uglify',function(){
    return gulp.src('dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('salesforce/dist'))
});

//zip it
gulp.task('zip', ['uglify'], function(){
    return gulp.src('salesforce/dist/*.**')
        .pipe(zip('cis_portal.resource'))
        .pipe(gulp.dest('salesforce/src/staticresources/'))
        .pipe(gulp.dest('../../src/staticresources/'))
})

//deploy it
gulp.task('deploy', ['uglify', 'zip'], function(){
    return gulp.src('./salesforce/src/**', { base: "./salesforce" })
        .pipe(zip('src.zip'))
        .pipe(forceDeploy({
            username:'diego@roundfusion.com.modelit',
            password:'dev@m0d3l1t!5w8BiRy3rDWBME2bqAhuUNysj',
            loginUrl:'https://test.salesforce.com',
            version:'38.0'
        }))
})

gulp.task('build', ['uglify', 'zip', 'deploy']);