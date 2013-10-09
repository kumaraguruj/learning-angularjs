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
      // Angular files
      'lib/angular-1.0.8/angular.js',
      'lib/angular-1.0.8/angular-*.js',
    
      // Hello World source code
      'js/helloworld/app.js',
      'js/helloworld/controllers.js',
    
      // Hello World test files
      'tests/*.js'
    ],
    'exclude': [
      'lib/angular-1.0.8/angular-scenario.js'
    ]
  });
};
