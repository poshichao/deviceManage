angular.module('testApp')
    .controller('ReserveCtrl', function ($scope, device, reserve, $routeParams, $location) {
        var self = this;
        var reg = new RegExp("^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\\d{8}$");

        $scope.reserve = {
            startTime: null,
            endTime: null,
            phone: ''
        };

        self.init = function () {
            device.getById($routeParams.deviceId, function (device) {
                $scope.device = device;
            });
        };

        $scope.submitReserve = function () {
            if (null == $scope.reserve.startTime) {
                alert("请选择租用开始时间");
            } else if (null == $scope.reserve.endTime) {
                alert("请选择租用结束时间");
            } else if ($scope.reserve.phone === '') {
                alert("请输入负责人手机号码");
            } else if (!reg.test($scope.reserve.phone)) {
                alert("手机号码格式不正确");
            }
            else {
                let st = new Date($scope.reserve.startTime).getTime();
                let et = new Date($scope.reserve.endTime).getTime();
                if (st < new Date().getTime()) {
                    alert("租用开始时间不得小于当前时间");
                } else if (et < st) {
                    alert("租用结束时间不得小于开始时间");
                } else {
                    let postData = {
                        // device: $scope.device,
                        startTime: st,
                        endTime: et,
                        phone: $scope.reserve.phone

                    };
                    console.log(postData);
                    reserve.submit(postData, function (msg) {
                        console.log(msg);
                        if (msg === 'ok') {
                            $location.path('/myReserve');
                        }
                    });
                }

            }

        };

        self.init();
    });
