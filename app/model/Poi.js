Ext.define('Visum.model.Poi', {
  extend: 'Ext.data.Model',
  requires: [
    'Ext.data.proxy.Rest',
    'Ext.data.proxy.JsonP'
  ],
  config: {
    fields: ['_id', 'id', 'name', 'desc', 'lat', 'lon', 'dist', 'images', 'additional_info', 'videos', 'audio']
  }
});