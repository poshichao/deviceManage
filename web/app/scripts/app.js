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
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl'
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
            .when('/laboratory', {
                templateUrl: 'views/laboratory.html',
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
            .when('/commentReserve/:reserveId', {
                templateUrl: 'views/commentReserve.html',
                controller: 'CommentReserveCtrl'
            })
            .when('/comment', {
                templateUrl: 'views/comment.html',
                controller: 'CommentCtrl'
            })
            .when('/user', {
                templateUrl: 'views/user.html',
                controller: 'UserCtrl'
            })
            .when('/examineDevice', {
                templateUrl: 'views/examineDevice.html',
                controller: 'ExamineDeviceCtrl'
            })
            .when('/manageDevice', {
                templateUrl: 'views/manageDevice.html',
                controller: 'ManageDeviceCtrl'
            })
            .when('/manageDeviceType', {
                templateUrl: 'views/manageDeviceType.html',
                controller: 'ManageDeviceTypeCtrl'
            })
            .when('/manageLaboratory', {
                templateUrl: 'views/manageLaboratory.html',
                controller: 'ManageLaboratoryCtrl'
            })
            .when('/submitDevice', {
                templateUrl: 'views/submitDevice.html',
                controller: 'SubmitDeviceCtrl'
            })
            .when('/submitLaboratory', {
                templateUrl: 'views/submitLaboratory.html',
                controller: 'SubmitLaboratoryCtrl'
            })
            .when('/examineRegister', {
                templateUrl: 'views/examineRegister.html',
                controller: 'ExamineRegisterCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
