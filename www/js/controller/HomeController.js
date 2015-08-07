/**
 * Created by gefan on 2015/8/7.
 */
/**
 * Ö÷Ò³ÄÚÈÝ
 */
angular.module('controller.home', [
    'ionic',
    'app.localKey',
    'app.utils'
])
    .controller('HomeCtrl', function ($scope, $http, $ionicSideMenuDelegate, $localStorage, $localKey) {
        $scope.overview = {
            todayResult: 0,
            todayOrderCount: 0,
            rateOfTableTurn: 0,
            monthResult: 0,
            popFoods: []
        };


        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        var loadData = function(){
            var $host = $localStorage.get($localKey.host);
            $http.get('http://' + $host + '/api/admin').then(function(res){
                console.log(res.data);
                $scope.overview = res.data
            }, function(res){

            });
        }

        loadData();
    });
