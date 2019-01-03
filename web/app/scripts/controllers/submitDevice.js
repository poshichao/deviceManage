angular.module('testApp')
    .controller('SubmitDeviceCtrl', function ($scope, deviceType, device) {
        var self = this;

        self.init = function () {
            $scope.device = {
                deviceTypeId: '',
                name: '',
            };
            deviceType.getAll(function (res) {
                $scope.deviceTypes = res.deviceTypes;
            });

        };
        $scope.addDevice = function () {
            if ($scope.device.deviceType === '') {
                alert("请选择仪器类别");
            } else if ($scope.device.name.length < 1) {
                alert("请输入仪器名称");
            } else {
                var postData = {
                    name: $scope.device.name
                };
                device.add($scope.device.deviceTypeId, postData, function (msg) {
                    console.log($scope.device);
                    if (msg === 'ok') {
                        alert("添加成功");
                        self.init();
                    } else {
                        alert(msg);
                    }
                });
            }
        };
        self.init();
    });
