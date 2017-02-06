var gulp = require('gulp');
  var connect = require('gulp-connect');
  var nodemon = require('gulp-nodemon');

  gulp.task('webserver', function () {
    nodemon({
      script: 'server.js',
     ext: 'txt',
    delay: "10000"
    })
  })
gulp.task('default', ['webserver']);
