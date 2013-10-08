angular.module('helloworldApp').controller(
  'HelloworldCtrl',   // name of the controller
  [
    '$scope',         // DI (Dependency Injection) modules
    function ($scope) { // definition of the controller
      var books = [
        {
          'title': 'Mastering Web Application Development with AngularJS',
          'price': '35.99'
        },
        {
          'title': 'AngularJS for Dummies',
          'price': '10.95'
        },
        {
          'title': 'Learn AngularJS in 24 Hours',
          'price': '29.00'
        }
      ];
      
      $scope.books = books;
      $scope.booksSortedBy = 'title';
      $scope.booksTitleContains = '';
      var searchAndSortBooks = function () {
        var i;
        var book;
        var result = [];
        for (i = 0; i < books.length; i++) {
          book = books[i];
          // TODO: logic for searching
          result.push(books[i]);
        }
        // TODO: sort the books
        $scope.books = result;
      };
    }
  ]
);
