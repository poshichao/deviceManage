'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
    .module('testApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/deviceType', {
                templateUrl: 'views/deviceType.html',
                controller: 'DeviceTypeCtrl'
            })
            .when('/device', {
                templateUrl: 'views/device.html',
                controller: 'DeviceCtrl'
            })
            .when('/reserve/:deviceId', {
                templateUrl: 'views/reserve.html',
                controller: 'ReserveCtrl'
            })
            .when('/lab', {
                templateUrl: 'views/lab.html',
                controller: 'LabCtrl'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            })
            .when('/myReserve', {
                templateUrl: 'views/myReserve.html',
                controller: 'MyReserveCtrl'
            })
            .when('/examineReserve', {
                templateUrl: 'views/examineReserve.html',
                controller: 'ExamineReserveCtrl'
            })
            .when('/users', {
                templateUrl: 'views/users.html',
                controller: 'UsersCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
