Ext.define('Admin.controller.shop.item.ItemSaveFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.itemSaveFormController',

    onSubmit: function() {
        var itemForm = this.getView().getForm();
        var showToast = this.showToast;
        itemForm.findField('cidCatName').setValue(itemForm.findField('cid').getValue()+'-'+itemForm.findField('cid').getRawValue());
        //商品状态，1-正常，2-下架，3-删除
        if(itemForm.findField('status').getValue()=='正常'){
            itemForm.findField('status').setValue(1)
        }
        if(itemForm.findField('status').getValue()=='下架'){
            itemForm.findField('status').setValue(2)
        }
        if(itemForm.findField('status').getValue()=='删除'){
            itemForm.findField('status').setValue(3)
        }
        var groupItems = this.lookupReference('itemParam').items.items;
        var group = new Array();
        for(var i=0; i<groupItems.length; i++){
            var obj = {};
            obj.group = groupItems[i].title;
            var params = new Array();
            var paramItems = groupItems[i].items.items;
            for(var j=0; j<paramItems.length; j++){
                var objParam = {};
                objParam.k = paramItems[j].fieldLabel;
                objParam.v = paramItems[j].value;
                params.push(objParam);
            }
            obj.params = params;
            group.push(obj);
        }
        itemForm.findField('itemParam').setValue(JSON.stringify(group));
        itemForm.submit({
            // 设置提交的地址
            url : '/item/saveItem',
            // 设置提交的方式为post
            method : 'POST',
            //// 设置等待时显示的内容
            waitMsg : "正在处理......",
            // 网络成功返回
            success : function(form, action) {
                showToast(action.result.msg);
                //var record = updateNodeForm.getRecord(),values = form.getValues();
                //record.set(values).getRecord();
                Ext.getCmp('itemGrid').getStore().load();
                //var values = form.getValues();
                //record.set(values);
            },
            // 网络失败返回
            failure : function(form, action) {
                switch (action.failureType) {
                    case Ext.form.Action.CLIENT_INVALID :
                        this.showToast("提交的表单数据无效,请检查!","错误1");
                        break;
                    case Ext.form.Action.CONNECT_FAILURE :
                        this.showToast("请求失败","错误2");
                        break;
                    case Ext.form.Action.SERVER_INVALID :
                        this.showToast(action.result.msg,"服务器出错");
                }
            }
        });
    },
    onSelect: function ( view, record, item, index, e, eOpts ) {
        var cid = record.id;
        var itemParamTreeForm = view.up('form');
        var paramDataField = itemParamTreeForm.lookupReference('itemParam');
        paramDataField.removeAll(true);
        var oCid = itemParamTreeForm.getForm().findField('cidCatName').getValue().split('-')[0];
        var showToast = this.showToast;
        if(cid!=oCid){
            Ext.Ajax.request({
                url : '/item/param/get/itemCatId/'+cid,
                method: 'GET',
                success : function(response) {
                    var result = Ext.JSON.decode(response.responseText);
                    console.info(result);
                    if(result.data!=null){
                        var paramDatas = Ext.JSON.decode(result.data.paramData);
                        if(paramDatas != null){
                            for(var i=0; i<paramDatas.length; i++){
                                var fieldset = new Ext.form.FieldSet({
                                    //xtype: 'fieldset',
                                    title: paramDatas[i].group,
                                    collapsible: true,
                                    defaults: {
                                        labelWidth: 90,
                                        anchor: '100%',
                                        layout: 'hbox'
                                    }
                                });
                                paramDataField.add(fieldset);
                                var params = paramDatas[i].params;
                                for(var j=0; j<params.length; j++){
                                    fieldset.add({
                                        xtype: 'textfield',
                                        width: '100%',
                                        fieldLabel: params[j],
                                        value: '',
                                        allowBlank : false
                                    });
                                }
                            }
                        }
                    }
                },
                failure: function(response, opts) {
                    showToast('网络有问题啦！' + response.status);
                }
            });
        }

    },
    showToast: function(s) {
        Ext.toast({
            cls:'toast',
            html:'<span style="color: #ffffff;">'+s+'</span>',
            //closable: true,\
            style:{
                border:'3px solid #000000;'
                //background-color: '#80ff00;'
            },
            bodyStyle: {
                background: '#32404e',
                padding: '10px'
            },
            align: 't',
            header : false,
            width: '97%',
            frame:true,
            minWidth: 400,
            minHeight: 50
        });
    },
    onReset: function() {
        this.getView().getForm().reset();
    }
});
