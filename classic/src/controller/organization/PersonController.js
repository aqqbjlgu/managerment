Ext.define('Admin.controller.Organization.PersonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personController',
    count: 1,
    onItemdblclick: function ( view, record, item, index, e, eOpts ) {
        var personWindow = this.lookupReference('personWindow');
        if (!personWindow) {
            personWindow = new Admin.view.organization.PersonWindow();
        }
        personWindow.show();
        var person = personWindow.lookupReference('personForm');
        person.loadRecord(record);
        var personForm = person.getForm();
        personForm.findField('confirmPassword').setValue(record.get('password'));
        var container = Ext.getCmp('orgFieldset');
        var personOrgPosDtos = record.get('personOrgPosDtos');
        container.removeAll();
        for (var index = 0; index < personOrgPosDtos.length; index++) {
            var uuid = Ext.create('Ext.data.identifier.Uuid',{
	        }).generate();
            container.add({
            xtype: 'fieldcontainer',
            id: 'orgContainer_'+uuid,
            fieldLabel: '部门/岗位',
            layout: 'hbox',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                xtype: 'treepicker',
                fieldLabel: '部门',
                width: "40%",
                margin: '0 5 10 10',
                name: 'personOrgPosDtos['+this.count+'].orgId',
                id: 'personTreePick'+uuid,
                // typeAhead: true,
                // typeAheadDelay: 25,
                alwaysOnTop: true,
                scrollable : true,
                bodyStyle : 'overflow-x:scroll; overflow-y:scroll',
                store : Ext.create('Ext.data.TreeStore', {
                    id: 'personTreePickStore'+uuid,
                    folderSort : true,
                    fields: [
                        {name: 'id', type: 'string'},
                        {name: 'name', type: 'string'},
                        {name: 'leaf',type:'boolean',mapping: 'isLeaf'}
                    ],
                    proxy: {
                        type: 'ajax',
                        url: 'http://rms.youngsun.com:8088/org/getAllLikeTree',//请求url
                        reader: {
                            type: 'json'
                        }
                    },
                    autoLoad: true
                }),
                valueField : 'id',
                value: personOrgPosDtos[index].orgId,
                displayField : 'name',
                emptyText : '所属部门'
            },
            {
                xtype: 'combobox',
                margin: '0 5 10 10',
                fieldLabel: '岗位',
                width: "40%",
                emptyText: '请选择岗位信息',
                name: 'personOrgPosDtos['+this.count+'].posId',
                id: 'posCombo'+uuid,
                store : Ext.create('Ext.data.Store', {
                    id: 'posComboStore'+uuid,
                    fields: [
                        {name: 'id', type: 'string'},
                        {name: 'name', type: 'string'}
                    ],
                    proxy: {
                        type: 'ajax',
                        url: 'http://rms.youngsun.com:8088/position/getAll',//请求url
                        reader: {
                            type: 'json',
                            rootProperty: 'data'
                        }
                    },
                    autoLoad: true
                }),
                editable : false,
                value: personOrgPosDtos[index].posId,
                valueField : 'id',
                typeAhead: true,
                typeAheadDelay: 25,
                displayField : 'name'
            },{
                xtype: 'button',
                id: 'add_'+uuid,
                margin: '0 5 10 10',
                text: '添加',
                handler: 'addOrgAndPos'
            },{
                xtype: 'button',
                id: 'del_'+uuid,
                margin: '0 5 10 10',
                text: '删除',
                handler: 'delOrgAndPos'
            }]
        });
        this.count++;
        }
        
    },
    
    checkIdCard: function(idCard){
        var flag = false;
        var showToast = this.showToast;
        Ext.Ajax.request({
            async : false, 
            url : 'http://rms.youngsun.com:8088/person/getByIdCard/'+idCard,
            method: 'GET',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                if(obj.data){
                    flag = true;
                }
            },
            failure: function(response, opts) {
                showToast('服务器访问失败。错误码：' + response.status,'ERROR');
            }
        });
        return flag;
    },

    checkEmail: function(email){
        var showToast = this.showToast;
        var flag = false;
        Ext.Ajax.request({
            async : false, 
            url : 'http://rms.youngsun.com:8088/person/getByEmail/',
            method: 'GET',
            params:{
                email: email
            },
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                if(obj.data){
                    flag = true;
                }
            },
            failure: function(response, opts) {
                showToast('服务器访问失败。错误码：' + response.status,'ERROR');
            }
        });
        return flag;
    },

    checkPhone: function(phone){
        var flag = false;
        var showToast = this.showToast;
        Ext.Ajax.request({
            async : false, 
            url : 'http://rms.youngsun.com:8088/person/getByPhone/'+phone,
            method: 'GET',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                if(obj.data){
                    flag = true;
                }
            },
            failure: function(response, opts) {
                showToast('服务器访问失败。错误码：' + response.status,'ERROR');
            }
        });
        return flag;
    },

    checkNickName: function(nickName){
        var flag = false;
        var showToast = this.showToast;
        Ext.Ajax.request({
            async : false, 
            url : 'http://rms.youngsun.com:8088/person/getByNickName/'+encodeURI(nickName),
            method: 'GET',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                if(obj.data){
                    flag = true;
                }
            },
            failure: function(response, opts) {
                showToast('服务器访问失败。错误码：' + response.status,'ERROR');
            }
        });
        return flag;
    },

    onBlur: function(view, event, eOpts) {
        if(!view.isDirty()){
            return;
        }
        var idCard = view.getValue();
        if(this.checkIdCard(idCard)){
            view.markInvalid('所填身份证已经被注册');
            return false;
            // view.up('form').getForm().markInvalid();
        }
        return true;
    },

    onEmailBlur: function(view, event, eOpts) {
        if(!view.isDirty()){
            return;
        }
        var email = view.getValue();
        if(this.checkEmail(email)){
            view.markInvalid('所填邮箱已经被注册');
            return false;
            // view.up('form').getForm().markInvalid();
        }
        return true;
    },

    onPhoneBlur: function(view, event, eOpts) {
        if(!view.isDirty()){
            return;
        }
        var phone = view.getValue();
        if(this.checkPhone(phone)){
            view.markInvalid('所填手机已经被注册');
            return false;
            // view.up('form').getForm().markInvalid();
        }
        return true;
    },

    addOrgAndPos : function(){
        var container = Ext.getCmp('orgFieldset');
        var uuid = Ext.create('Ext.data.identifier.Uuid',{

	    }).generate();
        container.add({
            xtype: 'fieldcontainer',
            id: 'orgContainer_'+this.count,
            fieldLabel: '部门/岗位',
            layout: 'hbox',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                xtype: 'treepicker',
                fieldLabel: '部门',
                width: "40%",
                margin: '0 5 10 10',
                name: 'personOrgPosDtos['+this.count+'].orgId',
                id: 'personTreePick'+uuid,
                // typeAhead: true,
                // typeAheadDelay: 25,
                alwaysOnTop: true,
                scrollable : true,
                bodyStyle : 'overflow-x:scroll; overflow-y:scroll',
                store : Ext.create('Ext.data.TreeStore', {
                    id: 'personTreePickStore'+uuid,
                    folderSort : true,
                    fields: [
                        {name: 'id', type: 'string'},
                        {name: 'name', type: 'string'},
                        {name: 'leaf',type:'boolean',mapping: 'isLeaf'}
                    ],
                    proxy: {
                        type: 'ajax',
                        url: 'http://rms.youngsun.com:8088/org/getAllLikeTree',//请求url
                        reader: {
                            type: 'json'
                        }
                    },
                    autoLoad: true
                }),
                valueField : 'id',
                displayField : 'name',
                emptyText : '所属部门'
            },
            {
                xtype: 'combobox',
                margin: '0 5 10 10',
                fieldLabel: '岗位',
                width: "40%",
                emptyText: '请选择岗位信息',
                name: 'personOrgPosDtos['+this.count+'].posId',
                id: 'posCombo'+uuid,
                store : Ext.create('Ext.data.Store', {
                    id: 'posComboStore'+uuid,
                    fields: [
                        {name: 'id', type: 'string'},
                        {name: 'name', type: 'string'}
                    ],
                    proxy: {
                        type: 'ajax',
                        url: 'http://rms.youngsun.com:8088/position/getAll',//请求url
                        reader: {
                            type: 'json',
                            rootProperty: 'data'
                        }
                    },
                    autoLoad: true
                }),
                editable : false,
                valueField : 'id',
                typeAhead: true,
                typeAheadDelay: 25,
                displayField : 'name'
            },{
                xtype: 'button',
                id: 'add_'+uuid,
                margin: '0 5 10 10',
                text: '添加',
                handler: 'addOrgAndPos'
            },{
                xtype: 'button',
                id: 'del_'+uuid,
                margin: '0 5 10 10',
                text: '删除',
                handler: 'delOrgAndPos'
            }]
        });
        this.count++;
    },

    delOrgAndPos: function(button, e){
        var num = button.getId().split('_')[1];
        console.info(button);
        alert(num);
        Ext.getCmp('orgFieldset').remove('orgContainer_'+num);
    },

    onNickNameBlur: function(view, event, eOpts) {
        if(!view.isDirty()){
            return;
        }
        var nickName = view.getValue();
        if(this.checkNickName(nickName)){
            view.markInvalid('所填用户名已经被注册');
            return false;
            // view.up('form').getForm().markInvalid();
        }
        return true;
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
                        url : 'http://rms.youngsun.com:8088/person/deleteAll',
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
        var personWindow = this.lookupReference('personWindow');
        if (!personWindow) {
            personWindow = new Admin.view.organization.PersonWindow();
        }
        personWindow.show();
    },
    
    onSubmit: function ( ) {
        var personForm =this.lookupReference('personForm').getForm();
        if(personForm.findField('status').getValue()=='激活'){
            personForm.findField('status').setValue(1)
        }
        if(personForm.findField('status').getValue()=='未激活'){
            personForm.findField('status').setValue(0)
        }
        if(personForm.findField('sex').getValue()=='男'){
            personForm.findField('sex').setValue(1)
        }
        if(personForm.findField('sex').getValue()=='女'){
            personForm.findField('sex').setValue(0)
        }
        var showToast = this.showToast;
        if(personForm.findField('idCard').isDirty()){
            if(this.checkIdCard(personForm.findField('idCard').getValue())){
               personForm.findField('idCard').markInvalid('所填身份证已经被注册');
                return false;
            }
        }
        if(personForm.findField('email').isDirty()){
            if(this.checkEmail(personForm.findField('email').getValue())){
               personForm.findField('email').markInvalid('所填邮箱已经被注册');
                return false;
            }
        }
        if(personForm.findField('phone').isDirty()){
            if(this.checkPhone(personForm.findField('phone').getValue())){
               personForm.findField('phone').markInvalid('所填手机已经被注册');
                return false;
            }
        }
        if(personForm.findField('nickName').isDirty()){
            if(this.checkIdCard(personForm.findField('nickName').getValue())){
               personForm.findField('nickName').markInvalid('所填用户名已经被注册');
                return false;
            }
        }
        
        personForm.submit({
            // 设置提交的地址
            url : 'http://rms.youngsun.com:8088/person/add',
            // 设置提交的方式为post
            method : 'POST',
            //// 设置等待时显示的内容
            waitMsg : "正在处理......",
            // 网络成功返回
            success : function(form, action) {
                showToast('添加成功','SUCCESS');
                Ext.getCmp('personGrid').getStore().load();
                Ext.getCmp('personWindow').close();
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
                        Ext.getCmp('personWindow').close();
                        break;
                    case Ext.form.Action.SERVER_INVALID :
                        if('errorType'=='NormException'){
                            showToast(action.result.msg,"ERROR");
                        }else{
                            Ext.getCmp('mainView').getController().setCurrentView('pages.Error500Panel',action.result.status,action.result.msg);
                        }
                        Ext.getCmp('personWindow').close();
                }
            }
        });
    },
    onReset: function () {
        this.lookupReference('personForm').getForm().reset();
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
