var template = new Ext.XTemplate('User: {username} <br> Age: {age}');
var set = JSON.parse(localStorage.getItem('settings'));
if (set.offlinemode) {
    template = new Ext.XTemplate('{username}');
}
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
        data: [{
            message: 'You are offline.'
        }],
        items: [{
            xtype: 'dataview',
            store: 'UserStore',
            scrollable: null,
            styleHtmlContent: true,
            itemTpl: template,
            listeners: {
                initialize: function() {
                    var set = JSON.parse(localStorage.getItem('settings'));
                    if (set.offlinemode) {
                        this.setData({
                            username: 'You are offline.'
                        });
                    }
                }
            }
        }]
    }
});