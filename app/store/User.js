Ext.define('Visum.store.User', {
  extend: 'Ext.data.Store',
  requires: [
    'Visum.model.User',
    'Ext.data.proxy.Rest',
    'Ext.data.proxy.JsonP'
  ],
  config: {
    autoLoad: true,
/*    model: 'Visum.model.User',
    data: [{
      username: 'Cowper'
    }, {
      username: 'Everett'
    }, {
      username: 'University'
    }, {
      username: 'Forest'
    }],*/
    proxy: {
      type: 'jsonp',
      useDefaultXhrHeader: false,
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