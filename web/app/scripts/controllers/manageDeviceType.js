angular.module('testApp')
    .controller('ManageDeviceTypeCtrl', function ($scope, deviceType) {
        var self = this;

        self.init = function () {
            deviceType.getAll(function (data) {
                console.log(data);
                $scope.deviceTypes = data.deviceTypes;
                $scope.deviceType = {
                    name: ""
                };
            });

        };
        $scope.addDeviceType = function () {
            if ($scope.deviceType.length < 1) {
                alert("请输入仪器类别名称");
            } else {
                console.log($scope.deviceType);
                deviceType.add($scope.deviceType, function (msg) {
                    if (msg === 'ok') {
                        self.init();
                    } else {
                        alert(msg);
                    }
                })
            }
        };
        $scope.deleteDeviceType = function (deviceTypeId) {
            if (confirm("确认要删除该仪器类别吗")) {
                deviceType.deleteById(deviceTypeId, function (msg) {
                    if (msg === 'ok') {
                        self.init();
                    } else {
                        alert(msg);
                    }
                });
            }
        };
        self.init();
    });
