angular.module('testApp')
    .service('reserve', function ($http) {
        var self = this;

        var host = 'http://localhost:8080';
        self.submit = function (postData, callback) {
            var url = host + '/reserve';
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
            var url = host + '/reserve';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data._embedded);
                    }
                }, function error(response) {
                    console.log(response);
                });
        };
        return {
            submit: self.submit,
            getAll: self.getAll
        };
    });
