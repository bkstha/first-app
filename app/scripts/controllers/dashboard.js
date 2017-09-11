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
      var pagesSize = 10;
      var userId=151;
      $scope.pageSizes = [
        {id: 0, label: '10', value: 10},
        {id: 1, label: '25', value: 25},
        {id: 2, label: '50', value: 50},
        {id: 3, label: '100', value: 100}
      ];
      $scope.user = {};
      $scope.pageSize = $scope.pageSizes[0];
      for (var i = 0; i < 150; i++) {
        var index = (i + 1);
        users.push({id: (index), email: "email" + index, name: "name" + (index), contactNumber: "contact" + index})
      }

      $scope.users = users.slice(0, pagesSize);
      $scope.pageNumber = 1;
      $scope.totalDataLength = users.length;

      $scope.refreshDatagrid = function () {
        var pageSize = $scope.pageSize.value;
        var searchData = $scope.search;
        var pageNumber = $scope.pageNumber;
        console.log("refreshing data");
        if (searchData) {
          $scope.users = users.filter(function (user) {
            return (user.name.indexOf(searchData) > -1 || user.email.indexOf(searchData) > -1 || user.contact.indexOf(searchData) > -1)
          }).slice(((pageNumber * pageSize) - pageSize), pageSize * pageNumber);
        } else {
          $scope.users = users.slice((((pageNumber * pageSize) - pageSize)), pageSize * pageNumber);
        }
      }
      $scope.nextPage = function () {
        var pageNumber = $scope.pageNumber;
        if (!(($scope.pageSize.value * pageNumber) > ($scope.totalDataLength - 1))) {
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
      $scope.openPersonModal = function (id) {
        console.log("opening modal");
        if(id){
          var user = users.filter(function(user){
            return (user.id===id)
          })[0];
          $scope.user=user;
        }
        $("#personModal").modal("show");

      }
      $scope.updatePerson = function (userId) {
        console.log("updating user id: "+userId);

      }
      $scope.clearUser = function () {
        console.log("clearing user in modal");
        $scope.user={};

      }
      $scope.closeModal=function(){
        $scope.clearUser();
        $("#personModal").modal("hide");
      };
      $scope.savePerson = function () {
        var user= $scope.user;
        if(user.id){
          users.filter(function(u){
            return (u.id===user.id)
          })[0]= user;
          console.log("user updated having id "+user.id);
        }else{
          user.id=userId;
          console.log(user);
          users.push(user);
          console.log("saving user with id: "+userId);
          userId+=1;
        }
        $scope.refreshDatagrid();
        $scope.closeModal();
      }
      $scope.deleteUser = function (userId) {
        users=users.filter(function(u){
          return (u.id!==userId)
        })
        $scope.refreshDatagrid();
      }


      $scope.$on("hidden.bs.modal",function(events, arg){
        console.log(events)
        console.log(arg)
        console.log("hiding modal");

        $scope.clearUser();
      })
    }
  ]);
