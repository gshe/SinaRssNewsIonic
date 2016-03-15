/**
 * Created by admin on 16/3/15.
 */
angular.module('starter.controllers')
  .controller('NewsCtrl', function ($scope, $stateParams, $timeout, RssManager) {
    $scope.newsId = $stateParams.id;

    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.loadNews($scope.newsId);
    });

    $scope.loadNews = function (newsId) {
      $scope.news = RssManager.getNewsById(newsId);
    };

    $scope.onRefresh = function () {
      $scope.news = RssManager.getNewsById($scope.newsId);
      $timeout(function(){
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000);
    };

    $scope.onShareNews = function(){

    };

  });
