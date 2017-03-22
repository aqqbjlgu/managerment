Ext.define('Admin.view.organization.OrganizationTypeRuleView', {
    extend: 'Ext.panel.Panel',
    //xtype: 'item',
    id: 'organizationTypeRulePannel',
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
    //controller: 'organizationTypeRuleController',
    initComponent: function() {
        var organizationTypeGrid = Ext.create('Admin.view.organization.OrganizationTypeGrid',{
            id: 'organizationTypeGrid',
            selType: 'rowmodel',
            bbar: {
                xtype: 'pagingtoolbar',
                store: 'organizationTypeStore',
                displayInfo: true,
                plugins: new Ext.ux.ProgressBarPager()
            }
        });
        if(organizationTypeGrid.down('toolbar')){
            organizationTypeGrid.removeDocked(organizationTypeGrid.down('toolbar'),true);
        }
        organizationTypeGrid.getStore().pageSize = 5;
        organizationTypeGrid.on("itemclick", function( view, record, item, index, e, eOpts ){
            var organizationTypeRuleGrid = Ext.getCmp('organizationTypeRuleGrid') ;
            organizationTypeRuleGrid.getStore().getProxy().url = 'http://rms.youngsun.com:8088/orgType/getOrgTypeByPid/'+record.get('id');
            organizationTypeRuleGrid.getStore().load();
            organizationTypeRuleGrid.show();
            organizationTypeRuleGrid.pid = record.get('id');
        }, organizationTypeGrid);
        Ext.apply(this, {
            items: [
                {
                    xtype: 'organization.organizationTypeRuleGrid'
                },
                {
                    xtype: organizationTypeGrid
                }
            ]
        });
        this.callParent();
    }
});
