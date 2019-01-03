angular.module('testApp')
    .controller('SearchCtrl', function ($location, $rootScope) {
        var self = this;

        self.init = function () {
            $rootScope.isSearch = true;
            $location.path('device');
        };

        
        self.init();
    });
