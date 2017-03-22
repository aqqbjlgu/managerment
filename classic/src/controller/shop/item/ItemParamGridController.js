Ext.define('Admin.controller.shop.item.ItemParamGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.itemParamGridController',

    onItemdblclick: function ( view, record, item, index, e, eOpts ) {
        var itemParamTreeWindow = this.lookupReference('itemParamTreeWindow');
        if (!itemParamTreeWindow) {
            itemParamTreeWindow = new Admin.view.shop.itemParam.ItemParamTreeWindow();
        }
        itemParamTreeWindow.show();
        var itemParamTreeForm = itemParamTreeWindow.down('form');
        itemParamTreeForm.getForm().loadRecord(record);
        var paramData = Ext.decode(record.get('paramData'));
        var tree = itemParamTreeForm.down('treepanel');
        tree.getRootNode().removeAll();
        for(var i = 0; i<paramData.length; i++){
            var groupObj = {};
            groupObj.name='group';
            groupObj.value = paramData[i].group;
            groupObj.leaf=false;
            groupObj.checked=false;
            var node = tree.getRootNode().appendChild(groupObj);
            var paramsSource = paramData[i].params;
            for(var j =0; j< paramsSource.length; j++){
                var paramObj = {};
                paramObj.name = 'params';
                paramObj.value = paramsSource[j];
                paramObj.leaf = true;
                paramObj.checked=false;
                node.appendChild(paramObj)
            }
        }
        itemParamTreeForm.down('treepicker').setValue(record.get('itemCatName').split('-')[0]);
        itemParamTreeForm.down('treepicker').setRawValue(record.get('itemCatName').split('-')[1]);
    },
    addRow:function(){
        var itemParamTreeWindow = this.lookupReference('itemParamTreeWindow');
        if (!itemParamTreeWindow) {
            itemParamTreeWindow = new Admin.view.shop.itemParam.ItemParamTreeWindow();
        }
        var tree = itemParamTreeWindow.down('treepanel');
        tree.getRootNode().removeAll();
        itemParamTreeWindow.show();
    },
    addNode:function () {
        var tree = this.lookupReference('itemParamTreeFormTree');
        var nodes = tree.getChecked();
        if (nodes.length == 1) {
            var node = nodes[0];
            if (!node.isLeaf()) {
                node.appendChild({
                    checked: false,
                    name: 'params',
                    leaf: true
                });
            }
        } else if (nodes.length == 0) {
            var node = tree.getRootNode();
            node.appendChild({
                checked: false,
                name: 'group',
                leaf: false
            });
        } else {
            this.showToast('请只选一个节点');
        }
    },
    removeNode:function () {
        var tree = this.lookupReference('itemParamTreeFormTree');
        var nodes = tree.getChecked();
        if (nodes.length > 0) {
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].remove();
            }
        } else {
            this.showToast('请勾选节点');
        }
    },
    saveNode:function () {
        var tree = this.lookupReference('itemParamTreeFormTree');
        var form = this.lookupReference('itemParamTreeForm');
        var rootNode = tree.getRootNode();
        var group = new Array();
        var showToast = this.showToast;
        var valueIsEmpty = false;
        rootNode.eachChild(function (n) {
            var obj = {};
            if(n.data.value === undefined ){
                showToast('值不能为空！')
                valueIsEmpty = true;
            }
            obj.group = n.data.value;
            var params = new Array();
            n.eachChild(function (n) {
                if(n.data.value === undefined){
                    showToast('值不能为空！')
                    valueIsEmpty = true;
                }
                params.push(n.data.value);
            });
            obj.params = params;
            group.push(obj);
        });
        form.getForm().findField('paramData').setValue(JSON.stringify(group));
        form.getForm().findField('itemCatName').setValue(form.down('treepicker').getValue());
        form.getForm().findField('itemCatName').setValue(form.down('treepicker').getValue()+'-'+form.down('treepicker').getRawValue());
        if (form.isValid()&&!valueIsEmpty) {
            form.submit({
                // 设置提交的地址
                url : '/item/param/saveOrUpdate',
                // 设置提交的方式为post
                method : 'POST',
                //// 设置等待时显示的内容
                waitMsg : "正在处理......",
                // 网络成功返回
                success : function(form, action) {
                    showToast(action.result.msg);
                    Ext.getCmp('itemParamGrid').getStore().load();
                    Ext.getCmp('itemParamTreeWindow').destroy();
                },
                // 网络失败返回
                failure : function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.Action.CLIENT_INVALID :
                            showToast("提交的表单数据无效,请检查!","错误1");
                            break;
                        case Ext.form.Action.CONNECT_FAILURE :
                            showToast(action.result.msg,"错误2");
                            break;
                        case Ext.form.Action.SERVER_INVALID :
                            showToast(action.result.msg,"服务器出错");
                    }
                }
            });
        }
    },
    onSelect: function(view, record, eOpts){
        var cid = record.get('id');
        var itemParamTreeForm = view.up('form');
        var showToast = this.showToast;
        var OCid = itemParamTreeForm.getForm().findField('itemCatId').getValue();
        if(itemParamTreeForm.getForm().findField('id').getValue().length==0){
            Ext.Ajax.request({
                url : 'http://localhost:8080/item/param/get/itemCatId/'+cid,
                method: 'GET',
                success : function(response) {
                    var result = Ext.JSON.decode(response.responseText);
                    if(result.data != null){
                        showToast('此分类下已有参数模版！');
                        view.reset( );
                    }
                },
                failure: function(response, opts) {
                    showToast('网络有问题啦！' + response.status);
                }
            });
        }else{
            if(cid!=OCid){
                Ext.Ajax.request({
                    url : 'http://localhost:8080/item/param/get/itemCatId/'+cid,
                    method: 'GET',
                    success : function(response) {
                        var result = Ext.JSON.decode(response.responseText);
                        if(result.data != null){
                            showToast('此分类下已有参数模版！');
                            view.reset( );
                        }
                    },
                    failure: function(response, opts) {
                        showToast('网络有问题啦！' + response.status);
                    }
                });
            }
        }
    },
    showToast: function (s) {
        Ext.toast({
            cls: 'toast',
            html: '<span style="color: #ffffff;">' + s + '</span>',
            //closable: true,\
            style: {
                border: '1px solid #000000;'
                //background-color: '#80ff00;'
            },
            bodyStyle: {
                background: '#32404e',
                padding: '10px'
            },
            align: 't',
            header: false,
            width: '97%',
            frame: true,
            minWidth: 400,
            minHeight: 50
        });
    }
});
