/**
 * Created by gefan on 2015/8/7.
 */

angular.module('app.hostSave', [
    'app.localKey',
    'app.utils'
])
    .controller('HostSaveCtrl', function ($rootScope, $scope, $http, $localKey, $localStorage, $loading, $alert, $ionicModal) {
        $scope.saveHost = function (form) {
            if(!form || !form.host || form.host.trim() == '') {
                $alert.showAlert('请输入服务器IP！', '注意')
            }else{
                $loading.show('正在测试服务器的连通性...')
                $http.get('http://' + form.host + '/api/system/sayHello').then(function(res){
                    if(res.data == 'success'){
                        $localStorage.set($localKey.host, form.host);
                        $alert.showAlert('设置成功！');
                        $rootScope.hostModal.hide();
                    }
                    $loading.hide();
                }, function(response) {
                    $loading.hide();
                    $alert.showAlert('连接失败, 请重新输入！');
                });
            }
        }

    })