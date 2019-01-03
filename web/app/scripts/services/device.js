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
        var url = host + "/device";
        // 获取所有仪器
        self.getAll = function (callback) {
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        self.search = function (params, callback) {
            $http.get(url + '?')
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        self.getById = function (id, callback) {
            $http.get(url + '/' + id)
                .then(function success(response) {
                    if (callback) {
                        response.data.id = parseInt(id);
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error');
                });
        };


        self.add = function (deviceTypeId, device, callback) {
            device.deviceType = host + '/deviceType/' + deviceTypeId;
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
            $http.delete(url + '/' + deviceId)
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
            search: self.search,
            getById: self.getById,
            add: self.add,
            deleteById: self.deleteById
        };
    });
