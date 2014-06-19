Ext.define('Visum.view.Profile', {
    extend: 'Ext.List',
    requires: [
        'Visum.model.User',
        'Visum.store.User'
    ],
    xtype: 'profile',
    config: {
        title: 'Profile',
        styleHtmlContent: true,
        scrollable: 'vertical',
        store: 'User',
        itemTpl: '{username}'
    }
});