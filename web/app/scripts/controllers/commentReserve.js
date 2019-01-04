angular.module('testApp')
    .controller('CommentReserveCtrl', function ($scope, reserve, $routeParams, $location) {
        var self = this;

        self.init = function () {
            $scope.remark = '';
        };

        $scope.commentReserve = function () {
            reserve.comment($routeParams.reserveId, $scope.comment, function (msg) {
                if (msg === 'ok') {
                    alert("评价成功");
                    $location.path('myReserve');
                } else {
                    alert(msg);
                }
            });
        };

        self.init();
    });
