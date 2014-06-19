Ext.define('Visum.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
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
            xtype: 'gmap',

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
                xtype: 'augreality'
            }]
        }, {
            title: 'Profile',
            iconCls: 'user',
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Profile'
            }, {
                xtype: 'profile'
            }]
        }]
    }
});