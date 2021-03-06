/*  TODO
    Notify on close POIs (10-20m)
*/

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
        id: 'map',
        useCurrentLocation: true,
        mapOptions: {
            zoom: 10,
            //marker: true,
            navigationControl: false
        },
        listeners: {
            tap: {
                fn: function(event, el) {
                    var me = this;
                    var id = el.getAttribute('id')
                    this.fireEvent('firePoiEvent', me, id, this.getMap());
                },
                element: 'element',
                delegate: '.poi'
            },
            maprender: function(comp, map) {
                var myLat = this.getMap().getCenter().A;
                var myLon = this.getMap().getCenter().k;
                dist = function(record) {
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

                offlineDist = function(record) {
                    var latitude1 = record.lat;
                    var longitude1 = record.lon;
                    var degrees_to_radians = Math.PI / 180.0;
                    var phi1 = (90.0 - latitude1) * degrees_to_radians;
                    var phi2 = (90.0 - myLat) * degrees_to_radians;
                    var theta1 = longitude1 * degrees_to_radians;
                    var theta2 = myLon * degrees_to_radians;
                    var cos = (Math.sin(phi1) * Math.sin(phi2) * Math.cos(theta1 - theta2) + Math.cos(phi1) * Math.cos(phi2));
                    var arc = Math.acos(cos);
                    return Math.floor((arc * 6373));
                };
                //console.log(myLat);
                //console.log(myLon);
                var store = Ext.getStore("PoiStore");

                var me = this;
                var settings = {
                    offlinemode: 0
                };
                if (localStorage.getItem('settings')) {
                    settings = JSON.parse(localStorage.getItem('settings'));
                }
                if (settings['offlinemode']) {
                    var data = JSON.parse(localStorage.getItem('pois'));
                    data = data.filter(function(entry) {
                        return offlineDist(entry) < 5000;
                    });
                    store.setData(data);
                    data.forEach(function(record) {
                        var lat = record.lat;
                        var lon = record.lon;
                        var latlng = new google.maps.LatLng(lat, lon);
                        var mark = new google.maps.Marker({
                            map: me.getMap(),
                            position: latlng,
                            title: record.name,
                            animation: google.maps.Animation.DROP,
                            draggable: false
                        });
                        mark.info = new google.maps.InfoWindow({
                            content: [
                                '<img class="mapImage" style="margin: 5px; width: 80px; height: 80px; float: left;" src="' + record.images[0] + '"/>',
                                '<b>Description:</b> ' + record.desc,
                                '<b>Distance:</b> ' + offlineDist(record),
                                '<button class="poi" id="' + record.id + '" type="button">Read more</button>'
                            ].join('<br>')
                        });
                        google.maps.event.addListener(mark, 'click', function() {
                            mark.info.open(mark.map, mark);
                        });
                    });
                } else {
                    store.getProxy().setExtraParams({
                        'myLat': myLat,
                        'myLon': myLon,
                        'radius': 5000
                    });
                    var markers = [];
                    store.load(function() {
                        store.each(function(record, id) {
                            markers.push(record);
                        });
                        markers.forEach(function(record) {
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
                                content: [
                                    '<img class="mapImage" style="margin: 5px; width: 80px; height: 80px; float: left;" src="' + record.get('images')[0] + '"/>',
                                    '<b>Description:</b> ' + record.get('desc'),
                                    '<b>Distance:</b> ' + dist(record),
                                    '<button class="poi" id="' + record.get('id') + '" type="button">Read more</button>'
                                ].join('<br>')
                            });
                            google.maps.event.addListener(mark, 'click', function() {
                                mark.info.open(mark.map, mark);
                            });
                        });
                    });
                }
                /*
                var geo = comp.getGeo();
                new google.maps.Marker({
                    map: this.getMap(),
                    position: new google.maps.LatLng(geo.getLatitude(), geo.getLongitude()),
                    title: 'Drag Marker To New Position',
                    animation: google.maps.Animation.DROP,
                    draggable: true
                });*/
                var myMark = new google.maps.Marker({
                    map: this.getMap(),
                    position: this.getMap().getCenter(),
                    title: "Me",
                    animation: google.maps.Animation.DROP,
                    draggable: false,
                    icon: "http://192.168.133.4/map-dot-green.png"
                });
                myMark.info = new google.maps.InfoWindow({
                    content: [
                        'Me: ',
                        this.getMap().getCenter()
                    ].join('')
                });
                google.maps.event.addListener(myMark, 'click', function() {
                    myMark.info.open(myMark.map, myMark);
                });
            }
        }
    }
});