/**
 * Created by gefan on 2015/8/7.
 */
angular.module('app.utils', ['ionic'])
    .factory('$localStorage', ['$window', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }])
    .factory('$loading', function ($ionicLoading) {
        return {
            show: function (message) {
                $ionicLoading.show({
                    template: message
                });
            },
            hide: function(){
                $ionicLoading.hide();
            }
        }
    })
    .factory('$alert', function ($ionicPopup) {
        return {
            showAlert: function (template, title) {
                $ionicPopup.alert({
                    title: title,
                    template: template
                });
            }
        }
    })