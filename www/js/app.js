// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.config'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.channel', {
        url: '/channel/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/channel.html',
            controller: 'ChannelCtrl'
          }
        }
      })
      .state('app.news', {
        url: '/news/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/news.html',
            controller: 'NewsCtrl'
          }
        }
      })
      .state('app.setting', {
        url: '/setting',
        views: {
          'menuContent': {
            templateUrl: 'templates/setting.html',
            controller: 'SettingCtrl'
          }
        }
      })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/channel/1');
  });

angular.module('starter.controllers', ['starter.services']);

angular.module('starter.services', ['xml', 'ngResource', 'starter.config']);
