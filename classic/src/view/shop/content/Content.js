Ext.define('Admin.view.shop.content.Content', {
    extend: 'Ext.panel.Panel',
    //xtype: 'item',
    id: 'contentPannel',
    requires: [
        Ext.window.Toast
    ],
    //collapsed: false,
    collapsible: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    header : {
        hidden : true
    },
    margin: '20 20 0 20',
    items: [
        {
            xtype: 'shop.contentGrid'
        }
    ]
});
