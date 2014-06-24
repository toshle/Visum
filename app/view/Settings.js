var template = new Ext.XTemplate('User: {username} <br> Age: {age}');


Ext.define('Visum.view.Settings', {
    extend: 'Ext.Container',
    xtype: 'settings',
    requires: [
        'Visum.model.Settings',
        'Ext.dataview.List',
        'Ext.data.Store',
        'Visum.store.SettingsStore'
    ],
    config: {
        title: 'Settings',
        layout: 'vbox',
        items: [{
            xtype: 'dataview',
            store: 'SettingsStore',
            scrollable: null,
            styleHtmlContent: true,
            html: [
                'wow'
            ].join('')
            //itemTpl: template
        }]
    }
});