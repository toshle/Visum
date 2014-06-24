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
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Home'
            }, {
                xtype: 'home'
            }]
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
            //xtype: 'profile',
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Profile'
            }, {
                xtype: 'profile'
            }]
        }, {
            title: 'Settings',
            iconCls: 'settings',
            //xtype: 'profile',
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            }, {
                xtype: 'settings'
            }]
        }]
    }
});