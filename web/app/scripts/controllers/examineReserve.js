angular.module('testApp')
    .controller('ExamineReserveCtrl', function ($scope, reserve) {
        var self = this;


        self.init = function () {
            reserve.getAll(function (data) {
                console.log(data);
                $scope.reserves = data.reserves;
            });
        };
        $scope.examineReserve = function (reserveId, flag) {
            if (flag) {
                if (confirm("确认通过审核吗")) {
                    reserve.examine(reserveId, 1, function (msg) {
                        if (msg === 'ok') {
                            self.init();
                        } else {
                            alert(msg);
                        }
                    });
                }
            } else {
                if (confirm("确认不通过审核吗")) {
                    reserve.examine(reserveId, -1, function (msg) {
                        if (msg === 'ok') {
                            self.init();
                        } else {
                            alert(msg);
                        }
                    });
                }
            }
        };

        self.init();
    });
