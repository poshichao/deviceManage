'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('LoginCtrl', function ($rootScope, $scope, $location, user) {
        var self = this;

        self.init = function () {
            $rootScope.isLogged = false;
            $scope.login = {
                name: "",
                password: ""
            };
        };

        $scope.userLogin = function () {

            if ($scope.login.name.length < 1) {
                alert("请输入用户名");
            } else if ($scope.login.password.length < 1) {
                alert("请输入密码");
            } else {
                user.login($scope.login, function (res) {
                    console.log(res);
                    if (res.user) {
                        $rootScope.isLogged = true;
                        $rootScope.user = res.user;
                        console.log($rootScope.user);
                        $location.url('main');
                    } else {
                        alert("账号或密码错误");
                    }
                });
            }

        };

        self.logout = function() {
            $rootScope.isLogged = false;
            $rootScope.user = null;
            $location.url('main');
        };


        self.init();
        $rootScope.logout = self.logout;
    });
