angular.module('App', [])
    .controller('MainController', function($http, $scope) {
            $http.get('/')
            .then(function(response) {
                 $scope.hello = "hey you";
             })
        })
        ;