angular.module('testApp')
    .controller('UsersCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {
                users:[{}]
            };
        };

        self.init();
    });
