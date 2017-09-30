'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
angular
  .module('firstAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'about'
      })
      .when('/logout', {
        template: 'views/login.html', //A template or templateUrl is required by AngularJS, even if your controller always redirects.
        controller: 'LogoutCtrl',
        controllerAs: "logout"
      })
      .otherwise({
        redirectTo: '/'
      })

  }).config(['$locationProvider', function ($locationProvider) {
   $locationProvider.hashPrefix('');
  }])
  .run(function ($cookies, $location, $rootScope) {
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      var next = next.toString();
      var url = next.substr(next.lastIndexOf("/"), next.length)
      console.log("to: " + url);
      // handle route changes
      var userCookies = JSON.stringify($cookies.getObject("user"));
      if (!userCookies) {
        $location.path("/");
      } else {
        if (url === "/") {
          $location.path("/dashboard");
        }
      }
    });
  });
