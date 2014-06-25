var template = new Ext.XTemplate('User: {username} <br> Age: {age}');


Ext.define('Visum.view.Settings', {
    extend: 'Ext.Container',
    xtype: 'settings',
    requires: [
        'Visum.model.Settings',
        'Ext.dataview.List',
        'Ext.form.Panel',
        'Ext.field.Toggle',
        'Ext.data.Store',
        'Visum.store.SettingsStore',
        'Visum.store.LatestPoisStore',
        'Visum.store.NewsStore',
        'Visum.store.PoiStore'
    ],
    config: {
        title: 'Settings',
        layout: 'fit',
        items: [{
            xtype: 'dataview',
            flex: 1,
            height: '100px',
            store: 'SettingsStore',
            scrollable: null,
            styleHtmlContent: true,
            html: [
                ''
            ].join('')
            //itemTpl: template
        }, {
            xtype: 'formpanel',
            id: 'form',
            store: 'SettingsStore',
            scrollable: false,
            flex: 1,
            height: '300px',
            items: [{
                    xtype: 'togglefield',
                    label: 'Offline mode',
                    labelWrap: true,
                    name: 'offlinemode'
                }, {
                    xtype: 'togglefield',
                    label: 'Autoplay audio descriptions of nearby POIs',
                    labelWrap: true,
                    name: 'autoplayaudio'
                }, {
                    xtype: 'togglefield',
                    label: 'Enable notifications',
                    labelWrap: true,
                    name: 'notifications'
                }, {
                    xtype: 'toolbar',
                    layout: {
                        pack: 'center'
                    },
                    ui: 'plain',
                    items: [{
                        xtype: 'button',
                        name: 'localsave',
                        id: 'localsave',
                        text: 'Save available data to local storage'
                    }]
                }
                /*{
                xtype: 'textareafield',
                label: 'About You',
                labelWrap: true,
                name: 'aboutyou',
                placeHolder: 'Tel me about yourself'
            },*/

            ],
            listeners: [{
                fn: 'onFormSave',
                event: 'tap',
                delegate: '#localsave'
            }],
            onFormSave: function(button, e, options) {

                var formObj = button.up('formpanel');
                var formData = formObj.getValues();

                var set = {
                    offlinemode: formData.offlinemode,
                    autoplayaudio: formData.autoplayaudio,
                    notifications: formData.notifications
                };
                var pois = Ext.getStore('PoiStore');
                var news = Ext.getStore('NewsStore');
                var latestPois = Ext.getStore('LatestPoisStore');
                if (formData.offlinemode) {
                    pois.load(function(records) {
                        var rec = [];
                        records.forEach(function(entry) {
                            rec.push({
                                '_id': entry.get('_id'),
                                'id': entry.get('id'),
                                'name': entry.get('name'),
                                'desc': entry.get('desc'),
                                'lat': entry.get('lat'),
                                'lon': entry.get('lon'),
                                'dist': entry.get('dist'),
                                'images': entry.get('images'),
                                'additional_info': entry.get('additional_info'),
                                'videos': entry.get('videos'),
                                'audio': entry.get('audio')
                            });
                        });
                        localStorage.setItem('pois', JSON.stringify(rec));
                    });

                    news.load(function(records) {
                        var rec = [];
                        records.forEach(function(entry) {
                            rec.push({
                                '_id': entry.get('_id'),
                                'id': entry.get('id'),
                                'title': entry.get('title'),
                                'body': entry.get('body')
                            });
                        });
                        localStorage.setItem('news', JSON.stringify(rec));
                    });

                    latestPois.load(function(records) {
                        var rec = [];
                        records.forEach(function(entry) {
                            rec.push({
                                '_id': entry.get('_id'),
                                'id': entry.get('id'),
                                'name': entry.get('name'),
                                'desc': entry.get('desc'),
                                'lat': entry.get('lat'),
                                'lon': entry.get('lon'),
                                'dist': entry.get('dist'),
                                'images': entry.get('images'),
                                'additional_info': entry.get('additional_info'),
                                'videos': entry.get('videos'),
                                'audio': entry.get('audio')
                            });
                        });
                        localStorage.setItem('latestPois', JSON.stringify(rec));
                    });
                }

                localStorage.setItem('settings', JSON.stringify(set));
                Ext.Msg.alert('Success', 'Settings are saved');

            }
        }],
        listeners: {
            painted: function() {
                var form = this.child('#form');
                form.setValues(JSON.parse(localStorage.getItem('settings')));
            }
        }

    }
});