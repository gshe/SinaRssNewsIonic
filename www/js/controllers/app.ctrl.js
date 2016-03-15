/**
 * Created by admin on 16/3/15.
 */
angular.module('starter.controllers')
  .controller('AppCtrl', function ($scope, $stateParams, RssManager) {
    var allChannels = RssManager.getAllChannels();
  });
