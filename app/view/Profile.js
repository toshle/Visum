Ext.define('Visum.view.Profile', {
    extend: 'Ext.Container',
    xtype: 'profile',
    config: {
        items: [{
            title: 'Profile',
            styleHtmlContent: true,
            html: [
                "Yay!<br>",
                "New Profile page..."
            ].join("")
        }]
    }
});