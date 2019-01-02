angular.module('testApp')
    .controller('SearchCtrl', function ($scope, laboratory, deviceType) {
        var self = this;

        self.init = function () {
            $scope.search = {
                laboratoryId: 0,
                deviceTypeId: 0,
                deviceName: ""
            };

            laboratory.getAll(function (res) {
                $scope.laboratories = res.laboratories;
            });
            deviceType.getAll(function (res) {
                $scope.deviceTypes = res.deviceTypes;
            });
        };
        $scope.searchDevice = function () {
            console.log($scope.search);
        };
        self.init();
    });
