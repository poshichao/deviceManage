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

        return {
            getAll: self.getAll
        };
    });
