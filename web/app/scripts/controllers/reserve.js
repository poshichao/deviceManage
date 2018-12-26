angular.module('testApp')
    .controller('ReserveCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {}
        };

        self.init();
    });
