Ext.define('Admin.view.organization.OrganizationTypeGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.organization.orgTypeGrid',
    store: 'organizationTypeStore',
    margin: '30 30 30 30',
    header :{
        hidden : true
    },
    controller: 'organizationTypeGridController',
    // listeners: {
    //     itemdblclick: 'onItemdblclick'
    // },
    selType: 'checkboxmodel',
    title : '组织机构分类列表',
    multiSelect: true,
    columnLines: true,
    columns : [
        {xtype: 'rownumberer',width : '3%'},
        {
            text     : '编号',
            sortable : true,
            width    : "10%",
            dataIndex: 'sn'
        },
        {
            text     : '名称',
            sortable : true,
            width    : "15%",
            dataIndex: 'name'
        },
        {
            text     : '添加时间',
            sortable : true,
            width    : "15%",
            dataIndex: 'insertDate'
        },
        {
            text     : '修改时间',
            sortable : true,
            width    : "15%",
            dataIndex: 'upDateDate'
        },
        {
            text     : '添加人员ID',
            sortable : true,
            width    : "15%",
            dataIndex: 'insertUserId'
        },
        {
            text     : '修改人员ID',
            sortable : true,
            width    : "15%",
            dataIndex: 'upDateUserId'
        },
        {
            text     : '所属项目',
            sortable : true,
            width    : "12%",
            dataIndex: 'belongTo'
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
        var store = Ext.create('Admin.store.organization.OrganizationTypeStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
})
