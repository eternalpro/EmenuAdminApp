/**
 * Created by gefan on 2015/8/7.
 */
/**
 * …Ë÷√“≥√Ê
 */
angular.module('app.settings', ['ionic'])
    .controller('SettingsCtrl', function ($scope, $http, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    });