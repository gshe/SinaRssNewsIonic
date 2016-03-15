/**
 * Created by admin on 16/3/15.
 */

angular.module('starter.controllers')
  .controller('ChannelCtrl', function ($scope, $stateParams, RssManager) {
    $scope.channelName = $stateParams.id;

    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.loadSubChannels();
    });

    $scope.loadSubChannels = function () {
      $scope.subChannels = RssManager.getChannelById($scope.channelName);
    };

    $scope.loadNews=function(newsId){
      $scope.news = RssManager.getNewsById(newsId);
    };

  });
