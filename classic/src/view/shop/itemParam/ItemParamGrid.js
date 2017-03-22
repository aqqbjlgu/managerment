Ext.define('Admin.view.shop.itemParam.ItemParamGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.shop.itemParamGrid',
    store: 'itemParamStore',
    id: 'itemParamGrid',
    header :{
        hidden : false
    },
    controller: 'itemParamGridController',
    tools: [
        //{ type:'pin' },
        //{ type:'refresh' },
        {
            type:'refresh',
            tooltip: '刷新',
            // hidden:true,
            handler: function() {
                this.up('grid').store.reload();
            }
        },
        { type:'search' }//,
        //{
        //    type:'save',
        //    tooltip: '增加',
        //    handler: function() {
        //        Ext.getCmp('itemForm').show();
        //        //Ext.getCmp('itemForm').reset(true);
        //        if( Ext.getCmp('itemForm').collapsed){
        //            Ext.getCmp('itemForm').setCollapsed(true);
        //        };
        //        //Ext.getCmp('itemForm').getForm().findField('cid').initField();
        //    }
        //}
    ],
    listeners: {
        itemdblclick: 'onItemdblclick'//,
        //itemclick: 'onItemclick'
    },
    title : '商品参数模版管理',
    border: true,
    stateful: true,
    collapsible: true,
    multiSelect: true,
    columnLines: true,
    selModel: 'checkboxmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    columns : [
        {
            text     : '商品参数模版ID',
            width    : "10%",
            sortable : false,
            dataIndex: 'id'
        },
        {
            text     : '商品分类',
            width    : "20%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'itemCatId'
        },
        {
            text     : '商品参数模版数据',
            width    : "50%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'paramData'
        },
        {
            text     : '创建时间',
            width    : "10%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'created'
        },
        {
            text     : '更新时间',
            width    : "10%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'updated'
        }
        ,
        {
            hidden: true,
            dataIndex: 'itemCatName'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'itemParamStore',
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
        var store = Ext.create('Admin.store.shop.itemParam.ItemParamsStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
})
