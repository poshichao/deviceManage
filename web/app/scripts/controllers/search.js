angular.module('testApp')
    .controller('SearchCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {
                reserves: []
            };
        };

        self.init();
    });