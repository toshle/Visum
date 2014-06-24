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
        /*scrollable: {
            direction: 'vertical',
            directionLock: true
        },*/
        preserveScrollOnRefresh: true,
        minHeight: '570px',
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
                    //scrollable: false,
                    minHeight: '260px',
                    data: [{
                        name: 'Fantastico - Верен приятел'
                    }, {
                        name: 'Национален Дворец на Културата - НДК'
                    }],
                    itemTpl: new Ext.XTemplate('{name} <br><a href="">Read more</a>')
                }]
            }, {
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'News'
                }, {
                    xtype: 'list',
                    //scrollable: false,
                    minHeight: '260px',
                    data: [{
                        name: 'Extremely interesting news straight from the source.'
                    }, {
                        name: 'Doge has visited Sofia! Such news! MUCH information...'
                    }],
                    itemTpl: new Ext.XTemplate('{name} <br><a href="">Read more</a>')
                }]
            }]
        }, /*{
            xtype: 'panel',
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Discussion',
                margin: '5 5 5 5',
            }, {
                xtype: 'dataview',
                scrollable: false,
                minHeight: '150px',
                padding: '5 5 5 5',
                data: [{
                    user: 'toshle',
                    message: 'Yeah, I actually did. It was AWESOME.'
                }, {
                    user: 'Mortimer',
                    message: 'Hey toshle! Did you check out that nice bar I told you about?'
                }],
                itemTpl: new Ext.XTemplate('<a href="">{user}</a>: {message} <br>')
            }, {
                layout: 'hbox',
                xtype: 'panel',
                docked: 'bottom',
                items: [{
                    flex: 10,
                    xtype: 'textfield'
                }, {
                    flex: 1,
                    xtype: 'button',
                    text: 'Send'
                }]
            }]
        }*/]
    }
});