angular.module('testApp')
    .service('reserve', function ($http) {
        var self = this;

        var host = 'http://localhost:8080';
        var url = host + '/reserve';
        self.submit = function (postData, callback) {
            $http.post(url, postData)
                .then(function success() {
                    if (callback) {
                        callback("ok");
                    }
                }, function error(response) {
                    console.log(response);
                });
        };

        self.getAll = function (callback) {
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error(response) {
                    console.log(response);
                });
        };

        self.getById = function (reserveId, callback) {
            $http.get(url + '/' + reserveId)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log(response);
                });
        };
        self.examine = function (reserveId, status, callback) {
            self.getById(reserveId, function (reserve) {
                reserve.status = status;
                console.log(reserve);
                $http.put(host + '/reserve/' + reserveId, reserve)
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

        self.remark = function (reserve, callback) {
            $http.put(url, reserve)
                .then(function success(response) {
                    console.log(response);
                    if (callback) {
                    }
                }, function error(response) {
                    console.log(response);
                });
        };
        return {
            submit: self.submit,
            getAll: self.getAll,
            examine: self.examine,
            remark: self.remark
        };
    });
