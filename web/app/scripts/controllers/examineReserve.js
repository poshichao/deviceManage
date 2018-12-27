angular.module('testApp')
    .controller('ExamineReserveCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {};
        };

        self.init();
    });
