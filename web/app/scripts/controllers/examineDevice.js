angular.module('testApp')
    .controller('ExamineDeviceCtrl', function ($scope, device) {
        var self = this;

        self.init = function () {
            device.getAll(function (res) {
                $scope.devices = res.devices;
            });
        };
        $scope.examineDevice = function (deviceId, flag) {
            if (flag) {
                if (confirm("确认通过审核吗")) {
                    device.examine(deviceId, 1, function (msg) {
                        if (msg === 'ok') {
                            self.init();
                        } else {
                            alert(msg);
                        }
                    });
                }
            } else {
                if (confirm("确认不通过审核吗")) {
                    device.examine(deviceId, -1, function (msg) {
                        if (msg === 'ok') {
                            self.init();
                        } else {
                            alert(msg);
                        }
                    });
                }
            }
        };
        self.init();
    });
