Ext.define('Admin.controller.shop.item.ItemGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.itemGridController',

    onItemdblclick: function ( view, record, item, index, e, eOpts ) {
        var itemForm = Ext.getCmp('itemForm');
        itemForm.show();
        itemForm.getForm().loadRecord(record);
        var cidValue = record.get('cidCatName').split('-')[0];
        var cidRawValue = record.get('cidCatName').split('-')[1];
        var itemId = record.get('id');
        //var paramDataField = itemForm.getForm().findField('itemParam');
        var paramDataField = itemForm.lookupReference('itemParam');
        itemForm.getForm().findField("cid").setValue(cidValue);
        itemForm.getForm().findField("cid").setRawValue(cidRawValue);
        itemForm.setCollapsed(false);
        console.info(itemForm.getForm().findField("desc"));
        Ext.Ajax.request({
            url : 'http:localhost:8080/item/param/item/get/itemId/'+itemId,
            method: 'GET',
            success : function(response) {
                paramDataField.removeAll(true);
                var result = Ext.JSON.decode(response.responseText);
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
                                    fieldLabel: params[j].k,
                                    value: params[j].v
                                });
                            }
                        }
                    }
                }else{
                    Ext.Ajax.request({
                        url : '/item/param/get/itemCatId/'+cidValue,
                        method: 'GET',
                        success : function(response) {
                            var result = Ext.JSON.decode(response.responseText);
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
            failure: function(response, opts) {
                showToast('网络有问题啦！' + response.status);
            }
        });
    }
});
