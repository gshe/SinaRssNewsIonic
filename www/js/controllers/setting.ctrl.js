/**
 * Created by admin on 16/3/16.
 */
angular.module('starter.controllers')
  .controller('SettingCtrl', function ($scope, $log, Setting, ENV) {
    $scope.setting = Setting.getData();
    $scope.ENV = ENV;
    // $scope.author = ENV.author;
    // $scope.authorEmail = ENV.authorEmail;

    $scope.$on('$stateChangeStart', function () {
      $log.debug('$stateChangeStart');
      $log.debug($scope.setting);
      Setting.setData($scope.setting);
    });
  });
