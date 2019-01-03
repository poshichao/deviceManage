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
                        response.data.id = parseInt(id);
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        self.add = function (device, callback) {
            var url = 'http://localhost:8080/device';

            $http.post(url, device)
                .then(function success() {
                    if (callback) {
                        callback("ok");
                    }
                }, function error() {
                    if (callback) {
                        callback("添加失败");
                    }
                });
        };

        self.deleteById = function (deviceId, callback) {
            var url = 'http://localhost:8080/device/' + deviceId;
            $http.delete(url)
                .then(function success() {
                    if (callback) {
                        callback("ok");
                    }
                }, function error() {
                    if (callback) {
                        callback("删除失败，该仪器存在关联数据");
                    }
                });
        };

        return {
            getAll: self.getAll,
            getById: self.getById,
            add: self.add,
            deleteById: self.deleteById
        };
    });
