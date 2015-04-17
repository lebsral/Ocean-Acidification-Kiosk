
var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');
var wrench = require('wrench');

var options = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e',
    errorHandler: function (title) {
      'use strict';
      return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
      };
    }
  };

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  'use strict';
  return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
  'use strict';
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
  'use strict';
  gulp.start('build');
});
