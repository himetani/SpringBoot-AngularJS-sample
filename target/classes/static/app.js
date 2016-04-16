'use strict';

var app = angular.module('App', ['ui.router', 'ngRoute']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

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
