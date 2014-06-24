Ext.define('Visum.store.SettingsStore', {
  extend: 'Ext.data.Store',
  alias: 'store.SettingsStore',
  requires: [
    'Visum.model.Settings',
  ],
  config: {
    autoLoad: true,
    model: 'Visum.model.Settings',
    proxy: {
      type: 'localstorage',
      reader: {
        type: 'json'
      }
    }
  }
});