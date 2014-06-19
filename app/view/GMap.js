Ext.define("Visum.view.GMap", {
    extend : "Ext.Map",
    xtype  : 'gmap',
    config : {
        scroll: false,
        title              : 'Map',
        iconCls            : 'maps',
        useCurrentLocation : true,
        mapOptions         : {
            zoom              : 16,
            marker            : true,
            navigationControl : false
        },
        listeners          : {
            maprender : function(comp, map) {
                var geo = comp.getGeo();

                new google.maps.Marker({
                    map       : this.getMap(),
                    position  : new google.maps.LatLng(geo.getLatitude(), geo.getLongitude()),
                    title     : 'Drag Marker To New Position',
                    animation : google.maps.Animation.DROP,
                    draggable : true
                });
            }
        }

    }
});