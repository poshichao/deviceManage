angular.module('testApp')
    .controller('ExamineRegisterCtrl', function ($scope, registrationRequest) {
        var self = this;


        self.init = function () {
            registrationRequest.getAll(function (res) {
                console.log(res);
                $scope.registrationRequests = res.registrationRequests;
            });
        };
        $scope.examineRegister = function (requestId, flag) {
            if (flag) {
                if (confirm("确认通过审核吗")) {
                    registrationRequest.examine(requestId, 1, function (msg) {
                        if (msg === 'ok') {
                            self.init();
                        } else {
                            alert(msg);
                        }
                    });
                }
            } else {
                if (confirm("确认不通过审核吗")) {
                    registrationRequest.examine(requestId, -1, function (msg) {
                        if (msg === 'ok') {
                            self.init();
                        } else {
                            alert(msg);
                        }
                    });
                }
            }
        };

        self.init();
    });
