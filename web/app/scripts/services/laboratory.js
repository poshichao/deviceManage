'use strict';

/**
 * @ngdoc service
 * @name testApp.laboratory
 * @description
 * # laboratory
 * Service in the testApp.
 */
angular.module('testApp')
    .service('laboratory', function($http) {
    	var self = this;

    	self.getAll = function(callback) {
    		var url = 'http://localhost:8080/laboratory'

    		$http.get(url)
    			.then(function success(response) {
    				if (callback) {
    					callback(response.data._embedded);
    				}
    			}, function error() {
    				console.log(error);
    			});
    	}

    	return {
    		getAll: self.getAll
    	};
    });
