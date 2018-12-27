angular.module('testApp')
    .controller('ReserveCtrl', function ($scope) {
        var self = this;

        $scope.reserve = {};

        self.init = function () {
            $scope.data = {};
        };

        $scope.submitReserve = function (reserve) {
            $scope.reserve = angular.copy(reserve);
            let bd = new Date(reserve.begin_time).getTime()/1000;
            let ed = new Date(reserve.end_time).getTime()/1000;

            let post_data = {
                begin_time:bd,
                end_time:ed,
                mobile:reserve.mobile
            };

            console.log(post_data);
        };

        self.init();
    });
