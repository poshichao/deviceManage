angular.module('testApp')
    .service('registrationRequest', function ($http) {
        var self = this;

        var host = 'http://localhost:8080';

        var url = host + '/registrationRequest';
        self.getAll = function (callback) {
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded)
                    }
                }, function error() {
                    console.log(error);
                });

        };

        self.getById = function (requestId, callback) {
            $http.get(url + '/' + requestId)
                .then(function success(response) {
                    console.log(response);
                    if (callback) {
                        callback(response.data)
                    }
                }, function error() {
                    console.log(error);
                });
        };
        self.examine = function (requestId, status, callback) {
            self.getById(requestId, function (request) {
                request.status = status;
                console.log(request);
                $http.put(host + '/user/review/' + requestId, request)
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
        return {
            getAll: self.getAll,
            examine: self.examine,
        };
    });
