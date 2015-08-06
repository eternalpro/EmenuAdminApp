// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        cache: 'false',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    });
    $stateProvider.state('settings', {
        url: '/settings',
        cache: 'false',
        templateUrl: 'settings.html',
        controller: 'SettingsCtrl'
    });
    $urlRouterProvider.otherwise('/home');
});

app.run(function ($ionicPlatform, $rootScope) {
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
});

app.controller('HomeCtrl', function ($scope, $http, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
});
app.controller('SettingsCtrl', function ($scope, $http, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
});
app.controller('LeftSideCtrl', function($rootScope, $scope, $ionicSideMenuDelegate,$ionicViewSwitcher, $state){
    $scope.homeClick = function(){
        $ionicViewSwitcher.nextDirection('no');
        $state.go('home');
        $rootScope.leftSide='home';
    }
    $scope.settingsClick = function(){
        $ionicViewSwitcher.nextDirection('no');
        $state.go('settings');
        $rootScope.leftSide='settings';
    }
});