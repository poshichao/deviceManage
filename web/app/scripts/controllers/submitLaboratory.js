angular.module('testApp')
    .controller('SubmitLaboratoryCtrl', function ($scope, laboratory) {
        var self = this;
        self.init = function () {
            $scope.laboratory = {
                name: "",
                introduction: ""
            };
        };
        $scope.submitLaboratory = function () {
            if ($scope.laboratory.name.length < 1) {
                alert("请输入单位名称");
            }
            else if ($scope.laboratory.introduction.length < 1) {
                alert("请输入单位简介");
            } else {
                console.log($scope.laboratory);
                laboratory.add($scope.laboratory, function (res) {
                    if (res === 'ok') {
                        alert("添加成功");
                        self.init();
                    }
                });
            }
        };
        self.init();
    });
