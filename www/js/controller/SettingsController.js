/**
 * Created by gefan on 2015/8/7.
 */
/**
 * 设置页面
 */
angular.module('controller.settings', [
    'ionic',
    'service.settings',
    'app.localKey',
    'app.utils'
])
    .controller('SettingsCtrl', function ($rootScope, $scope,$alert, $http, $ionicSideMenuDelegate, $localStorage, $localKey, $hostModal, $settingsValues) {
        $scope.settings = $settingsValues.settings;
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.setupServer = function(){
            $hostModal.show();
        }
        $scope.setupAbout = function(){
            $alert.showMessage('EternalPro 出品!', '关于')
        }
    });