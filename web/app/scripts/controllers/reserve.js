angular.module('testApp')
    .controller('ReserveCtrl', function ($scope, device, $routeParams) {
        var self = this;

        $scope.reserve = {};

        self.init = function () {

            device.getById($routeParams.deviceId, function (data) {
                $scope.device = data;
            });
        };

        $scope.submitReserve = function (reserve) {
            $scope.reserve = angular.copy(reserve);
            let bd = new Date(reserve.begin_time).getTime() / 1000;
            let ed = new Date(reserve.end_time).getTime() / 1000;

            let post_data = {
                begin_time: bd,
                end_time: ed,
                mobile: reserve.mobile
            };

            console.log(post_data);
        };

        self.init();
    });
