/**
 * 主页内容
 */
angular.module('controller.home', [
    'ionic',
    'ngCordova',
    'app.localKey',
    'app.utils'
])
    .controller('HomeCtrl', function ($scope, $http, $ionicSideMenuDelegate, $localStorage, $localKey, $getUrl, $cordovaToast) {
        $scope.overview = {
            todayResult: 0,
            todayOrderCount: 0,
            rateOfTableTurn: 0,
            monthResult: 0,
            popFoods: []
        };

        /**
         * 刷新数据监听器
         */
        $scope.$on('reLoadHomeDataHandler', function () {
            loadData();
        });

        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        var loadData = function(){
            $http.get('http://' + $localStorage.get($localKey.host) + $getUrl.home , {cache: false}).then(function(res){
                $scope.overview = res.data
                console.log('data loaded!');
            }, function(res){
                $cordovaToast.showShortCenter('数据加载失败，请检查服务器地址设置是否正确!')
            });

        }

        $scope.pullLoadData = function(){
            loadData();
            $scope.$broadcast('scroll.refreshComplete');
        }
        $scope.reloadData = function(){
            $scope.refreshing = true;
            $scope.pullLoadData();
        }
        loadData();
    });
