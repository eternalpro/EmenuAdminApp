/**
 * Created by gefan on 2015/8/7.
 */
/**
 * ��ҳ����
 */
angular.module('controller.home', ['ionic'])
    .controller('HomeCtrl', function ($scope, $http, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    });
