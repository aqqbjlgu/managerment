Ext.define('Admin.view.shop.content.ContentGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.shop.contentGrid',
    store: 'contentStore',
    id: 'contentGrid',
    expanded: true,
    rootVisible : false,
    //height: 300,
    scrollable : true,
    reference: 'contentGrid',
    header :{
        hidden : false
    },
    controller: 'contentController',
    selModel: {
        type: 'rowmodel'
    },
    listeners: {
        itemdblclick: 'onItemdblclick'//,
    },
    title : '内容分类管理',
    border: true,
    stateful: true,
    collapsible: true,
    multiSelect: true,
    columnLines: true,
//{name: 'id',type:'int'},
//{name: 'categoryId',type:'int'},
//{name: 'title',type:'string'},
//{name: 'subTitle',type:'int'},
//{name: 'titleDesc',type:'int'},
//{name: 'url',type:'string'},
//{name: 'pic',type:'string'},
//{name: 'pic2',type:'string'},
//{name: 'content',type:'string'},
    columns : [
        {
            dataIndex: 'id',
            text     : '内容ID',
            sortable : true
        },
        {
            dataIndex: 'categoryId',
            hidden: true
        },
        {
            dataIndex: 'content',
            hidden: true
        },
        {
            text     : '内容标题',
            width    : "11%",
            sortable : true,
            dataIndex: 'title'
        },
        {
            text     : '子标题',
            width    : "11%",
            sortable : true,
            dataIndex: 'subTitle'
        },
        {
            text     : '内容分类',
            width    : "11%",
            sortable : true,
            dataIndex: 'categoryName'
        },
        {
            text     : '标题描述',
            width    : "11%",
            sortable : true,
            dataIndex: 'titleDesc'
        },
        {
            text     : '链接',
            width    : "11%",
            sortable : true,
            dataIndex: 'url'
        },
        {
            text     : '图片绝对路径',
            width    : "11%",
            sortable : true,
            dataIndex: 'pic'
        },
        {
            text     : '图片2绝对路径',
            width    : "11%",
            sortable : true,
            dataIndex: 'pic2'
        },
        {
            text     : '创建时间',
            width    : "11%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'created'
        },
        {
            text     : '更新时间',
            width    : "11%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'updated'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'contentStore',
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    },
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: '添加一行',
            tooltip: '添加一行',
            iconCls: 'framing-buttons-add',
            handler: 'addRow'
        }, '-', {
            text: 'Options',
            tooltip: 'Set options',
            iconCls: 'framing-buttons-option'
        },'-',{
            reference: 'removeButton',  // The referenceHolder can access this button by this name
            text: 'Remove Something',
            tooltip: 'Remove the selected item',
            iconCls:'framing-buttons-remove',
            disabled: true
        }]
    }],
    initComponent: function() {
        var store = Ext.create('Admin.store.shop.content.ContentStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
});
