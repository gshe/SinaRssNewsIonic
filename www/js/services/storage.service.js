/**
 * Created by admin on 16/3/16.
 */
angular.module('starter.services')
  .factory('Storage', function ($log, ENV) {
    return {
      set: function (sKey, data) {
        return window.localStorage.setItem(sKey, data);
      },
      get: function (sKey) {
        return window.localStorage.getItem(sKey);
      },
      remove: function (sKey) {
        return window.localStorage.removeItem(sKey);
      }

    }
  });
