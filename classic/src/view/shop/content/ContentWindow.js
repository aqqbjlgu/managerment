Ext.define('Admin.view.shop.content.ContentWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.shop.contentWindow',
    reference: 'contentWindow',
    id: 'contentWindow',
    height: 700,
    width: '60%',
    title: '添加内容分类',
    modal: true,
    controller: 'contentController',
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
            id:'contentForm',
            reference: 'contentForm',
            items:[
                {
                    xtype: 'textfield',
                    name: 'id',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '内容标题',
                    width: "100%",
                    allowBlank: false,
                    name: 'title'
                },
                {
                    xtype: 'treepicker',
                    fieldLabel: '分类',
                    width: "100%",
                    margin: '0 5 10 10',
                    name: 'categoryId',
                    allowBlank: false,
                    store : Ext.create('Ext.data.TreeStore', {
                        fields: [
                            {name: 'id', type: 'string'},
                            {name: 'name', type: 'string'},
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
                    emptyText : '请选择分类...'
                },
                {
                    xtype: 'textfield',
                    width: "100%",
                    margin: '0 5 10 10',
                    fieldLabel: '子标题',
                    minValue: 0,
                    allowBlank: false,
                    name: 'subTitle'
                },
                {
                    xtype: 'textfield',
                    width: "100%",
                    margin: '0 5 10 10',
                    fieldLabel: '标题描述',
                    minValue: 0,
                    allowBlank: false,
                    name: 'titleDesc'
                },
                {
                    xtype: 'textfield',
                    width: "100%",
                    margin: '0 5 10 10',
                    fieldLabel: '链接',
                    minValue: 0,
                    allowBlank: false,
                    name: 'url'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items:[
                        {
                            xtype: 'textfield',
                            margin: '0 5 0 10',
                            fieldLabel: '图片',
                            name: 'pic',
                            editable: false,
                            width: '90%'
                        },
                        {
                            xtype: 'button',
                            width: '10%',
                            margin: '0 5 0 10',
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
                                        },
                                        clickFn: function (urlList) {
                                            var url = '';
                                            Ext.each(urlList,function(data){
                                                url = url+data.url+';';
                                            });
                                            Ext.getCmp('contentForm').getForm().findField('pic').setValue(url);
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
                    items:[
                        {
                            xtype: 'textfield',
                            margin: '0 5 0 10',
                            fieldLabel: '图片1',
                            name: 'pic2',
                            editable: false,
                            width: '90%'
                        },
                        {
                            xtype: 'button',
                            width: '10%',
                            margin: '0 5 0 10',
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
                                        },
                                        clickFn: function (urlList) {
                                            var url = '';
                                            Ext.each(urlList,function(data){
                                                url = url+data.url+';';
                                            });
                                            Ext.getCmp('contentForm').getForm().findField('pic2').setValue(url);
                                            editor.hideDialog();
                                        }
                                    });
                                });
                            }
                        }
                    ]
                },
                {
                    xtype: 'kindeditor',
                    margin: '0 5 10 10',
                    fieldLabel: '内容',
                    labelAlign: 'left',
                    name: 'content',
                    id: 'content',
                    allowBlank: false,
                    border: false,
                    scrollable: true,
                    width: "90.5%",
                    height: 300
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
