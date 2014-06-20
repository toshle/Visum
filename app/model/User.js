Ext.define('Visum.model.User', {
  extend: 'Ext.data.Model',
  requires: [
    'Ext.data.proxy.Rest',
    'Ext.data.proxy.JsonP'
  ],
  config: {
    fields: ['_id', 'id', 'username', 'age']
  }
});