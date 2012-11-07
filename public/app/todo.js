var app = angular.module('todoApp', []);

app.controller('TodoController', function ($scope) {
    $scope.userName = "Simon";
    $scope.message = "My Message";
});
