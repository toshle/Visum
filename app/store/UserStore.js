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
      type: 'ajax',
      useDefaultXhrHeader: false,
      url: 'app/data/users.json',
      //url: 'http://192.168.133.4:3000/users',
      noCache: false,
      limitParam: false,
      enablePagingParams: false,
      startParam: false,
      reader: {
        type: 'json'
      },
      success: function(result) {
        console.log("Res: " + result.data);
      },
      failure: function() {
        Ext.Msg.alert('Error', 'There was an error retrieving the weather.');
      }
    }
  }
});