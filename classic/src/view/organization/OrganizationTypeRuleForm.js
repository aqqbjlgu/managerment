Ext.define('Admin.view.organization.OrganizationTypeRuleForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.organization.organizationTypeRuleForm',
    id: 'organizationTypeRuleForm',
    reference: 'organizationTypeRuleForm',
    margin: '10 0 10 0',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },
    items:[
                {
                    xtype: 'textfield',
                    name: 'rid',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    hidden: true,
                    name: 'pid'
                },
                // {
                //     xtype: 'textfield',
                //     hidden: true,
                //     name: 'cid'
                // },
                {
                    xtype: 'combobox',
                    margin: '0 5 10 10',
                    fieldLabel: '下属分类',
                    allowBlank:false,
                    width: "100%",
                    emptyText: '下属分类',
                    name: 'cid',
                    store : Ext.create('Ext.data.Store', {
                        fields: [
                            {name: 'id', type: 'string'},
                            {name: 'name', type: 'string'}
                        ],
                        proxy: {
                            type: 'ajax',
                            url: 'http://rms.youngsun.com:8088/orgType/getAllWithoutPage.do',//请求url
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
                    xtype: 'numberfield',
                    width: "100%",
                    margin: '0 5 10 10',
                    allowBlank:false,
                    fieldLabel: '允许数量',
                    value: 1,
                    minValue: 0,
                    name: 'num'
                }
            ]
})
