angular.module('testApp')
    .controller('LabCtrl', function ($scope) {
        var self = this;

        self.init = function () {
            $scope.data = {
                labs: [{
                    id: 1,
                    name: "化学研究所",
                    desc: "化学研究所简介"
                }, {
                    id: 2,
                    name: "半导体研究所",
                    desc: "半导体研究所简介"
                }, {
                    id: 3,
                    name: "植物研究所",
                    desc: "植物研究所简介"
                }, {
                    id: 4,
                    name: "高能物理研究所",
                    desc: "高能物理研究所简介"
                }
                ]
            }
        };

        self.init();
    });
