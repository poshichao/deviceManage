angular.module('testApp')
    .controller('SubmitDeviceCtrl', function ($scope, deviceType, device) {
        var self = this;

        self.init = function () {
            $scope.device = {
                deviceType: null,
                name: "",
            };
            deviceType.getAll(function (res) {
                $scope.deviceTypes = res.deviceTypes;
            });

        };
        $scope.addDevice = function () {
            if ($scope.device.deviceType == null) {
                alert("请选择仪器类别");
            } else if ($scope.device.name.length < 1) {
                alert("请输入仪器名称");
            } else {
                device.add($scope.device, function (msg) {
                    $scope.device.deviceType = JSON.parse($scope.device.deviceType);
                    console.log($scope.device);
                    if (msg === 'ok') {
                        alert("添加成功");
                    } else {
                        alert(msg);
                    }
                });
            }
        };
        self.init();
    });
