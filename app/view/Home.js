Ext.define('Visum.view.Home', {
    extend: 'Ext.Container',
    xtype: 'home',
    config: {
        items: [{
            title: 'Home',
            styleHtmlContent: true,
            html: [
                "Home PAAAAAAAAAAAGE<br>",
                "So HARDCORE!....>!"
            ].join("")
        }]
    }
});