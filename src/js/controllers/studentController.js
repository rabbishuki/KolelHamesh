angular.module('RDash')
  .controller('studentController', function ($scope, Data) {
    Data.get('students').then(function (data) {
      $scope.students = data.students;
    })

    $scope.student = {};

    $scope.add = function () {
      $scope.display = true;
    };

    $scope.save = function (valid) {
      if (!valid) {
        $scope.formErrors = true;
      } else if (valid) {
        Data.post('students', {student: $scope.student}).then(function (result) {

          Data.get('students').then(function (data) {
            $scope.students = data.students;
          })
        });

        $scope.close();
      }
    }

    $scope.close = function () {
      $scope.student = {};
      $scope.formErrors = false;
      $scope.display = false;
    }
  });