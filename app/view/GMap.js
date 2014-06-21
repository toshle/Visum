Ext.define("Visum.view.GMap", {
    extend: "Ext.Map",
    xtype: 'gmap',
    requires: [
        'Visum.store.PoiStore'
    ],
    config: {
        scroll: false,
        title: 'Map',
        iconCls: 'maps',
        useCurrentLocation: true,
        mapOptions: {
            zoom: 10,
            //marker: true,
            navigationControl: false
        },
        listeners: {
            maprender: function(comp, map) {
                var store = Ext.getStore("PoiStore");
                var markers = [];
                var me = this;
                store.load(function() {
                    store.each(function(record, id) {
                        var lat = record.get('lat');
                        var lon = record.get('lon');
                        var latlng = new google.maps.LatLng(lat, lon);
                        var mark = new google.maps.Marker({
                            map: me.getMap(),
                            position: latlng,
                            title: record.get('name'),
                            animation: google.maps.Animation.DROP,
                            draggable: false
                        });
                        mark.info = new google.maps.InfoWindow({
                            content: '<b>Description:</b> ' + record.get('desc')
                        });
                        google.maps.event.addListener(mark, 'click', function() {
                            mark.info.open(mark.map, mark);
                        });
                    });
                });
                /*
                var geo = comp.getGeo();
                new google.maps.Marker({
                    map: this.getMap(),
                    position: new google.maps.LatLng(geo.getLatitude(), geo.getLongitude()),
                    title: 'Drag Marker To New Position',
                    animation: google.maps.Animation.DROP,
                    draggable: true
                });*/
                new google.maps.Marker({
                    map: this.getMap(),
                    position: this.getMap().getCenter(),
                    title: "Me",
                    animation: google.maps.Animation.DROP,
                    draggable: false,
                    icon: "http://192.168.133.4/map-dot-green.png"
                });
            }
        }

    }
});