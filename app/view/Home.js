Ext.define('Visum.view.Home', {
    extend: 'Ext.Container',
    xtype: 'home',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        title: 'Home',
        styleHtmlContent: true,
        layout: 'vbox',
        items: [{
                xtype: 'panel',
                layout: 'hbox',
                defaults: {
                    xtype: 'panel',
                    flex: 1,
                    minHeight: '300px',
                    margin: '5 5 5 5'
                },
                items: [{
                    items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Latest Points of Interest'
                    }, {
                        xtype: 'list',
                        minHeight: '260px',
                        data: [{
                            name: 'Fantastico - Верен приятел'
                        }, {
                            name: 'Национален Дворец на Културата - НДК'
                        }],
                        itemTpl: new Ext.XTemplate('{name}')
                    }]
                }, {
                    items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'News'
                    }, {
                        xtype: 'list',
                        minHeight: '260px',
                        data: [{
                            name: 'Extremely interesting news straight from the source.'
                        }, {
                            name: 'Doge has visited Sofia! Such news! MUCH information...'
                        }],
                        itemTpl: new Ext.XTemplate('{name}')
                    }]
                }]
            }, {
                xtype: 'panel',
                html: [
                    'WoW<br>',
                    'Is this? REAL?'
                ].join()

            }

        ]
    }
});