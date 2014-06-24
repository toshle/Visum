/*  TODO
    Images in description to get larger
    Additional info display
    Audio description
*/


var template = [
    '<h2>{name}</h2>',
    'Distance: {dist}m<br>',
    '<b>Description:</b> {desc}<br>',
    'Latitude: {lat}<br>',
    'Longitude: {lon}<br>',
    'Images:<br>',
    '<tpl for="images">',
    '<img src="{.}" style="margin: 5px; width: 80px; height: 80px;" />',
    '</tpl><br>',
    'Videos:<br>',
    '<tpl for="videos">',
    '<video controls><source src="{.}" type="video/webm"></video>',
    '</tpl>'
].join('');


var assembledTemplate = new Ext.XTemplate(template);


Ext.define('Visum.view.Poi', {
    extend: 'Ext.Panel',
    xtype: 'poidetails',
    requires: [
        'Visum.model.Poi',
        'Ext.data.Store',
        'Visum.store.PoiDetailsStore'
    ],
    config: {
        id: 'poiOverlay',
        title: 'Poi Details',
        layout: 'vbox',
        scrollable: true,
        height: Ext.Viewport.getWindowHeight(),
        width: Ext.Viewport.getWindowWidth(), //you had Height() here
        centered: true, //add this to center it on screen
        showAnimation: 'slideIn',
        hideAnimation: 'slideOut',
        items: [{
            xtype: 'dataview',
            store: 'PoiDetailsStore',
            scrollable: null,
            styleHtmlContent: true,
            itemTpl: assembledTemplate
        }, {
            docked: 'bottom',
            xtype: 'button',
            id: 'backToMap',
            text: 'Back'
        }]
        /*,
        listeners: {
            initialize: function() {

            }
        }*/
    }
});