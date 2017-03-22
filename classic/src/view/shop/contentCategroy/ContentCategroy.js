Ext.define('Admin.view.shop.contentCategroy.ContentCategroy', {
    extend: 'Ext.panel.Panel',
    //xtype: 'item',
    id: 'contentCategroyPannel',
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
            xtype: 'shop.contentCategroyGrid'
        }
    ]
});
