Ext.define('Visum.store.LatestPoisStore', {
  extend: 'Ext.data.Store',
  alias: 'store.LatestPoisStore',
  requires: [
    'Visum.model.Poi',
  ],
  config: {
    autoLoad: true,
    model: 'Visum.model.Poi',
    proxy: {
      type: 'jsonp',
      useDefaultXhrHeader: false,
      //url: 'app/data/users.json',
      url: 'http://192.168.133.4:3000/latest',
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