/**
 * Created by admin on 16/3/15.
 */
angular.module('starter.config', [])
  .constant('ENV', {
    domain: 'http://news-at.zhihu.com',
    api: '/api/4/'
  }
)
  .constant('Channels', [{
    id: 1,
    title: '新闻中心'
  }, {
    id: 2,
    title: '博客频道'
  }, {
    id: 3,
    title: '体育频道'
  }, {
    id: 4,
    title: '财经频道'
  }])
;

