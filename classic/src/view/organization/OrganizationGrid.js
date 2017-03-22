Ext.define('Admin.view.organization.OrganizationGrid', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.organization.OrganizationGrid',
    store: 'organizationStore',
    id: 'organizationGrid',
    // expanded: true,
    rootVisible : false,
    //height: 300,
    scrollable : true,
    header :{
        hidden : false
    },
    
    controller: 'organizationController',
    selType: 'checkboxmodel',
    listeners: {
       itemdblclick: 'onItemdblclick'//,
       //itemclick: 'onItemclick'
    },
    border: true,
    stateful: true,
    // collapsible: false,
    // singleExpand : true,
    multiSelect: true,
    columnLines: true,
    columns : [
        {
            dataIndex: 'parentId',
            hidden: true
        },
        {
            dataIndex: 'leaf',
            hidden: true
        },
        {
            xtype: 'treecolumn',
            text     : '组织机构名',
            width    : "10%",
            sortable : true,
            dataIndex: 'name'
        },
        {
            text     : '所属分类',
            width    : "10%",
            sortable : true,
            dataIndex: 'typeName'
        },
        {
            text     : '排序号',
            width    : "10%",
            sortable : true,
            dataIndex: 'orderNo'
        },
        {
            text     : '地址',
            width    : "10%",
            sortable : true,
            dataIndex: 'address'
        },
        {
            text     : '电话',
            width    : "10%",
            sortable : true,
            dataIndex: 'phone'
        },
        {
            text     : '添加时间',
            sortable : true,
            width    : "10%",
            dataIndex: 'insertDate'
        },
        {
            text     : '修改时间',
            sortable : true,
            width    : "10%",
            dataIndex: 'upDateDate'
        },
        {
            text     : '管理类型',
            sortable : true,
            width    : "10%",
            dataIndex: 'managerType'
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
            width    : "10%",
            dataIndex: 'belongTo'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'organizationStore',
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    },
    dockedItems: [{
        xtype: 'toolbar',
        id: 'organizationGridToolbar',
        items: [{
            text: '添加',
            tooltip: '添加一行',
            iconCls: 'x-fa fa-plus',
            handler: 'add'
        }, '-', {
            text: '删除',
            tooltip: '删除所选',
            iconCls: 'x-fa fa-minus',
            handler: 'delete'
        }, '-', {
            text: '添加规则',
            tooltip: '添加规则',
            iconCls: 'x-fa fa-cog',
            handler: 'addRule'
        }]
    }],
    initComponent: function() {
        var store = Ext.create('Admin.store.organization.OrganizationStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
});
