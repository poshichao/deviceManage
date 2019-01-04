angular.module('testApp')
    .controller('CommentCtrl', function ($scope,reserve) {
        var self = this;

        self.init = function () {
            reserve.getAll(function (data) {
                console.log(data);
                $scope.reserves = data.reserves;
            });
        };

        self.init();
    });
