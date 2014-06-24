Ext.define('Visum.store.PoiDetailsStore', {
  extend: 'Ext.data.Store',
  alias: 'store.PoiDetailsStore',
  requires: [
    'Visum.model.Poi'
  ],
  config: {
    autoLoad: true,
    model: 'Visum.model.Poi',
    proxy: {
      type: 'jsonp',
      useDefaultXhrHeader: false,
      //url: 'app/data/users.json',
      url: 'http://192.168.133.4:3000/poi',
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