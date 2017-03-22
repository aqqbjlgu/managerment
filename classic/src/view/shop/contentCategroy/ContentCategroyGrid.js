Ext.define('Admin.view.shop.contentCategroy.ContentCategroyGrid', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.shop.contentCategroyGrid',
    store: 'contentCategroyStore',
    id: 'contentCategroyGrid',
    expanded: true,
    rootVisible : false,
    //height: 300,
    scrollable : true,
    reference: 'contentCategroyGrid',
    header :{
        hidden : false
    },
    controller: 'contentCategroyController',
    selModel: {
        type: 'rowmodel'
    },
    listeners:{
        edit: 'onEdit'
    },
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 1
    },
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
                //Ext.getCmp('itemForm').show();
                ////Ext.getCmp('itemForm').reset(true);
                //if( Ext.getCmp('itemForm').collapsed){
                //    Ext.getCmp('itemForm').setCollapsed(true);
                //}
                //Ext.getCmp('itemForm').getForm().findField('cid').initField();
            }
        }
    ],
    //listeners: {
    //    itemdblclick: 'onItemdblclick'//,
    //    //itemclick: 'onItemclick'
    //},
    title : '内容分类管理',
    border: true,
    stateful: true,
    collapsible: true,
    multiSelect: true,
    columnLines: true,
    //layout: {
    //    type : 'anchor',
    //    anchor : '50%'
    //},
    columns : [
        {
            dataIndex: 'parentId',
            hidden: true
        },
        {
            dataIndex: 'isParent',
            hidden: true
        },
        {
            text     : '内容分类ID',
            width    : "10%",
            sortable : true,
            dataIndex: 'id'
        },
        {
            xtype: 'treecolumn',
            text     : '内容分类名',
            width    : "30%",
            sortable : true,
            editor: {
                allowBlank: false
            },
            dataIndex: 'name'
        },
        {
            text     : '父分类',
            width    : "10%",
            sortable : true,
            editor: new Ext.ux.TreePicker ({
                //typeAhead: true,
                //triggerAction: 'all',
                store : Ext.create('Ext.data.TreeStore', {
                    fields: [
                        {name: 'id', type: 'string'},
                        {name: 'name', type: 'string'},
                        {name: 'parent', type: 'string'},
                        {name:'leaf',type:'boolean',mapping: 'leaf'}
                    ],
                    proxy: {
                        type: 'ajax',
                        url: '/content/categroy/all',//请求url
                        reader: {
                            type: 'json'
                        }
                    },
                    autoLoad: true
                }),
                valueField : 'id',
                displayField : 'name',
                listeners:{
                    select: 'onSelect'
                },
                emptyText : '请选择父分类...'
            }),
            dataIndex: 'parent'
        },
        {
            text     : '分类排序',
            width    : "10%",
            sortable : true,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 100000
            },
            dataIndex: 'sortOrder'
        },
        {
            text     : '分类状态',
            width    : "10%",
            sortable : true,
            editor: new Ext.form.field.ComboBox({
                store : Ext.create('Ext.data.Store', {
                    fields : [{
                        type : 'string',
                        name : 'label'
                    },{
                        type : 'string',
                        name : 'value'
                    }],
                    data : [{
                        "label" : "正常",
                        "value" : '1'
                    },{
                        "label" : "下架",
                        "value" : '2'
                    },{
                        "label" : "删除",
                        "value" : '3'
                    }]
                }),
                valueField : 'value',
                displayField : 'label',
                emptyText : '请选择分类状态...',
                typeAhead : true,
                queryMode : 'local',
                allowBlank : false,
                editable : false,
                width: '100%',
                margin: '0 5 0 0'
                //renderTo: Ext.getBody()
            }),
            dataIndex: 'status'
        },
        {
            text     : '创建时间',
            width    : "15%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'created'
        },
        {
            text     : '更新时间',
            width    : "15%",
            sortable : true,
            //formatter: 'usMoney',
            formatter: 'date("Y-m-d H:i:s")',
            dataIndex: 'updated'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'contentCategroyStore',
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
        var store = Ext.create('Admin.store.shop.contentCategroy.ContentCategroyStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
});
