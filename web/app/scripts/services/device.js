'use strict';

/**
 * @ngdoc service
 * @name testApp.device
 * @description
 * # device
 * Service in the testApp.
 */
angular.module('testApp')
    .service('device', function($http) {
    	var self = this;

    	// 获取所有仪器
    	self.getAll = function(callback) {
    		var url = "http://localhost:8080/device";
    		$http.get(url)
    			.then(function success(responce) {
    				console.log(responce);
    				if (callback) {
    					callback(responce.data._embedded);
    				}
    			}, function error() {
    				console.log('error');
    			});
    	};

    	return {
    		getAll: self.getAll
    	};
    });