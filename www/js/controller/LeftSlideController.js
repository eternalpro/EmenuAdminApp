/**
 * Created by gefan on 2015/8/7.
 */
/**
 * ×ó²à»¬¶¯controller
 */
angular.module('app.leftSlide', ['ionic'])
    .controller('LeftSlideCtrl', function ($rootScope, $scope, $ionicSideMenuDelegate, $ionicViewSwitcher, $state) {
        $scope.homeClick = function () {
            $ionicViewSwitcher.nextDirection('no');
            $state.go('home');
            $rootScope.leftSide = 'home';
        };
        $scope.settingsClick = function () {
            $ionicViewSwitcher.nextDirection('no');
            $state.go('settings');
            $rootScope.leftSide = 'settings';
        };
    });