angular.module('testApp')
    .controller('ManageLaboratoryCtrl', function ($scope, laboratory) {
        var self = this;

        self.init = function () {
            laboratory.getAll(function (res) {
                $scope.laboratories = res.laboratories;
            });
        };

        $scope.deleteLaboratory = function (laboratoryId) {
            if (confirm("确认要删除该单位吗")) {
                laboratory.delete(laboratoryId, function (msg) {
                    if (msg === 'ok') {
                        self.init();
                    } else {
                        alert(msg);
                    }
                });
            }
        };
        self.init();
    });
