Ext.define('Admin.view.shop.itemParam.ItemParamTreeWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.shop.itemParamTreeWindow',
    reference: 'itemParamTreeWindow',
    id: 'itemParamTreeWindow',
    height: 400,
    width: '50%',
    title: '添加商品参数模版',
    scrollable: true,
    modal: true,
    controller: 'itemParamGridController',
    items: [
        {
            xtype: 'form',
            id:'itemParamTreeForm',
            reference: 'itemParamTreeForm',
            items:[
                {
                    xtype: 'textfield',
                    name: 'id',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'paramData',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'itemCatId',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'itemCatName',
                    hidden: 'true'
                },
                {
                    xtype: 'treepanel',
                    reference: 'itemParamTreeFormTree',
                    width: '100%',
                    rootVisible: false,
                    selModel: 'cellmodel',
                    padding: '0 5 0 5',
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 2
                    },
                    store: new Ext.data.TreeStore({
                        root: {
                            text: '根节点',
                            id: 'src',
                            expanded: true
                        },
                        folderSort: true,
                        sorters: [{
                            property: 'text',
                            direction: 'ASC'
                        }]
                    }),
                    viewConfig: {
                        plugins: {
                            ptype: 'treeviewdragdrop',
                            containerScroll: true
                        }
                    },
                    columnLines: true,
                    columns: [{
                        xtype: 'treecolumn', //this is so we know which column will show the tree
                        text: '编号',
                        width: "18%",
                        dataIndex: 'name',
                        sortable: true
                    }, {
                        text: '名称',
                        width: "80%",
                        sortable: true,
                        dataIndex: 'value',
                        editor: {
                            allowBlank: false
                        }
                    }],
                    dockedItems: [{
                        xtype: 'toolbar',
                        items: [{
                            xtype: 'treepicker',
                            //editable: true,
                            name:'itemCatId',
                            width: '60%',
                            trackResetOnLoad: true,
                            selectOnFocus: true,
                            selectOnTab: true,
                            listeners: {
                                select: {
                                    fn: 'onSelect'
                                }
                            },
                            store: Ext.create('Ext.data.TreeStore', {
                                fields: [
                                    {name: 'name', type: 'string'},
                                    {name: 'id', type: 'string'},
                                    {name: 'leaf', type: 'boolean', mapping: 'leaf'}
                                ],
                                proxy: {
                                    type: 'ajax',
                                    url: '/item/cat/list',//请求url
                                    reader: {
                                        type: 'json'
                                    }
                                },
                                autoLoad: true
                            }),
                            valueField: 'id',
                            displayField: 'name',
                            emptyText: '请选择商品分类...',
                            typeAhead: true,
                            allowBlank: false
                        }, '-', {
                            text: '增加节点',
                            id: 'addNode',
                            tooltip: '增加节点',
                            width: '15%',
                            iconCls: 'framing-buttons-option',
                            handler: 'addNode'
                        }, '-', {
                            text: '删除节点',
                            tooltip: '删除节点',
                            width: '15%',
                            iconCls: 'framing-buttons-option',
                            handler: 'removeNode'
                        }, '-', {
                            text: '保存',
                            tooltip: '保存',
                            width: '10%',
                            iconCls: 'framing-buttons-option',
                            handler: 'saveNode'
                        }]
                    }]
                }
            ]
        }
    ]

});
