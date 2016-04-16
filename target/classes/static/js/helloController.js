'use strict';

var app = angular.module('App');

app.controller('helloController', function($scope) {
    $scope.message = "hello";
});