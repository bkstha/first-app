'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var DashboardCtrl,
    scope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.pageSize.value).toBe(10);
    expect(scope.pageSizes.length).toBe(4);
    expect(scope.user).toEqual({ });
    expect(scope.pageNumber).toBe(1);
    expect(scope.totalDataLength).toBe(150);





  });
});
