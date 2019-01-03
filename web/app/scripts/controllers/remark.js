angular.module('testApp')
    .controller('RemarkCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {};
        };

        self.init();
    });
