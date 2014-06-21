Ext.define('Visum.model.Poi', {
  extend: 'Ext.data.Model',
  requires: [
    'Ext.data.proxy.Rest',
    'Ext.data.proxy.JsonP'
  ],
  config: {
    fields: ['_id', 'name', 'desc', 'lat', 'lon']
  }
});