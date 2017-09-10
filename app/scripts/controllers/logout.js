'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('LogoutCtrl', ["$scope", "$cookies", "$location",
    function ($scope, $cookies, $location) {
      console.log("clearing user cache")
      $cookies.remove("user");
      $location.path("/");

    }
  ]);
