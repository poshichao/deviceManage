'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MainCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {}
        };

        self.init();
    });
