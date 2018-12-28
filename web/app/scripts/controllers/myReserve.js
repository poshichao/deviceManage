angular.module('testApp')
    .controller('MyReserveCtrl', function ($scope, reserve) {
        var self = this;

        self.init = function () {
            reserve.getAll(function (data) {
                console.log(data);
                $scope.reserves = data.reserves;
            });
        };

        self.init();
    });
