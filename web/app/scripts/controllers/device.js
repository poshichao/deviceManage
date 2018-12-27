angular.module('testApp')
    .controller('DeviceCtrl', function ($scope, $location, device) {
        var self = this;

        self.init = function () {
            device.getAll(function(data) {
                $scope.data = data;
            });
        };

        $scope.toReserve = function (deviceId) {
            $location.path('reserve/' + deviceId);
        };

        self.init();

    });
