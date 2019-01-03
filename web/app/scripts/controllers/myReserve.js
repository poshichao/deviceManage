angular.module('testApp')
    .controller('MyReserveCtrl', function ($scope, reserve, $location) {
        var self = this;

        self.init = function () {
            reserve.getAll(function (data) {
                console.log(data);
                $scope.reserves = data.reserves;
            });
        };

        $scope.commentReserve = function (reserveId) {
            $location.path("commentReserve/" + reserveId);
        };
        $scope.finishReserve = function (reserveId) {
            if (confirm("确认完成预约吗")) {
                reserve.finish(reserveId, function (msg) {
                    if (msg === 'ok') {
                        self.init();
                    } else {
                        alert(msg);
                    }
                });
            }
        };
        $scope.cancelReserve = function (reserveId) {
            if (confirm("确认取消预约吗")) {
                reserve.deleteById(reserveId, function (msg) {
                    if (msg === 'ok') {
                        self.init();
                    } else {
                        alert(msg);
                    }
                });
            }
        };
        self.init();
    });
