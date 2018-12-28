angular.module('testApp')
    .controller('DeviceTypeCtrl', function ($scope, deviceType) {
        var self = this;

        self.init = function () {
            deviceType.getAll(function (data) {
                console.log(data);
                $scope.deviceTypes = data;
            });
        };

        self.init();
    });
