angular.module('testApp')
    .controller('RegisterCtrl', function ($scope, register, $location) {
        var self = this;

        $scope.register = {};

        self.init = function () {

        };

        $scope.submitRegister = function (data) {
            $scope.register = angular.copy(data);

        };

        self.init();
    });
