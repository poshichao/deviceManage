angular.module('testApp')
    .controller('ManageDeviceCtrl', function ($scope, device) {
        var self = this;

        self.init = function () {
            device.getAll(function (res) {
                $scope.devices = res.devices;
            });
        };
        $scope.deleteDevice = function (deviceId) {
            if (confirm("确认要删除该仪器吗")) {
                device.deleteById(deviceId, function (msg) {
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
