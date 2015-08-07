/**
 * Created by gefan on 2015/8/7.
 */
/**
 * Ö÷Ò³ÄÚÈÝ
 */
angular.module('app.home', ['ionic'])
    .controller('HomeCtrl', function ($scope, $http, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    });
