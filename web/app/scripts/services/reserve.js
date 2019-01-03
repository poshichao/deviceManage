angular.module('testApp')
    .service('reserve', function ($http) {
        var self = this;

        var host = 'http://localhost:8080';
        var url = host + '/reserve';
        /**
         * 提交用户预约
         * @param userId 普通用户id
         * @param deviceId 要预约的设备id
         * @param postData 上传的预约细节
         * @param callback 回调
         */
        self.submit = function (userId, deviceId, postData, callback) {
            postData.generalUser = host + '/generalUser/' + userId;
            postData.device = host + '/device/' + deviceId;
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
