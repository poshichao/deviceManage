angular.module('testApp')
    .controller('ReserveCtrl', function ($scope, device, reserve, $routeParams, $location) {
        var self = this;

        $scope.reserve = {};

        self.init = function () {

            device.getById($routeParams.deviceId, function (data) {
                $scope.device = data;
            });
        };

        $scope.submitReserve = function (data) {
            $scope.reserve = angular.copy(data);
            let bd = new Date(data.startTime).getTime();
            let ed = new Date(data.endTime).getTime();

            let postData = {
                startTime: bd,
                endTime: ed,
                phone: data.phone
            };

            console.log(postData);
            reserve.submit(postData, function (msg) {
                console.log(msg);
                if (msg === 'ok') {
                    $location.path('/myReserve');
                }
            });

        };

        self.init();
    });
