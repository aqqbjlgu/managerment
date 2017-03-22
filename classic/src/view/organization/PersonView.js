Ext.define('Admin.view.organization.PersonView', {
    extend: 'Ext.panel.Panel',
    //xtype: 'item',
    id: 'personView',
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
            xtype: 'organization.personGrid'
        }
    ]
});
