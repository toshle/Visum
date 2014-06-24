Ext.define('Visum.model.News', {
  extend: 'Ext.data.Model',
  requires: [
    'Ext.data.proxy.Rest',
    'Ext.data.proxy.JsonP'
  ],
  config: {
    fields: ['_id', 'id','title', 'body']
  }
});