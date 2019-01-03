angular.module('testApp')
    .service('search', function ($http) {
        var self = this;

        self.search = function (callback) {
            var url = 'http://localhost:8080/search';

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
            search: self.search
        };
    });
