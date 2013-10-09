angular.module('helloworldApp').controller(
  'HelloworldCtrl',   // name of the controller
  [
    '$scope',         // DI (Dependency Injection) modules
    function ($scope) { // definition of the controller
      this.books = [
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
        },
        {
          'title': 'Learn AngularJS in 24 Hours, 2nd Edition',
          'price': '32.00'
        }
      ];
      
      var books = this.books;
      $scope.books = books;
      $scope.booksSortedBy = 'title-ascending';
      $scope.booksTitleContains = '';
      var searchAndSortBooks = function () {
        var i;
        var searchTitleRegExp;
        var result = [];
      
        // Searching for titles containing the search string
        if ($scope.booksTitleContains && $scope.booksTitleContains != '') {
          searchTitleRegExp = new RegExp($scope.booksTitleContains, 'i');
          for (i = 0; i < books.length; i++) {
            if (searchTitleRegExp.test(books[i].title)) {
              result.push(books[i]);
            }
          }
        } else {
          result = books;
        }
      
        // Sorting the books
        // TODO
      
        $scope.books = result;
      };
      
      searchAndSortBooks();
      $scope.$watch(
        'booksSortedBy + "," + booksTitleContains',
        function (newValue, oldValue) {
          searchAndSortBooks();
        }
      );
    }
  ]
);
