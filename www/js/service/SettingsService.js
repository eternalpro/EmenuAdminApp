/**
 * Created by gefan on 2015/8/7.
 */
angular.module('service.settings', [
    'ionic',
    'app.localKey',
    'app.utils'
])
    .factory('$hostModal', function ($ionicModal, $rootScope) {
        return {
            show: function () {
                $ionicModal.fromTemplateUrl('host-modal.html', {
                    scope: $rootScope,
                    animation: 'slide-in-up',
                    backdropClickToClose: false,
                    hardwareBackButtonClose: false,
                    focusFirstInput: true
                }).then(function (modal) {
                    $rootScope.hostModal = modal;
                    modal.show();
                });
            }
        }
    })
    .factory('$settingsValues', function ($localStorage, $localKey) {
        return {
            settings: {
                host: $localStorage.get($localKey.host)
            }
        };
    })