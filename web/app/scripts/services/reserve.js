angular.module('testApp')
    .service('reserve', function ($http) {
        var self = this;

        self.submit = function (postData, callback) {
            var url = 'http://localhost:8080/reserve';

            $http.post(url, postData)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log(error);
                });
        };

        return {
            submit: self.submit
        };
    });
