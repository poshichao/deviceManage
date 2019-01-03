angular.module('testApp')
    .controller('ExamineDeviceCtrl', function ($scope, device) {
        var self = this;

        self.init = function () {
            device.getAll(function (res) {
                $scope.devices = res.devices;
            });
        };
        $scope.examineDevice = function (flag) {

            if (flag) {
                if (confirm("确认通过审核吗")) {

                }
            } else {
                if (confirm("确认不通过审核吗")) {

                }
            }
        };
        self.init();
    });
