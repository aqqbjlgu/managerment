Ext.define('Admin.controller.shop.contentCategroy.ContentCategroyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contentCategroyController',

    addRow:function(){
        var contentCategroyWindow = this.lookupReference('contentCategroyWindow');
        if (!contentCategroyWindow) {
            contentCategroyWindow = new Admin.view.shop.contentCategroy.ContentCategroyWindow();
        }
        contentCategroyWindow.show();
        //var itemParamTreeWindow = this.lookupReference('itemParamTreeWindow');
        //if (!itemParamTreeWindow) {
        //    itemParamTreeWindow = new Admin.view.shop.itemParam.ItemParamTreeWindow();
        //}
        //var tree = itemParamTreeWindow.down('treepanel');
        //tree.getRootNode().removeAll();
        //itemParamTreeWindow.show();
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
    onSubmit: function() {
        var contentCategroyForm =this.lookupReference('contentCategroyForm').getForm();
        var showToast = this.showToast;
        var parent = {};
        parent.key = contentCategroyForm.findField('parent').getValue();
        parent.value = contentCategroyForm.findField('parent').getRawValue();
        contentCategroyForm.findField('parentId').setValue(contentCategroyForm.findField('parent').getValue());
        contentCategroyForm.findField('parent').setValue(JSON.stringify(parent));
        //商品状态，1-正常，2-下架，3-删除
        if(contentCategroyForm.findField('status').getValue()=='正常'){
            contentCategroyForm.findField('status').setValue(1)
        }
        if(contentCategroyForm.findField('status').getValue()=='下架'){
            contentCategroyForm.findField('status').setValue(2)
        }
        if(contentCategroyForm.findField('status').getValue()=='删除'){
            contentCategroyForm.findField('status').setValue(3)
        }
        contentCategroyForm.submit({
            // 设置提交的地址
            url : '/content/categroy/save',
            // 设置提交的方式为post
            method : 'POST',
            //// 设置等待时显示的内容
            waitMsg : "正在处理......",
            // 网络成功返回
            success : function(form, action) {
                showToast(action.result.msg);
                //var record = updateNodeForm.getRecord(),values = form.getValues();
                //record.set(values).getRecord();
                Ext.getCmp('contentCategroyGrid').getStore().load();
                Ext.getCmp('contentCategroyeWindow').destroy();
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
    onSelect: function(picker, record, eOpts){
        picker.setRawValue(record.get('id'));
        picker.setValue(record.get('name'));
        var selectRow = Ext.getCmp('contentCategroyGrid').getSelection()[0];
        selectRow.set('parentId',record.get('id'));
    },
    onEdit: function(editor, context, eOpts){
        var record = context.record;
        var newValue = context.newValues;
        if(newValue.status == '正常'){
            record.set('status',1);
        }
        if(newValue.status == '下架'){
            record.set('status',2);
        }
        if(newValue.status == '删除'){
            record.set('status',3);
        }
        var showToast = this.showToast;
        var oldParentId = newValue.parentId;
        var parent = {};
        parent.key = record.get('parentId');
        parent.value = record.get('parent');
        var contentCategroy = {};
        contentCategroy.id = record.get('id');
        contentCategroy.name = record.get('name');
        contentCategroy.parentId = record.get('parentId');
        contentCategroy.parent = record.get('parent');
        contentCategroy.status = record.get('status');
        contentCategroy.sortOrder = record.get('sortOrder');
        contentCategroy.isParent = record.get('isParent');
        contentCategroy = JSON.stringify(contentCategroy);
        alert(contentCategroy);
        console.info(context);
        console.info(contentCategroy);
        console.info(oldParentId);
        Ext.Ajax.request({
            url : '/content/categroy/update',
            method: 'POST',
            //headers: {'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8'},
            params: {
                id : record.get('id'),
                name : record.get('name'),
                parentId : record.get('parentId'),
                parent : JSON.stringify(parent),
                status : 1,
                sortOrder : record.get('sortOrder'),
                isParent : record.get('isParent'),
                oldParentId : oldParentId
            },
            success : function(response) {
                var result = Ext.JSON.decode(response.responseText);
                showToast('更新成功！' + result);
            },
            failure: function(response, opts) {
                showToast('网络有问题啦！' + response.status);
            }
        });
    },
    onReset: function() {
        this.lookupReference('contentCategroyForm').getForm().reset();
    }
});
