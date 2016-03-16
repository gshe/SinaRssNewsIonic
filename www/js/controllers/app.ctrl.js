/**
 * Created by admin on 16/3/15.
 */
angular.module('starter.controllers')
  .controller('AppCtrl', function ($scope, $stateParams, $log, RssManager) {

    $scope.$on('$ionicView.beforeEnter', function() {
      $scope.loadChannels();
    });

    $scope.loadChannels = function(){
      $scope.channels = RssManager.getAllChannels();
      $log.debug($scope.channels);
    };

    $scope.loadRssChannels = function(){
      RssManager.getRssChannels().$promise.then(function(response){
        console.log(response);
      });
    };
  });
