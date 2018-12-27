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
    .config(function($routeProvider) {
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
            .otherwise({
                redirectTo: '/'
            });
    });
