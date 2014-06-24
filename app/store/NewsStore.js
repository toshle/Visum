Ext.define('Visum.store.NewsStore', {
  extend: 'Ext.data.Store',
  alias: 'store.NewsStore',
  requires: [
    'Visum.model.News',
  ],
  config: {
    autoLoad: true,
    model: 'Visum.model.News',
    proxy: {
      type: 'jsonp',
      useDefaultXhrHeader: false,
      //url: 'app/data/users.json',
      url: 'http://192.168.133.4:3000/news',
      noCache: false,
      limitParam: false,
      enablePagingParams: false,
      startParam: false,
      reader: {
        type: 'json'
      }
    }
  }
});