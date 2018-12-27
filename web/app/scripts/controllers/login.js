'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('LoginCtrl', function($rootScope, $scope, $location) {
    	var self = this;

    	self.init = function() {
    		$rootScope.isLogin = true;
    	};

    	self.login = function() {
    		$rootScope.isLogin = false;
    		$location.url('main');
    	};

    	self.init();

    	$scope.login = self.login;
    });
