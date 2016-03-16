/**
 * Created by admin on 16/3/16.
 */
angular.module('starter.services')
  .factory('Setting', function ($log, Storage) {
    var settingKey = 'setting';
    var settingData = Storage.get(settingKey) || {
        saverMode: true,
        lightMode: false
      };

    return {
      getData: function () {
        return settingData;
      },
      setData: function (data) {
        settingData = data;
        Storage.set(settingKey, settingData);
      }
    };
  });
