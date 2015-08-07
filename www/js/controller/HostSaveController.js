/**
 * Created by gefan on 2015/8/7.
 */

angular.module('controller.hostSave', [
    'app.localKey',
    'service.settings',
    'app.utils'
])
    .controller('HostSaveCtrl', function ($rootScope, $scope, $http, $localKey, $localStorage, $loading, $alert, $settingsValues) {
        $scope.form = {
            remIP: true,
            host: $localStorage.get($localKey.host)
        };
        $scope.saveHost = function () {
            var $host = $scope.form.host;
            var $remIP = $scope.form.remIP;
            if (!$host || $host.trim() == '') {
                $alert.showAlert('请输入服务器IP！', '注意')
            } else {
                $loading.show('正在测试服务器的连通性...');
                $http.get('http://' + $host + '/api/system/sayHello').then(function (res) {
                    if (res.data == 'success') {
                        if ($remIP){
                            $localStorage.set($localKey.host, $host);
                            $settingsValues.settings.host = $host;
                        }
                        $alert.showAlert('设置成功！');
                        $rootScope.hostModal.hide();
                    }
                    $loading.hide();
                }, function (response) {
                    $loading.hide();
                    $alert.showAlert('连接失败, 请重新输入！');
                });
            }
        };

        $scope.modalHide = function () {
            $rootScope.hostModal.hide();
        }

    })