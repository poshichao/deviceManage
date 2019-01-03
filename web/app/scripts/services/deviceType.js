'use strict';

angular.module('testApp')
    .service('deviceType', function ($http) {
        var self = this;

        self.getAll = function (callback) {
            var url = 'http://localhost:8080/deviceType';

            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error() {
                    console.log(error);
                });
        };
        self.getById = function (deviceTypeId,callback) {
            var url = 'http://localhost:8080/deviceType/'+deviceTypeId;

            $http.get(url)
                .then(function success(response) {
                    console.log(response);
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log(error);
                });
        };
        self.add = function (deviceType, callback) {
            var url = 'http://localhost:8080/deviceType';

            $http.post(url, deviceType)
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

        self.deleteById = function (deviceTypeId, callback) {
            var url = 'http://localhost:8080/deviceType/' + deviceTypeId;
            $http.delete(url)
                .then(function success() {
                    if (callback) {
                        callback("ok");
                    }
                }, function error() {
                    if (callback) {
                        callback("删除失败，该仪器类别可能存在关联数据");
                    }
                });
        };

        return {
            getAll: self.getAll,
            add: self.add,
            deleteById: self.deleteById
        };
    });
