Ext.define('Visum.controller.WindowController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['GMap', 'Poi', 'Main', 'Home', 'News'],
        models: ['Poi', 'News'],
        refs: {
            back: 'button#backToMap',
            backToHome: 'button#backToHome'
        },
        control: {
            'gmap': {
                firePoiEvent: 'viewPoi'
            },
            'home': {
                fireNewsEvent: 'viewNews',
                firePoiEvent: 'viewPoi'
            },
            back: {
                tap: 'backToMap'
            },
            backToHome: {
                tap: 'backToHome'
            }
        }
    },
    viewNews: function(button, id) {
        var det = Ext.Viewport.child('#newsOverlay');
        if (!det) {
            det = Ext.create('Visum.view.News');
            Ext.Viewport.add(det);
        }
        var store = Ext.getStore("NewsDetailsStore");
        var settings = {
            offlinemode: 0
        };
        if (localStorage.getItem('settings')) {
            settings = JSON.parse(localStorage.getItem('settings'));
        }
        if (settings['offlinemode']) {
            var data = JSON.parse(localStorage.getItem('news'));

            console.log(data);
            console.log(id);
            var data = data.find(function(element, index, array) {
                return element.id == id;
            });
            console.log(data);
            store.setData(data);
        } else {
            store.getProxy().setExtraParams({
                'nid': id
            });
            store.load();
        }
        det.show();
    },

    viewPoi: function(button, id, map) {

        var myLat = null;
        var myLon = null;
        navigator.geolocation.getCurrentPosition(GetLocation);

        function GetLocation(location) {
            myLat = location.coords.latitude;
            myLon = location.coords.longitude;
            console.log(myLat);
            console.log(myLon);
        }
        /*var myLat = map.getCenter().A;
        var myLon = map.getCenter().k;*/
        result = function(record) {
            var latitude1 = record.get('lat');
            var longitude1 = record.get('lon');
            var degrees_to_radians = Math.PI / 180.0;
            var phi1 = (90.0 - latitude1) * degrees_to_radians;
            var phi2 = (90.0 - myLat) * degrees_to_radians;
            var theta1 = longitude1 * degrees_to_radians;
            var theta2 = myLon * degrees_to_radians;
            var cos = (Math.sin(phi1) * Math.sin(phi2) * Math.cos(theta1 - theta2) + Math.cos(phi1) * Math.cos(phi2));
            var arc = Math.acos(cos);
            //console.log((arc * 6373));
            return Math.floor((arc * 6373));
        };
        var det = Ext.Viewport.child('#poiOverlay');
        if (!det) {
            det = Ext.create('Visum.view.Poi');
            Ext.Viewport.add(det);
        }
        var store = Ext.getStore("PoiDetailsStore");

        var settings = {
            offlinemode: 0
        };
        if (localStorage.getItem('settings')) {
            settings = JSON.parse(localStorage.getItem('settings'));
        }
        if (settings['offlinemode']) {
            var data = JSON.parse(localStorage.getItem('pois'));
            var data = data.find(function(element, index, array) {
                return element.id == id;
            });
            store.setData(data);
        } else {
            store.getProxy().setExtraParams({
                'pid': id
            });
            store.load(function() {
                var index = store.find('id', id);
                var record = store.getAt(index);
                //console.log(record);
                record.set('dist', result(record));
            });
        }
        /*function(record) {
            //console.log("loaded");
            //console.log(record[0].get('name'));
            det.child('dataview').setData({
                id: id,
                name: record[0].get('name'),
                desc: record[0].get('desc'),
                lat: record[0].get('lat'),
                lon: record[0].get('lon'),
                dist: record[0].get('dist')
            });
        });*/
        det.show();
    },
    backToMap: function(e) {
        Ext.Viewport.child('#poiOverlay').hide();
    },
    backToHome: function(e) {
        Ext.Viewport.child('#newsOverlay').hide();
    }
});