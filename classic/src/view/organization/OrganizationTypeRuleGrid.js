Ext.define('Admin.view.organization.OrganizationTypeRuleGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.organization.organizationTypeRuleGrid',
    store: 'organizationTypeRuleStore',
    id: 'organizationTypeRuleGrid',
    reference: 'organizationTypeRuleGrid',
    margin: '30 30 0 30',
    pid: '',
    header :{
        hidden : true
    },
    multiSelect: true,
    columnLines: true,
    hidden : true,
    selType: 'checkboxmodel',
    //selModel: 'cellmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    controller: 'organizationTypeRuleController',
    listeners: {
       edit: 'onEdit'
       //itemclick: 'onItemclick'
    },
    columns : [
        {xtype: 'rownumberer',width : '3%'},
        {
            dataIndex: 'rid',
             hidden: true
        },
        {
            dataIndex: 'cid',
             hidden: true
        },
        {
            dataIndex: 'pid',
             hidden: true
        },
        {
            text     : '编号',
            sortable : true,
            width    : "30%",
            dataIndex: 'sn'
        },
        {
            text     : '名称',
            sortable : true,
            width    : "40%",
            dataIndex: 'name'
        },
        {
            text     : '允许数量',
            sortable : true,
            width    : "30%",
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            },
            dataIndex: 'num'
        }
    ],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: '添加',
            tooltip: '添加',
            iconCls: 'x-fa fa-plus',
            handler: 'add'
        }, '-', {
            text: '删除',
            tooltip: 'Set options',
            iconCls: 'x-fa fa-minus',
            handler: 'delete'
        }]
    }],
    initComponent: function() {
        var store = Ext.create('Admin.store.organization.OrganizationTypeRuleStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
})
