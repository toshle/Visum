Ext.define('Visum.store.UserStore', {
  extend: 'Ext.data.Store',
  alias: 'store.UserStore',
  requires: [
    'Visum.model.User'
  ],
  config: {
    autoLoad: true,
    model: 'Visum.model.User',
    proxy: {
      type: 'jsonp',
      useDefaultXhrHeader: false,
      //url: 'app/data/users.json',
      url: 'http://192.168.133.4:3000/users',
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