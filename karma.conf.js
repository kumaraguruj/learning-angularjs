module.exports = function (config) {
  config.set({
    'frameworks': [
      'jasmine'
    ],
    'browsers': [
      'Chrome',
      'Firefox'
    ],
    'files': [
      'lib/angular-1.0.8/angular.js',
      'lib/angular-1.0.8/angular-*.js',
      'lib/angular-1.0.8/angular-mocks.js',
      'js/**/*.js',
      'tests/*.js'
    ]
  });
};
