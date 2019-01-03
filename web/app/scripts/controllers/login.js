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
                    if (res.msg === 'ok') {
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


        self.init();
    });
