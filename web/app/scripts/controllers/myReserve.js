angular.module('testApp')
    .controller('MyReserveCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {};
        };

        self.init();
    });
