Ext.define('Admin.view.shop.item.ItemGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.shop.itemGrid',
    store: 'itemStore',
    id: 'itemGrid',
    header :{
        hidden : false
    },
    controller: 'itemGridController',
    //selModel :'row',
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
        { type:'search' },
        {
            type:'save',
            tooltip: '增加',
            handler: function() {
                Ext.getCmp('itemForm').show();
                //Ext.getCmp('itemForm').reset(true);
                if( Ext.getCmp('itemForm').collapsed){
                    Ext.getCmp('itemForm').setCollapsed(true);
                };
                //Ext.getCmp('itemForm').getForm().findField('cid').initField();
            }
        }
    ],
    listeners: {
        itemdblclick: 'onItemdblclick'//,
        //itemclick: 'onItemclick'
    },
    title : '商品管理',
    id: 'itemGrid',
    border: true,
    stateful: true,
    collapsible: true,
    multiSelect: true,
    columnLines: true,
    layout: {
        type : 'anchor',
        anchor : '50%'
    },
    columns : [
        {xtype: 'rownumberer',width : '3%'},
        {
            text     : '商品ID',
            width    : "5%",
            sortable : true,
            dataIndex: 'id'
        },
        {
            text     : '商品名',
            width    : "20%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'title'
        },
        {
            text     : '商品卖点',
            width    : "30%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'sellPoint'
        },
        {
            text     : '商品价格',
            width    : "5%",
            sortable : true,
            //renderer: function(value){
            //    return value/100;
            //},
            //formatter: 'money',
            dataIndex: 'price'
        },
        {
            text     : '商品条形码',
            width    : "6%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'barcode'
        },
        {
            text     : '商品图片',
            width    : "10%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'image'
        },
        {
            text     : '所属类目',
            width    : "5%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'cid'
        },
        {
            text     : '商品状态',
            width    : "5%",
            sortable : true,
            //formatter: 'usMoney',
            dataIndex: 'status'
        },
        {
            text     : '商品数量',
            width    : "5%",
            sortable : true,
            renderer: function(value){
                if(value < 10){
                    return '<span style="color:red;">' + value + '</span>';
                }
                return value;
            },
            //formatter: 'usMoney',
            dataIndex: 'num'
        },
        {
            text     : '创建时间',
            width    : "5%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'created'
        },
        {
            text     : '更新时间',
            width    : "5%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'updated'
        },
        {
            text     : '商品描述',
            width    : "5%",
            sortable : true,
            hidden: true,
            dataIndex: 'desc'
        },
        {
            text     : 'gggg',
            hidden: true,
            //width    : "5%",
            //sortable : true,
            //formatter: 'usMoney',
            //formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'cidCatName'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'itemStore',
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    },
    initComponent: function() {
        var store = Ext.create('Admin.store.shop.item.Items');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
})
