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

        self.searchLaboratory = function (laboratoryId, callback) {
            var searchUrl = url + '/search/laboratory?laboratoryId=' + laboratoryId;
            $http.get(searchUrl)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        self.searchDeviceType = function (deviceTypeId, callback) {
            var searchUrl = url + '/search/deviceType?deviceTypeId=' + deviceTypeId;
            $http.get(searchUrl)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        self.searchName = function (name, callback) {
            var searchUrl = url + '/search/name?name=' + name;
            $http.get(searchUrl)
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


        self.add = function (laboratoryId, deviceTypeId, device, callback) {
            device.deviceType = host + '/deviceType/' + deviceTypeId;
            device.laboratory = host + '/laboratory/' + laboratoryId;
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

        self.examine = function (deviceId, status, callback) {
            self.getById(deviceId, function (device) {
                device.status = status;
                console.log(device);
                $http.put(host + '/device/' + deviceId, device)
                    .then(function success() {
                        if (callback) {
                            callback('ok');
                        }
                    }, function error() {
                        if (callback) {
                            callback('审核错误');
                        }
                    });
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
            getById: self.getById,
            add: self.add,
            examine: self.examine,
            deleteById: self.deleteById,
            searchLaboratory: self.searchLaboratory,
            searchDeviceType: self.searchDeviceType,
            searchName: self.searchName
        };
    });
