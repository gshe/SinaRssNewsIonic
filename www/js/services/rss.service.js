/**
 * Created by admin on 16/3/15.
 */

angular.module('starter.services', [])
  .factory('RssManager', function ($log, ENV, Channels) {

    return {
      getAllChannels: function () {
        $log.debug(Channels);
        return Channels;
      },
      getChannelById: function (id) {
        return [{id: 1, title: id + '--新闻要闻'},
          {id: 2, title: id + '--国内要闻'},
          {id: 3, title: id + '--国际要闻'},
          {id: 4, title: id + '--社会新闻'},
          {id: 5, title: id + '--时政要闻'},
          {id: 6, title: id + '--港澳台新闻'}
        ];
      },
      getNewsById:function(newsId){
        return {
          images: [
            "http://pic4.zhimg.com/487425196168f358303ae5282c844da3.jpg"
          ],
          type: 0,
          id: 8005416,
          ga_prefix: "031516",
          title: "看完这段历史，发现「点石成金」是全世界同一个梦想"
        }
      }
    };
  });
