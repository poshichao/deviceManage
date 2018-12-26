angular.module('testApp')
    .controller('DeviceCtrl', function ($scope, $location) {
        var self = this;

        self.init = function () {
            $scope.data = {
                devices: [{
                    id: 1,
                    name: "场发射扫描电子显微镜",
                    desc: "化学研究所"
                }, {
                    id: 2,
                    name: "X射线衍射仪",
                    desc: "化学研究所"
                }, {
                    id: 3,
                    name: "步进式光刻机",
                    desc: "半导体研究所"
                }, {
                    id: 4,
                    name: "600MHz超导核磁共振仪",
                    desc: "植物研究所"
                }
                ]
            }
        };

        $scope.toReserve = function (deviceId) {
            $location.path('reserve/' + deviceId);
        };

        self.init();

    });
