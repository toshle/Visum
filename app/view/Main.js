Ext.define('Visum.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [{
            title: 'Home',
            iconCls: 'home',

            styleHtmlContent: true,
            scrollable: true,

            items: {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Home tab'
            },

            html: [
                "Welcome to Visum."
            ].join("")
        }, {
            xtype: 'myMap',

            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Map'
            }]
        }, {
            title: 'Aug Reality',
            iconCls: 'eye',

            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Augmented Reality'
            }, {
                styleHtmlContent: true,
                html: [
                    "Aug Reality"
                ].join("")
            }]
        }, {
            title: 'Profile',
            iconCls: 'user',

            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'User Profile'
            }, {
                styleHtmlContent: true,
                html: [
                    "Welcome to your profile"
                ].join("")
            }]
        }]
    }
});