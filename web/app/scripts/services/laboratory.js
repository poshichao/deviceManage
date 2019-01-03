'use strict';

/**
 * @ngdoc service
 * @name testApp.laboratory
 * @description
 * # laboratory
 * Service in the testApp.
 */
angular.module('testApp')
    .service('laboratory', function ($http) {
        var self = this;

        self.getAll = function (callback) {
            var url = 'http://localhost:8080/laboratory';

            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error() {
                    console.log(error);
                });
        };
        self.getById = function (laboratoryId, callback) {
            var url = 'http://localhost:8080/laboratory/' + laboratoryId;
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log("错误");
                });
        };
        self.add = function (laboratory, callback) {
            var url = 'http://localhost:8080/laboratory';

            $http.post(url, laboratory)
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

        self.deleteById = function (laboratoryId, callback) {
            var url = 'http://localhost:8080/laboratory/' + laboratoryId;
            $http.delete(url)
                .then(function success() {
                    if (callback) {
                        callback("ok");
                    }
                }, function error() {
                    if (callback) {
                        callback("删除失败，该单位存在关联数据");
                    }
                });
        };
        return {
            add: self.add,
            getAll: self.getAll,
            delete: self.deleteById,
            getById: self.getById,
        };
    });
