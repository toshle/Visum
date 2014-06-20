var template = new Ext.XTemplate('User: {username} <br> Age: {age}');


Ext.define('Visum.view.Profile', {
    extend: 'Ext.Container',
    xtype: 'profile',
    requires: [
        'Visum.model.User',
        'Ext.dataview.List',
        'Ext.data.Store',
        'Visum.store.UserStore'
    ],
    config: {
        title: 'Profile',
        layout: 'vbox',
        items: [{
            xtype: 'dataview',
            store: 'UserStore',
            scrollable: null,
            styleHtmlContent: true,
            itemTpl: template
        }]
    }
});