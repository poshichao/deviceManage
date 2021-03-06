angular.module('testApp')
    .controller('UserCtrl', function ($scope, $route, user) {
        var self = this;

        self.init = function () {
            self.refresh();
        };

        self.refresh = function () {
            user.getAll(function (res) {
                console.log(res);
                $scope.users = res.users;
                $scope.offset = res.users.generalUsers.length;
            });
        };

        $scope.deleteUser = function (userType, userId) {
            if (confirm("确认删除" + userType + "用户" + userId + "吗")) {
                user.deleteById(userType, userId, function (res) {
                    if (res === 'ok') {
                        self.refresh();
                    }
                });
            }
        };

        self.init();
    });
