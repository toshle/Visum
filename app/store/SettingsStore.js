Ext.define('Visum.store.SettingsStore', {
  extend: 'Ext.data.Store',
  alias: 'store.SettingsStore',
  requires: [
    'Visum.model.Settings',
    'Ext.data.proxy.LocalStorage'
  ],
  config: {
    autoLoad: true,
    model: 'Visum.model.Settings',
    proxy: {
      type: 'localstorage',
      id: 'settings'
    }
  }
});