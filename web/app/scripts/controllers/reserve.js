angular.module('testApp')
    .controller('ReserveCtrl', function ($scope, device, reserve, $routeParams) {
        var self = this;

        $scope.reserve = {};

        self.init = function () {

            device.getById($routeParams.deviceId, function (data) {
                $scope.device = data;
            });
        };

        $scope.submitReserve = function (data) {
            $scope.reserve = angular.copy(data);
            let bd = new Date(reserve.startTime).getTime() / 1000;
            let ed = new Date(reserve.endTime).getTime() / 1000;

            let postData = {
                startTime: bd,
                endTime: ed,
                phone: reserve.phone
            };
            console.log(postData);
            reserve.submit(postData, function (res) {
                console.log(res);
            });

        };

        self.init();
    });
