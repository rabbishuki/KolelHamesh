 // This service connects to our REST API
 angular.module('RDash').factory("Data", function ($http) {

   var serviceBase = 'http://localhost:8080/';

   var obj = {};

   obj.get = function (q, external) {
     var path = external ? q : serviceBase + q;
     return $http.get(path).then(function (results) {
       return results.data;
     });
   };
   obj.post = function (q, object) {
     return $http.post(serviceBase + q, object).then(function (results) {
       return results.data;
     });
   };
   obj.put = function (q, object) {
     return $http.put(serviceBase + q, object).then(function (results) {
       return results.data;
     });
   };
   obj.delete = function (q) {
     return $http.delete(serviceBase + q).then(function (results) {
       return results.data;
     });
   };
   
   return obj;
});