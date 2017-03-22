Ext.define('Admin.view.organization.OrganizationWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.organization.organizationWindow',
    reference: 'organizationWindow',
    id: 'organizationWindow',
    //height: auto,
    width: '50%',
    title: '添加/修改组织机构',
    modal: true,
    controller: 'organizationController',
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
            id:'organizationForm',
            reference: 'organizationForm',
            items:[
                {
                    xtype: 'textfield',
                    name: 'upDateDate',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'insertDate',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'insertUserId',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'typeName',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'upDateUserId',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    name: 'id',
                    hidden: 'true'
                },
                 {
                    xtype: 'textfield',
                    name: 'leaf',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '名称',
                    width: "100%",
                    emptyText: '组织机构名称',
                    allowBlank:false,
                    name: 'name'
                },
                {
                    xtype: 'combobox',
                    margin: '0 5 10 10',
                    fieldLabel: '所属分类',
                    allowBlank:false,
                    width: "100%",
                    emptyText: '所属分类',
                    name: 'typeId',
                    store : Ext.create('Ext.data.Store', {
                        fields: [
                            {name: 'id', type: 'string'},
                            {name: 'name', type: 'string'}
                        ],
                        proxy: {
                            type: 'ajax',
                            url: 'http://rms.youngsun.com:8088/orgType/getAllWithoutPage',//请求url
                            reader: {
                                type: 'json',
                                rootProperty: 'data'
                            }
                        },
                        autoLoad: true
                    }),
                    valueField : 'id',
                    typeAhead: true,
                    typeAheadDelay: 25,
                    displayField : 'name'
                },
                {
                    xtype: 'treepicker',
                    fieldLabel: '上级机构',
                    width: "100%",
                    margin: '0 5 10 10',
                    name: 'parentId',
                    id: 'orgTreepicker',
                    // typeAhead: true,
                    // typeAheadDelay: 25,
                    scrollable : true,
                    store : Ext.create('Ext.data.TreeStore', {
                        id: 'orgTypeTreePickStore',
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
                    emptyText : '上级机构'
                },
                {
                    xtype: 'numberfield',
                    width: "100%",
                    margin: '0 5 10 10',
                    allowBlank:false,
                    fieldLabel: '排序',
                    value: 1,
                    minValue: 0,
                    name: 'orderNo'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '地址',
                    width: "100%",
                    emptyText: '组织机构地址',
                    allowBlank:false,
                    name: 'address'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '电话',
                    width: "100%",
                    emptyText: '组织机构联系电话',
                    allowBlank:false,
                    name: 'phone'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '所属项目',
                    width: "100%",
                    emptyText: '所属项目',
                    allowBlank:false,
                    name: 'belongTo'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '管理类型',
                    width: "100%",
                    emptyText: '组织机构管理类型',
                    allowBlank:false,
                    name: 'managerType'
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
