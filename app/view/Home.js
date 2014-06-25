/*  TODO
    Fix distance calculation
*/
Ext.define('Visum.view.Home', {
    extend: 'Ext.Container',
    xtype: 'home',
    requires: [
        'Ext.dataview.List',
        'Visum.model.Poi',
        'Visum.model.News',
        'Ext.data.Store',
        'Ext.device.Geolocation',
        'Visum.store.LatestPoisStore',
        'Visum.store.NewsStore'
    ],
    config: {
        title: 'Home',
        styleHtmlContent: true,
        layout: 'vbox',
        /*scrollable: {
            direction: 'vertical',
            directionLock: true
        },*/
        listeners: {
            tap: {
                fn: function(event, el) {
                    /*var map = Ext.create('Visum.view.GMap', {
                        useCurrentLocation: true
                    });*/
                    var me = this;
                    var id = el.getAttribute('id');
                    console.log(id);
                    if (el.getAttribute('class') === 'poi modal') {
                        this.fireEvent('firePoiEvent', me, id, null);
                    } else if (el.getAttribute('class') === 'news modal') {
                        this.fireEvent('fireNewsEvent', me, id);
                    }
                    //map.destroy();
                },
                element: 'element',
                delegate: '.modal'
            },
        },
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
                        store: 'LatestPoisStore',
                        minHeight: '260px',
                        itemTpl: new Ext.XTemplate('{name} - {desc}<br><button class="poi modal" id="{id}" type="button">Read more</button>'),
                        listeners: {
                            painted: function() {
                                var settings = {
                                    offlinemode: 0
                                };
                                if (localStorage.getItem('settings')) {
                                    settings = JSON.parse(localStorage.getItem('settings'));
                                }
                                if (settings['offlinemode']) {
                                    var store = Ext.getStore('LatestPoisStore');
                                    var data = JSON.parse(localStorage.getItem('latestPois'));
                                    store.setData(data);
                                }

                            }
                        }
                    }]
                }, {
                    items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'News'
                    }, {
                        xtype: 'list',
                        //scrollable: false,
                        store: 'NewsStore',
                        minHeight: '260px',
                        itemTpl: new Ext.XTemplate('{title} <br><button class="news modal" id="{id}" type="button">Read more</button>'),
                        listeners: {
                            painted: function() {
                                var settings = {
                                    offlinemode: 0
                                };
                                if (localStorage.getItem('settings')) {
                                    settings = JSON.parse(localStorage.getItem('settings'));
                                }
                                console.log(settings);
                                if (settings['offlinemode']) {
                                    var store = Ext.getStore('NewsStore');
                                    var data = JSON.parse(localStorage.getItem('news'));
                                    store.setData(data);
                                }

                            }
                        }
                    }]
                }]
            },
            /*{
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
        }*/
        ]
    }
});