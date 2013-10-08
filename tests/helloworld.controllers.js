describe('Hello World Controller', function () {
  var $scope;
  var ctrl;
  
  beforeEach(module('helloworldApp'));
  
  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    ctrl = $controller('HelloworldCtrl', { $scope: $scope });
  }));

  it('should have a HelloworldCtrl controller', function () {
    expect(helloworldApp.HelloworldCtrl).not.to.equal(null);
  });

  it('sorts books by title in ascending order', function () {
    var i;
    scope.booksSortedBy = 'title-ascending';
    for (i = 0; i < scope.books.length - 1; i++) {
      expect(scope.books[i].title).toBeLessThan(scope.books[i + 1].title);
    }
  });
  
  it('sorts books by title in descending order', function () {
    var i;
    scope.booksSortedBy = 'title-descending';
    for (i = 0; i < scope.books.length - 1; i++) {
      expect(scope.books[i].title).toBeGreaterThan(scope.books[i + 1].title);
    }
  });
  
  it('sorts books by price in ascending order', function () {
  });
  
  it('sorts books by price in descending order', function () {
  });

  it('lists all books when searching for null or an empty string', function () {
  });
  
  it('lists only books that contain the search string in their title', function () {
  });
});
