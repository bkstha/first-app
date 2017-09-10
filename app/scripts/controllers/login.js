'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('LoginCtrl', ["$scope", "$cookies", "$location",
    function ($scope, $cookies, $location) {
      console.log("at login page");
      $cookies.remove("user");
      const loginEmail = "email@shresthab.com.np";
      const loginPassword = "111";
      $scope.user = {};
      $scope.submit = function () {
        if ($scope.user.email === loginEmail && $scope.user.password === loginPassword) {
          $cookies.putObject("user", $scope.user);
          $location.path("/dashboard");
        } else {
          $cookies.remove("user");
          console.log("invalid user name and password");
        }
      }
    }
  ]);
