angular.module('testApp')
    .controller('RegisterCtrl', function ($scope, user, $location) {
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        var self = this;


        self.init = function () {
            $scope.register = {
                name: "",
                eMail: "",
                password: "",
                confirm: "",
                userType: "general"
            };
        };

        $scope.userRegister = function () {

            if ($scope.register.name.length === 0) {
                alert("请输入用户名");
            } else if ($scope.register.name.length < 3) {
                alert("用户名长度不得小于3位");
            } else if ($scope.register.eMail.length === 0) {
                alert("请输入您的邮箱");
            } else if (!reg.test($scope.register.eMail)) {
                alert("输入的邮箱格式错误");
            } else if ($scope.register.password.length === 0) {
                alert("请输入密码");
            } else if ($scope.register.password.length < 3) {
                alert("密码长度不得小于6位");
            } else if ($scope.register.confirm.length === 0) {
                alert("请输入确认密码");
            } else if ($scope.register.confirm !== $scope.register.password) {
                alert("两次输入的密码不一致");
            } else {
                user.register($scope.register.userType, {
                    name: $scope.register.name,
                    eMail: $scope.register.eMail,
                    password: $scope.register.password,
                }, function (msg) {
                    alert(msg);
                });
            }
        };

        self.init();
    });