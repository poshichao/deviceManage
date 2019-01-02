angular.module('testApp')
    .controller('RegisterCtrl', function ($scope, device, reserve, $routeParams, $location) {
        var self = this;

        $scope.register = {};

        self.init = function () {

        };

        $scope.submitRegister = function (data) {
            $scope.register = angular.copy(data);
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
