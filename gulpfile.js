var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mjml = require('gulp-mjml');
var clean = require('gulp-clean');
var argv = require('yargs').argv

var SERVER_PORT = 8000 || argv.port;
var emailFolder = argv.emailFolder ? ('/' + argv.emailFolder) : '';
var distFolder = 'dist';
var srcFolder = 'src';

gulp.task('webserver', function() {
  return gulp.src('./' + srcFolder + emailFolder + '/')
    .pipe(webserver({
      livereload: true,
      open: false,
      port: SERVER_PORT,
    }));
});

gulp.task('mjml', function() {
  console.log('--- compile html ---');
  gulp.src(srcFolder + emailFolder + '/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest(srcFolder + emailFolder));
});

gulp.task('watch', function() {
  return gulp.watch([srcFolder + '/**/*.mjml', srcFolder + '/**/*!.html'], ['mjml']);
});

gulp.task('default', ['mjml', 'watch', 'webserver']);
