Ext.define('Admin.view.organization.PositionGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.organization.positionGrid',
    store: 'positionStore',
    id: 'positionGrid',
    reference: 'positionGrid',
    margin: '30 30 0 30',
    header :{
        hidden : true
    },
    multiSelect: true,
    columnLines: true,
    selType: 'checkboxmodel',
    controller: 'positionController',
    listeners: {
       itemdblclick: 'onItemdblclick'//,
       //itemclick: 'onItemclick'
    },
    columns : [
        {xtype: 'rownumberer',width : '3%'},
        {
            dataIndex: 'id',
            hidden: true
        },
        {
            text     : '编号',
            sortable : true,
            width    : "10%",
            dataIndex: 'sn'
        },
        {
            text     : '名称',
            sortable : true,
            width    : "10%",
            dataIndex: 'name'
        },
        {
            text     : '添加时间',
            sortable : true,
            width    : "20%",
            dataIndex: 'insertDate'
        },
        {
            text     : '修改时间',
            sortable : true,
            width    : "20%",
            dataIndex: 'upDateDate'
        },
        {
            text     : '管理类型',
            sortable : true,
            width    : "10%",
            dataIndex: 'manager'
        },
        {
            text     : '修改人员ID',
            sortable : true,
            width    : "10%",
            dataIndex: 'upDateUserId'
        },
        {
            text     : '所属项目',
            sortable : true,
            width    : "20%",
            dataIndex: 'belongTo'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'positionStore',
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    },
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
        var store = Ext.create('Admin.store.organization.PositionStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
})
