angular.module('testApp')
    .controller('DeviceCtrl', function ($rootScope, $scope, $location, device, laboratory, deviceType) {
        var self = this;

        self.init = function () {
            device.getAll(function (res) {
                console.log(res);
                $scope.devices = res.devices;
            });

            $scope.search = {
                laboratoryId: '',
                deviceTypeId: '',
                name: ''
            };

            laboratory.getAll(function (res) {
                $scope.laboratories = res.laboratories;
            });
            deviceType.getAll(function (res) {
                $scope.deviceTypes = res.deviceTypes;
            });
        };

        self.toReserve = function (deviceId) {
            $location.path('reserve/' + deviceId);
        };

        self.searchDevice = function () {
            if ($scope.search.laboratoryId != null) {
                device.searchLaboratory($scope.search.laboratoryId, function(res) {
                    $scope.devices = res.devices;
                });
            } else if ($scope.search.deviceTypeId != null) {
                device.searchDeviceType($scope.search.deviceTypeId, function(res) {
                    console.log(res);
                    $scope.devices = res.devices;
                });
            } else if ($scope.search.name != null) {
                device.searchName($scope.search.name, function(res) {
                    console.log(res);
                    $scope.devices = res.devices;
                });
            }

            $rootScope.isSearch = false;
        };

        self.init();

        $scope.searchDevice = self.searchDevice;
        $scope.toReserve = self.toReserve;
    });
