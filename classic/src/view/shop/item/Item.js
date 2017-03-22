Ext.define('Admin.view.shop.item.Item', {
    extend: 'Ext.panel.Panel',
    //xtype: 'item',
    id: 'itemPannel',
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
            xtype: 'shop.itemForm'
        },
        {
            xtype: 'shop.itemGrid'
        }
    ]
});
