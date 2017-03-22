Ext.define('Admin.controller.shop.content.ContentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contentController',

    addRow:function(){
        var contentWindow = this.lookupReference('contentWindow');
        if (!contentWindow) {
            contentWindow = new Admin.view.shop.content.ContentWindow();
        }
        contentWindow.show();
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
    onItemdblclick: function ( view, record, item, index, e, eOpts ) {
        var contentWindow = this.lookupReference('contentWindow');
        if (!contentWindow) {
            contentWindow = new Admin.view.shop.content.ContentWindow();
        }
        var contentForm = Ext.getCmp('contentForm');
        contentForm.getForm().loadRecord(record);
        contentWindow.show();
        contentForm.getForm().findField('content').editor.text(record.get('content'));
    },

    onSubmit: function() {
        var contentForm =this.lookupReference('contentForm').getForm();
        var showToast = this.showToast;
        contentForm.submit({
            // 设置提交的地址
            url : '/content/saveContent',
            // 设置提交的方式为post
            method : 'POST',
            //// 设置等待时显示的内容
            waitMsg : "正在处理......",
            // 网络成功返回
            success : function(form, action) {
                showToast(action.result.msg);
                Ext.getCmp('contentGrid').getStore().load();
                Ext.getCmp('contentWindow').destroy();
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
    onReset: function() {
        this.lookupReference('contentForm').getForm().reset();
    }
});
