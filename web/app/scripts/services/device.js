'use strict';

/**
 * @ngdoc service
 * @name testApp.device
 * @description
 * # device
 * Service in the testApp.
 */
angular.module('testApp')
    .service('device', function ($http) {
        var self = this;

        var host = "http://localhost:8080";
        // 获取所有仪器
        self.getAll = function (callback) {
            var url = host + "/device";
            $http.get(url)
                .then(function success(response) {
                    console.log(response);
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        self.getById = function (id, callback) {
            var url = host + "/device/" + id;
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        return {
            getAll: self.getAll,
            getById: self.getById
        };
    });
