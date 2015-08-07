/**
 * Created by gefan on 2015/8/7.
 */
/**
 * …Ë÷√“≥√Ê
 */
angular.module('controller.settings', [
    'ionic',
    'service.settings',
    'app.localKey',
    'app.utils'
])
    .controller('SettingsCtrl', function ($rootScope, $scope, $http, $ionicSideMenuDelegate, $localStorage, $localKey, $hostModal, $settingsValues) {
        $scope.settings = $settingsValues.settings;
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.setupServer = function(){
            $hostModal.show();
        }
    });