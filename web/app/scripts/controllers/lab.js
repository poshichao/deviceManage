angular.module('testApp')
    .controller('LabCtrl', function ($scope, laboratory) {
        var self = this;

        self.init = function () {
            laboratory.getAll(function(data) {
                $scope.data = data.laboratories;
            });
        };

        self.init();
    });
