angular.module('testApp')
    .controller('DeviceCtrl', function ($scope, $location, device) {
        var self = this;

        self.init = function () {
            device.getAll(function (res) {
                console.log(res);
                $scope.devices = res.devices;
            });
        };

        $scope.toReserve = function (deviceId) {
            $location.path('reserve/' + deviceId);
        };

        self.init();

    });
