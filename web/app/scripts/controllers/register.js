angular.module('testApp')
    .controller('RegisterCtrl', function ($scope, user, laboratory, $location) {
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        var self = this;


        self.init = function () {
            $scope.register = {
                laboratory: null,
                name: "",
                email: "",
                password: "",
                confirm: "",
                userType: "general"
            };

            laboratory.getAll(function (res) {
                $scope.laboratories = res.laboratories;
            });
        };

        $scope.userRegister = function () {

            if ($scope.register.name.length === 0) {
                alert("请输入用户名");
            } else if ($scope.register.name.length < 3) {
                alert("用户名长度不得小于3位");
            } else if ($scope.register.email.length === 0) {
                alert("请输入您的邮箱");
            } else if (!reg.test($scope.register.email)) {
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
                let register = {
                    name: $scope.register.name,
                    email: $scope.register.email,
                    password: $scope.register.password
                };

                if ($scope.register.userType === 'laboratory') {
                    register.laboratory = JSON.parse($scope.register.laboratory);
                }

                user.register($scope.register.userType, register, function (msg) {
                    if (msg === 'ok') {
                        self.init();
                        if ($scope.register.userType === 'general') {
                            alert('注册成功，请登录');
                            $location.path('login');
                        } else {
                            alert('注册成功，请等待审核');
                        }
                    } else {
                        alert(msg);
                    }
                });
            }
        };

        self.init();
    });
