Ext.define('Admin.view.shop.item.ItemForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.shop.itemForm',
    //frame: true,
    margin: '0 0 10 0',
    id: 'itemForm',
    border: true,
    title:'商品修改、添加',
    //imageUrl: '',
    header : {
        hidden : false
    },
    width: '100%',
    trackResetOnLoad:true,
    collapsible: true,
    controller : 'itemSaveFormController',
    tools: [
        //{
        //    type:'refresh',
        //    tooltip: '刷新',
        //    // hidden:true,
        //    handler: function() {
        //        if(this.up('form').collapsed){
        //            this.up('form').setCollapsed(false);
        //        };
        //        this.up('form').reset(true);
        //        //this.up('form').getForm().findField('cid').initField();
        //    }
        //},
        {
            type:'add',
            tooltip: '关闭',
            // hidden:true,
            handler: function() {
                this.up('form').hide();
            }
        }
    ],
    hidden: true,
    //title: '商品修改、添加',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },
    items: [
        {
            //xtype: 'fieldset',
            width: '100%',
            layout: 'anchor',
            defaultType: 'textfield',
            bodyPadding: 5,
            header : {
                hidden : true
            },
            items: [
                {
                    name: 'id',
                    hidden: 'true'
                },
                {
                    name: 'cidCatName',
                    hidden: 'true'
                },
                {
                    fieldLabel: '商品名称',
                    name: 'title'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items:[
                        {
                            xtype: 'textfield',
                            margin: '0 5 0 0',
                            fieldLabel: '图片',
                            name: 'image',
                            editable: false,
                            width: '95%'
                        },
                        {
                            xtype: 'button',
                            width: '5%',
                            margin: '0 5 0 0',
                            id: 'uploadButton',
                            text: '上传图片',
                            scale: 'small',
                            handler: function(){
                                var editor = KindEditor.editor({
                                    allowFileManager: true,
                                    //controller中接收的参数名
                                    filePostName: 'uploadFile',
                                    //上传的URL
                                    uploadJson: '/pic/upload',
                                    dir: 'image'
                                });
                                editor.loadPlugin('multiimage', function () {
                                    editor.plugin.multiImageDialog({
                                        loadFn: function(){
                                            alert('aaaa');
                                        },
                                        clickFn: function (urlList) {
                                            var url = '';
                                            Ext.each(urlList,function(data){
                                                url = url+data.url+';';
                                            });
                                            Ext.getCmp('itemForm').getForm().findField('image').setValue(url);
                                            editor.hideDialog();
                                        }
                                    });
                                });
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    width: '100%',
                    items:[
                        {
                            xtype: 'numberfield',
                            hideTrigger: true,
                            margin: '0 5 0 0',
                            width: '20%',
                            labelWidth: 140,
                            fieldLabel: '商品价格<span style="color:red;">（单位：分）</span>',
                            value: 1,
                            minValue: 0,
                            name: 'price'
                        },
                        {
                            xtype: 'numberfield',
                            margin: '0 5 0 0',
                            width: '20%',
                            value: 1,
                            minValue: 1,
                            maxValue: 99999,
                            fieldLabel: '商品数量',
                            name: 'num'
                        },
                        {
                            xtype: 'textfield',
                            width: '20%',
                            margin: '0 5 0 0',
                            fieldLabel: '商品条形码',
                            name: 'barcode'
                        },
                        {
                            //xtype: itemselectorfield, itemselector itemselectorfield
                            xtype: 'treepicker',
                            width: '20%',
                            margin: '0 5 0 0',
                            fieldLabel: '所属类目',
                            name: 'cid',
                            //editable: true,
                            selectOnFocus:true,
                            selectOnTab: true,
                            store : Ext.create('Ext.data.TreeStore', {
                                fields: [
                                    {name: 'id', type: 'string'},
                                    {name: 'name', type: 'string'},
                                    {name:'leaf',type:'boolean',mapping: 'leaf'}
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
                            listeners:{
                                select: 'onSelect'
                            },
                            valueField : 'id',
                            displayField : 'name',
                            emptyText : '请选择商品分类...',
                            typeAhead : true
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: '商品状态',
                            name: 'status',
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
                            emptyText : '请选择商品状态...',
                            typeAhead : true,
                            queryMode : 'local',
                            allowBlank : false,
                            editable : false,
                            width: '20%',
                            margin: '0 5 0 0'
                            //renderTo: Ext.getBody()
                        }
                    ]
                },
                {
                    xtype: 'textarea',
                    fieldLabel: '商品卖点',
                    labelAlign: 'left',
                    name: 'sellPoint',
                    id: 'sellPoint',
                    allowBlank: false,
                    frame:true,
                    border: false,
                    scrollable: true,
                    width: "100%",
                    height: 200,
                    margin: '0 0 5 0'
                },
                {
                    xtype: 'kindeditor',
                    fieldLabel: '商品描述',
                    labelAlign: 'left',
                    name: 'desc',
                    id: 'desc',
                    allowBlank: false,
                    border: false,
                    scrollable: true,
                    width: "7.53%",
                    height: 300
                },
                {
                    xtype: 'fieldcontainer',
                    reference: 'itemParam',
                    fieldLabel: '商品规格',
                    labelAlign: 'left',
                    border: false,
                    scrollable: true,
                    width: "100%"
                },
                {
                    xtype: 'textfield',
                    hidden: true,
                    name: 'itemParam'
                },
                {
                    xtype: 'textfield',
                    hidden: true,
                    name: 'created'
                },
                {
                    xtype: 'textfield',
                    hidden: true,
                    name: 'updated'
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