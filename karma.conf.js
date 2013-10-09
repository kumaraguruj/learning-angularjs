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
      'lib/angular-1.0.8/angular-cookies.js',
      'lib/angular-1.0.8/angular-loader.js',
      'lib/angular-1.0.8/angular-resource.js',
      'lib/angular-1.0.8/angular-santitize.js',
      'lib/angular-1.0.8/angular-mocks.js',
    
      // Hello World source code
      'js/helloworld/app.js',
      'js/helloworld/controllers.js',
    
      // Hello World test files
      'tests/*.js'
    ]
  });
};
