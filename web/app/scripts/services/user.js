angular.module('testApp')
    .service('user', function ($http) {
        var self = this;

        var host = 'http://localhost:8080';

        self.getAll = function (callback) {
            var users = {};
            $http.get(host + '/generalUser')
                .then(function success(response) {
                    users.generalUsers = response.data._embedded.generalUsers;
                    $http.get(host + '/laboratoryUser')
                        .then(function success(response) {
                            users.laboratoryUsers = response.data._embedded.laboratoryUsers;
                            if (callback) {
                                callback({
                                    users: users
                                });
                            }
                        }, function error() {
                            console.log(error);
                        });
                }, function error() {
                    console.log(error);
                });

        };

        self.deleteById = function (userType, id, callback) {
            $http.delete(host + '/' + userType + '/' + id)
                .then(function success() {
                    if (callback) {
                        callback("ok");
                    }
                }, function error() {
                    console.log(error);
                });
        };

        self.login = function (login, callback) {
            $http.post(host + '/user/login?name=' + login.name + '&password=' + login.password, login)
                .then(function success(response) {
                    if (callback) {
                        callback("ok");
                    }
                }, function error(error) {
                    console.log(error);
                    if (callback) {
                        callback("账号和密码不匹配");
                    }
                });
        };
        self.register = function (userType, register, callback) {
            $http.post(host + '/user/' + userType, register)
                .then(function success(response) {
                    console.log(response);
                    // if (callback) {
                    //     callback("ok");
                    // }
                }, function error() {
                    console.log(error);
                });
        };
        return {
            getAll: self.getAll,
            deleteById: self.deleteById,
            login: self.login,
            register: self.register
        };
    });
