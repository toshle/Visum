/*  TODO
    Images in description to get larger
    Additional info display
    Audio description
*/


var template = [
    '<h2>{title}</h2>',
    '{body}'
].join('');


var assembledTemplate = new Ext.XTemplate(template);


Ext.define('Visum.view.News', {
    extend: 'Ext.Panel',
    xtype: 'newsdetails',
    requires: [
        'Visum.model.News',
        'Ext.data.Store',
        'Visum.store.NewsDetailsStore'
    ],
    config: {
        id: 'newsOverlay',
        title: 'News Details',
        layout: 'vbox',
        scrollable: true,
        height: Ext.Viewport.getWindowHeight(),
        width: Ext.Viewport.getWindowWidth(), //you had Height() here
        centered: true, //add this to center it on screen
        showAnimation: 'slideIn',
        hideAnimation: 'slideOut',
        items: [{
            xtype: 'dataview',
            store: 'NewsDetailsStore',
            scrollable: null,
            styleHtmlContent: true,
            itemTpl: assembledTemplate
        }, {
            docked: 'bottom',
            xtype: 'button',
            id: 'backToHome',
            text: 'Back'
        }]
    }
});