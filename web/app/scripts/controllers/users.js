angular.module('testApp')
    .controller('UsersCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {
                users: [{
                    id: 1,
                    type: "普通用户",
                    name: "张三",
                    username: "a123456",
                    mobile: "13011111111"
                }, {
                    id: 2,
                    type: "管理单位",
                    name: "李四",
                    username: "b123456",
                    mobile: "13022211111"
                }]
            };
        };

        $scope.deleteUser = function (userId) {
            confirm("确认删除用户" + userId + "吗");
        };

        self.init();
    });
