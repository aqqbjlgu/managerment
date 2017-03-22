Ext.define('Admin.view.shop.contentCategroy.ContentCategroyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.shop.contentCategroyWindow',
    reference: 'contentCategroyWindow',
    id: 'contentCategroyeWindow',
    height: 300,
    width: '50%',
    title: '添加内容分类',
    modal: true,
    controller: 'contentCategroyController',
    items: [
        {
            xtype: 'form',
            margin: '10 0 10 0',
            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 90,
                anchor: '100%',
                msgTarget: 'side'
            },
            id:'contentCategroyForm',
            reference: 'contentCategroyForm',
            items:[
                {
                    xtype: 'textfield',
                    name: 'id',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'parentId',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '分类名称',
                    width: "100%",
                    name: 'name'
                },
                {
                    xtype: 'treepicker',
                    fieldLabel: '父分类',
                    width: "100%",
                    margin: '0 5 10 10',
                    name: 'parent',
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
                    emptyText : '请选择父分类...'
                },
                {
                    xtype: 'numberfield',
                    width: "100%",
                    margin: '0 5 10 10',
                    fieldLabel: '分类排序',
                    value: 1,
                    minValue: 0,
                    name: 'sortOrder'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '分类状态',
                    name: 'status',
                    width: "100%",
                    store : new Ext.data.Store({
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
                    emptyText : '请选择商品状态...',
                    typeAhead : true,
                    queryMode : 'local',
                    allowBlank : false,
                    editable : false,
                    margin: '0 5 10 10'
                }
            ]
        }
    ],
    buttons: [{
        text: 'Save',
        //formBind: true,
        handler: 'onSubmit'
    }, {
        text: 'Reset',
        //formBind: true,
        handler: 'onReset'
    }]
});
