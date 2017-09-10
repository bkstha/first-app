'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('DashboardCtrl', ["$scope",
    function ($scope) {
      console.log("at dashboard page");
      var users = [];
      const pagesSize = 10;
      $scope.pageSizes = [
        {id: 0, label: '10', value: 10},
        {id: 1, label: '25', value: 25},
        {id: 2, label: '50', value: 50},
        {id: 3, label: '100', value: 100}
      ];
      $scope.pageSize = $scope.pageSizes[0];
      for (var i = 0; i <150; i++) {
        var index = (i + 1);
        users.push({id: (index), email: "email" + index, name: "name" + (index), contact: "contact" + index})
      }

      $scope.users = users.slice(0, pagesSize);
      // $scope.pageSize=pagesSize;
      $scope.pageNumber = 1;
      $scope.totalDataLength = users.length;
      // $scope.dataDisplayText= "Displaying 1 of " +users.length;
      // $scope.pageSize=10;

      // $scope.searchPerson = function () {
      //   console.log("searching");
      //   var searchData = $scope.search;
      //   var pageSize = $scope.pageSize;
      //   console.log(searchData);
      //   console.log(pageSize);
      //   $scope.users = users.filter(function (user) {
      //     return (user.name.indexOf(searchData) > -1 || user.email.indexOf(searchData) > -1 || user.contact.indexOf(searchData) > -1)
      //   }).slice(0, pageSize);
      //
      // };
      //
      // $scope.changeSearchSize = function () {
      //   console.log("changing page search size");
      //
      //   refreshDatagrid();
      // }
      $scope.refreshDatagrid = function () {
        var pageSize = $scope.pageSize.value;
        var searchData = $scope.search;
        var pageNumber = $scope.pageNumber;
        console.log("refreshing data");
        console.log(pageSize, searchData, pageNumber)
        if (searchData) {
          console.log(1);
          console.log(((pageNumber * pageSize) - pageSize));
          $scope.users = users.filter(function (user) {
            return (user.name.indexOf(searchData) > -1 || user.email.indexOf(searchData) > -1 || user.contact.indexOf(searchData) > -1)
          }).slice(((pageNumber * pageSize) - pageSize), pageSize*pageNumber);
        } else {
          console.log(2);
          console.log(users);
          console.log((((pageNumber * pageSize) - pageSize) - 1), pageSize)
          $scope.users = users.slice((((pageNumber * pageSize) - pageSize)), pageSize*pageNumber);
        }
      }
      $scope.nextPage = function () {
        var pageNumber = $scope.pageNumber;
        if (!(($scope.pageSize.value*pageNumber)>($scope.totalDataLength-1))) {
          $scope.pageNumber = pageNumber + 1;
          $scope.refreshDatagrid();
        }
      }
      $scope.prevPage = function () {
        var pageNumber = $scope.pageNumber;
        if (pageNumber !== 1) {
          $scope.pageNumber = $scope.pageNumber - 1;
          $scope.refreshDatagrid();
        }
      }
      $scope.openPersonModal = function () {
        console.log("opening modal");
      }
    }

  ]);
