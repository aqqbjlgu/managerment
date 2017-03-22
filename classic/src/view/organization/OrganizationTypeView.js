Ext.define('Admin.view.organization.OrganizationTypeView', {
    extend: 'Ext.panel.Panel',
    //xtype: 'item',
    id: 'organizationTypePannel',
    requires: [
        Ext.window.Toast
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    header : {
        hidden : true
    },
    initComponent: function() {
        var organizationTypeGrid = Ext.create('Admin.view.organization.OrganizationTypeGrid',{
            id: 'orgTypeGrid',
            reference: 'orgTypeGrid',
            selType: 'rowmodel',
            bbar: {
                xtype: 'pagingtoolbar',
                store: 'organizationTypeStore',
                displayInfo: true,
                plugins: new Ext.ux.ProgressBarPager()
            }
        });
        organizationTypeGrid.on("itemdblclick", function( view, record, item, index, e, eOpts ){
            organizationTypeGrid.getController( ).onItemdblclick(view, record, item, index, e, eOpts);
        }, organizationTypeGrid);
        Ext.apply(this, {
            items: [
                {
                    xtype: organizationTypeGrid
                }
            ]
        });
        this.callParent();
    }
});
