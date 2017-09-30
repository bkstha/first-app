'use strict';


angular.module('firstAppApp')
  .factory('PersonFactory', ['$http', function ($http) {
    var vm=this;
     vm.getPersons=function() {
      return $http.get("http://localhost:8080/persons").then(function (data) {
        console.log("from factory");
        console.log(data.data);
        return data.data;
      })
    }
    return vm;

  }]);
