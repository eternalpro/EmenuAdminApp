/**
 * Created by gefan on 2015/8/7.
 */
angular.module('controller.leftSlide', ['ionic'])
    .controller('LeftSlideCtrl', function ($rootScope, $scope, $ionicSideMenuDelegate, $ionicViewSwitcher, $state) {
        $scope.homeClick = function () {
            $ionicViewSwitcher.nextDirection('no');
            $state.go('home');
        };
        $scope.settingsClick = function () {
            $ionicViewSwitcher.nextDirection('no');
            $state.go('settings');
        };
    });