/**
 * Created by admin on 16/3/15.
 */

angular.module('starter.services')
  .factory('RssManager', function ($resource, $log, ENV) {
    var channelResource = $resource(ENV.domain + ENV.api + 'news/latest', {}, {
      query: {
        method: 'get',
        dataType: 'JSONP',
        isArray: true,
        timeout: 20000
      }
    });

    return {
      getAllChannels: function () {
        return channelResource.query(function (response) {
          $log.debug(response);
        });
      }
    };
  });
