'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('LoginCtrl', function($scope) {
        var self = this;

        self.init = function() {
            $scope.isLogin = true;
        };

        self.init();
    });
