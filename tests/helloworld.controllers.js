describe('Hello World Controller', function () {
  var scope;
  var ctrl;
  
  beforeEach(module('helloworldApp'));
  
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('HelloworldCtrl', { $scope: scope });
  }));

  it('should have a HelloworldCtrl controller', function () {
    expect(ctrl).not.toBe(null);
  });

  it('sorts books by title in ascending order', function () {
    var i;
    scope.booksSortedBy = 'title-ascending';
    scope.$apply();
    for (i = 0; i < scope.books.length - 1; i++) {
      expect(scope.books[i].title).toBeLessThan(scope.books[i + 1].title);
    }
  });
  
  it('sorts books by title in descending order', function () {
    var i;
    scope.booksSortedBy = 'title-descending';
    scope.$apply();
    for (i = 0; i < scope.books.length - 1; i++) {
      expect(scope.books[i].title).toBeGreaterThan(scope.books[i + 1].title);
    }
  });
  
  it('sorts books by price in ascending order', function () {
    var i;
    scope.booksSortedBy = 'price-ascending';
    scope.$apply();
    for (i = 0; i < scope.books.length - 1; i++) {
      expect(parseFloat(scope.books[i].price)).toBeLessThan(parseFloat(scope.books[i + 1].price));
    }
  });
  
  it('sorts books by price in descending order', function () {
    var i;
    scope.booksSortedBy = 'price-descending';
    scope.$apply();
    for (i = 0; i < scope.books.length - 1; i++) {
      expect(parseFloat(scope.books[i].price)).toBeGreaterThan(parseFloat(scope.books[i + 1].price));
    }
  });

  it('lists all books when searching for null or an empty string', function () {
    scope.booksTitleContains = '';
    scope.$apply();
    expect(scope.books.length).toBe(ctrl.books.length);
  
    scope.booksTitleContains = null;
    scope.$apply();
    expect(scope.books.length).toBe(ctrl.books.length);
  });
  
  it('lists only books that contain the search string in their title', function () {
    scope.booksTitleContains = 'Web';
    scope.$apply();
    expect(scope.books.length).toBe(1);
    expect(scope.books[0].title).toMatch('Web');
  
    scope.booksTitleContains = 'AngularJS';
    scope.$apply();
    expect(scope.books.length).toBe(ctrl.books.length);
    expect(scope.books[1].title).toMatch('AngularJS');
  
    scope.booksTitleContains = 'Learn AngularJS';
    scope.$apply();
    expect(scope.books.length).toBe(2);
    expect(scope.books[0].title).toMatch('Learn AngularJS');
  });
});
