Ext.define('Admin.view.organization.PersonForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.organization.personForm',
    id: 'personForm',
    reference: 'personForm',
    margin: '10 0 10 0',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },
    controller: 'personController',
    trackResetOnLoad: true,
    items: [{
        xtype: 'fieldset',
        title: '必填',
        frame: true,
        focusOnToFront : false,
        baseCls:'x-fieldset1',
        layout: 'anchor',
        margin: '0 30 10 10',
        defaults: {
            anchor: '100%'
        },
        items: [{
                xtype: 'textfield',
                hidden: true,
                name: 'id'
           },
           {
                xtype: 'textfield',
                hidden: true,
                name: 'personOrgPositionId'
           },
           {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '真实姓名',
                emptyText : '请输入真实姓名...',
                name: 'name'
            },
            {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '用户名',
                emptyText : '用来登录，可为手机，身份证，邮箱',
                listeners: {
                    blur: 'onNickNameBlur'//,
                    //itemclick: 'onItemclick'
                },
                name: 'nickName'
            },
            {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '邮箱',
                vtype: 'email',
                emptyText : '请输入邮箱地址',
                listeners: {
                    blur: 'onEmailBlur'//,
                    //itemclick: 'onItemclick'
                },
                name: 'email'
            },
            {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '身份证',
                emptyText : '身份证号码',
                regex : /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
                validateOnChange : false,
                validateOnBlur:true,
                regexText : '身份证格式不正确',
                listeners: {
                    blur: 'onBlur'//,
                    //itemclick: 'onItemclick'
                },
                name: 'idCard'
            },
            {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '手机',
                emptyText : '请填写真实手机号码',
                listeners: {
                    blur: 'onPhoneBlur'//,
                    //itemclick: 'onItemclick'
                },
                name: 'phone'
            },
            {
                xtype: 'textfield',
                id: 'password',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '密码',
                inputType: 'password',
                emptyText : '请输入密码...',
                blankText : '确认密码不能为空',
                regex : /^[\s\S]{0,20}$/,
                regexText : '确认密码长度不能超过20个字符',
                name: 'password'
            },
            {
                xtype: 'textfield',
                id : 'confirmPassword',
                name : 'confirmPassword',
                width : '100%',
                margin: '0 5 10 10',
                fieldLabel : '确认密码',
                confirmPwd : {
                    first : 'password',
                    second : 'confirmPassword'
                },
                inputType : 'password',
                vtype : 'confirmPwd',
                allowBlank : false,
                blankText : '确认密码不能为空',
                regex : /^[\s\S]{0,20}$/,
                regexText : '确认密码长度不能超过20个字符'
            },
            {
                xtype: 'combobox',
                fieldLabel: '性别',
                name: 'sex',
                store : Ext.create('Ext.data.Store', {
                    fields : [{
                        type : 'string',
                        name : 'label'
                    },{
                        type : 'string',
                        name : 'value'
                    }],
                    data : [{
                        "label" : "男",
                        "value" : "1"
                    },{
                        "label" : "女",
                        "value" : "0"
                    }]
                }),
                valueField : 'value',
                displayField : 'label',
                emptyText : '请选择...',
                typeAhead : true,
                queryMode : 'local',
                allowBlank : false,
                editable : false,
                width: '100%',
                margin: '0 5 10 10'
                //renderTo: Ext.getBody()
            },
            {
                xtype: 'combobox',
                fieldLabel: '状态',
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
                        "label" : "激活",
                        "value" : '1'
                    },{
                        "label" : "未激活",
                        "value" : '0'
                    }]
                }),
                valueField : 'value',
                displayField : 'label',
                emptyText : '请选择...',
                typeAhead : true,
                queryMode : 'local',
                allowBlank : false,
                editable : false,
                width: '100%',
                margin: '0 5 10 10'
                //renderTo: Ext.getBody()
            },
            {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '所属系统',
                emptyText : '请输入所属系统...',
                name: 'belongTo'
            }
        ]
    },{
        xtype: 'fieldset',
        title: '非必填',
        layout: 'anchor',
        margin: '0 30 10 10',
        frame: true,
        defaults: {
            anchor: '100%'
        },
        baseCls:'x-fieldset1',
        id: 'orgFieldset',
        items: [{
            xtype: 'fieldcontainer',
            id: 'orgContainer_0',
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
                name: 'personOrgPosDtos[0].orgId',
                id: 'personTreePick',
                // typeAhead: true,
                // typeAheadDelay: 25,
                alwaysOnTop: true,
                scrollable : true,
                bodyStyle : 'overflow-x:scroll; overflow-y:scroll',
                store : Ext.create('Ext.data.TreeStore', {
                    id: 'personTreePickStore',
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
                name: 'personOrgPosDtos[0].posId',
                store : Ext.create('Ext.data.Store', {
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
                id: 'add_0',
                margin: '0 5 10 10',
                text: '添加',
                handler: 'addOrgAndPos'
            },{
                xtype: 'button',
                id: 'del_0',
                disabled : true,
                margin: '0 5 10 10',
                text: '删除',
                handler: 'delOrgAndPos'
            }]
        }]
    }],
    initComponent: function() {
        Ext.apply(Ext.form.VTypes, {
            confirmPwd : function(val, field) {
                if (field.confirmPwd) {
                    var firstPwdId = field.confirmPwd.first;
                    var secondPwdId = field.confirmPwd.second;
                    this.firstField = Ext.getCmp(firstPwdId);
                    this.secondField = Ext.getCmp(secondPwdId);
                    var firstPwd = this.firstField.getValue();
                    var secondPwd = this.secondField.getValue();
                    if (firstPwd == secondPwd) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            confirmPwdText : '两次输入的密码不一致!',
             mobilephone:function(val,field)    
                {    
                    try    
                    {    
                        if(/(^0?[1][35][0-9]{9}$)/.test(val))    
                            return true;    
                        return false;    
                    }    
                    catch(e)    
                    {    
                        return false;    
                    }    
                },    
                mobilephoneText:'请输入正确的手机号码'
            });
        this.callParent();
    }
})
