// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('app', [
    'ionic',
    'app.localKey',
    'app.utils',
    'app.home',
    'app.hostSave',
    'app.leftSlide',
    'app.settings'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            cache: false,
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        });
        $stateProvider.state('settings', {
            url: '/settings',
            cache: false,
            templateUrl: 'settings.html',
            controller: 'SettingsCtrl'
        });
        $urlRouterProvider.otherwise('/home');
    })
    .run(function ($ionicPlatform, $rootScope) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $rootScope.leftSide = 'home';
    })
    .directive('onFinishRenderFilters', function ($rootScope, $localStorage, $ionicModal, $localKey) {
        return {
            restrict: 'A',
            link: function($scope, element, attr) {
                if(!$localStorage.get($localKey.host)){
                    $ionicModal.fromTemplateUrl('host-modal.html', {
                        scope: $scope,
                        animation: 'slide-in-up',
                        backdropClickToClose: false,
                        hardwareBackButtonClose: false,
                        focusFirstInput: true
                    }).then(function(modal) {
                        $rootScope.hostModal = modal;
                        modal.show();
                    });
                }
            }
        };
    });


