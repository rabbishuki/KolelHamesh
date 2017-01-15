angular.module('RDash')
  .controller('studentController', function ($scope, Data) {
    Data.get('students').then(function(data) {
      $scope.students = data.students;
    })
  });