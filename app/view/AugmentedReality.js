Ext.define('Visum.view.AugmentedReality', {
    extend: 'Ext.Container',
    xtype: 'augreality',
    config: {
        items: [{
            title: 'Augmented Reality',
            styleHtmlContent: true,
            html: [
                "Augmented Reality<br>",
                "So HARDCORE!....>!"
            ].join("")
        }]
    }
});