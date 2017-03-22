Ext.define('Admin.controller.Organization.OrganizationTypeGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.organizationTypeGridController',

    onItemdblclick: function ( view, record, item, index, e, eOpts ) {
        var organizationTypeWindow = this.lookupReference('organizationTypeWindow');
        if (!organizationTypeWindow) {
            organizationTypeWindow = new Admin.view.organization.OrganizationTypeWindow();
        }
        organizationTypeWindow.show();
        organizationTypeWindow.lookupReference('organizationTypeForm').loadRecord(record);
    },
    delete: function(){
        var grid = this.getView();
        var sm = grid.getSelectionModel();
        var record = sm.getSelection();
        var showToast = this.showToast;
        if(sm.hasSelection()){
            Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
                if (button == "yes") {
                    var ids = []; //要删除的id
                    Ext.each(record, function (item) {
                        ids.push(item.get('id'));
                    });
                    Ext.Ajax.request({
                        url : 'http://rms.youngsun.com:8088/orgType/deleteAll.do',
                        method: 'POST',
                        //method: 'DELETE',
                        params : {
                            ids : ids,
                            _method: 'delete'
                        }
                    }).then(function(response, opts) {
                        //{"status":200,"msg":"删除成功","data":null,"errorType":null,"success":true}
                        grid.getStore().remove(record);
                        var obj = Ext.decode(response.responseText);
                        if(obj.success){
                            showToast(obj.msg,'SUCCESS');
                        }else{
                            if('errorType'=='NormException'){
                                showToast(obj.msg,"ERROR");
                            }else{
                                Ext.getCmp('mainView').getController().setCurrentView('pages.Error500Panel',obj.status,obj.msg);
                            }
                        }
                        
                    },
                    function(response, opts) {
                        showToast('服务器访问失败。错误码：' + response.status,'ERROR');
                    });
                }
            });
         }else{
             Ext.Msg.alert('警告', '请选择要删除的数据！');
         }
    },

    add: function ( ) {
        var organizationTypeWindow = this.lookupReference('organizationTypeWindow');
        if (!organizationTypeWindow) {
            organizationTypeWindow = new Admin.view.organization.OrganizationTypeWindow();
        }
        organizationTypeWindow.show();
    },

    onSubmit: function ( ) {
        var organizationTypeForm =this.lookupReference('organizationTypeForm').getForm();
        var showToast = this.showToast;
        organizationTypeForm.submit({
            // 设置提交的地址
            url : 'http://rms.youngsun.com:8088/orgType/add',
            // 设置提交的方式为post
            method : 'POST',
            //// 设置等待时显示的内容
            waitMsg : "正在处理......",
            // 网络成功返回
            success : function(form, action) {
                showToast('添加成功','SUCCESS');
                //Ext.getCmp('orgTypeGrid').getStore().load();
                Ext.getCmp('organizationTypeWindow').close();
            },
            // 网络失败返回
            failure : function(form, action) {
                console.info(action);
                switch (action.failureType) {
                    case Ext.form.Action.CLIENT_INVALID :
                            showToast("提交的表单数据无效,请检查!","ERROR");
                        break;
                    case Ext.form.Action.CONNECT_FAILURE :
                        showToast("请求失败","ERROR");
                        Ext.getCmp('organizationTypeWindow').close();
                        break;
                    case Ext.form.Action.SERVER_INVALID :
                        if('errorType'=='NormException'){
                            showToast(action.result.msg,"ERROR");
                        }else{
                            console.info(Ext.getCmp('mainView'));
                            Ext.getCmp('mainView').getController().setCurrentView('pages.Error500Panel',action.result.status,action.result.msg);
                        }
                        Ext.getCmp('organizationTypeWindow').close();
                }
            }
        });
    },
    onReset: function () {
        this.lookupReference('organizationTypeForm').getForm().reset();
    },
    showToast: function(s,type) {
        var background = '';
        if('SUCCESS'==type){
            background = '#79AC38';
        }else if('ERROR'==type){
            background = '#F11C21';
        }else if('INFO'==type){
            background = '#FFDC34';
        }else {
            background = '';
        }
        Ext.toast({
            cls:'toast',
            html:'<span style="color: #ffffff;">'+s+'</span>',
            //closable: true,\
            bodyStyle: {
                background: background,
                padding: '30px'
            },
            animateShadow : true,
            align: 't',
            header : false,
            width: '60%',
            frame:true,
            minHeight: 100
        });
    }
});
