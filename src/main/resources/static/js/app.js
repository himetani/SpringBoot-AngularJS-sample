'use strict';

var app = angular.module('myApp', ['ui.router', 'ngRoute']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('index', {
        url: '/',
        templateUrl: '/templates/index.html',
        controller: 'indexController'
    });

    $stateProvider
        .state('hello', {
        url: '/hello',
        templateUrl: '/templates/hello.html',
        controller: 'helloController'
    });

    $urlRouterProvider.otherwise('/');

});
