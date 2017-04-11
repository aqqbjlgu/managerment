Ext.define('Admin.view.organization.OrganizationRuleWindow', {
    extend: 'Ext.container.Container',
    alias: 'widget.organization.organizationRuleWindow',
    reference: 'organizationRuleWindow',
    id: 'organizationRuleWindow',
    width: '50%',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    controller: 'organizationRuleController',
    items: [{
        xtype: 'grid',
        title: '所有部门',
        reference: 'grid1',
        flex: 1,
        store: new Admin.store.organization.OrganizationRuleStore(),
        multiSelect: true,
        margin: '0 5 0 0',
        columnLines: true,
        tools: [{
            type: 'refresh',
            tooltip: '重置',
            handler: 'onResetClick'
        }],
        viewConfig: {
            plugins: {
                ptype: 'gridviewdragdrop',
                containerScroll: true,
                dragGroup: 'dd-grid-to-grid-group1',
                dropGroup: 'dd-grid-to-grid-group2'
            },
            listeners: {
                drop: 'onDropGrid1'
            }
        },
        columns : [
            {
                dataIndex: 'id',
                hidden: true
            },
            {
                dataIndex: 'leaf',
                hidden: true
            },
            {
                text     : '组织机构名',
                width    : "33%",
                sortable : true,
                dataIndex: 'name'
            },
            {
                text     : '地址',
                width    : "33%",
                sortable : true,
                dataIndex: 'address'
            },
            {
                text     : '电话',
                width    : "33%",
                sortable : true,
                dataIndex: 'phone'
            }
        ],
        tbar: {
            xtype: 'fieldcontainer',
            width: '100%',
            fieldLabel: '查找',
            margin: '5 5 5 5',
            layout: 'hbox',
            labelWidth: 30,
            items: [{
                xtype: 'textfield',
                reference: 'queryField',
                width: '60%',
                emptyText: '请输入组织机构名称',
            },
            {
                xtype: 'button',
                margin: '1 0 0 5',
                width: '40%',
                text: '查找',
                handler: 'onQuery'
            }]
        }
        
    },{
        xtype: 'grid',
        title: '能管理的部门',
        reference: 'grid2',

        flex: 1,
        stripeRows: true,
        columnLines: true,
        viewConfig: {
            plugins: {
                ptype: 'gridviewdragdrop',
                containerScroll: true,
                dragGroup: 'dd-grid-to-grid-group2',
                dropGroup: 'dd-grid-to-grid-group1',

                // The right hand drop zone gets special styling
                // when dragging over it.
                dropZone: {
                    overClass: 'dd-over-gridview'
                }
            },

            listeners: {
                drop: 'onDropGrid2'
            }
        },

        store: {
            model: 'Admin.model.organization.OrganizationModel'
        },
        columns : [
            {
                dataIndex: 'id',
                hidden: true
            },
            {
                dataIndex: 'leaf',
                hidden: true
            },
            {
                text     : '组织机构名',
                width    : "33%",
                sortable : true,
                dataIndex: 'name'
            },
            {
                text     : '地址',
                width    : "33%",
                sortable : true,
                dataIndex: 'address'
            },
            {
                text     : '电话',
                width    : "33%",
                sortable : true,
                dataIndex: 'phone'
            }
        ]
    }]//,
    // initComponent: function() {
    //     var store = Ext.create('Admin.store.organization.OrganizationRuleStore');
    //     Ext.apply(this, {
    //         store: store
    //     });
    //     this.callParent();
    // }
    
});
