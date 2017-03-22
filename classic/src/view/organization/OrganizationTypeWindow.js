Ext.define('Admin.view.organization.OrganizationTypeWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.organization.organizationTypeWindow',
    reference: 'organizationTypeWindow',
    id: 'organizationTypeWindow',
    height: 300,
    width: '50%',
    title: '添加/修改组织结构类型',
    modal: true,
    controller: 'organizationTypeGridController',
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
            id:'organizationTypeForm',
            reference: 'organizationTypeForm',
            items:[
                {
                    xtype: 'textfield',
                    name: 'id',
                    hidden: 'true'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '编号',
                    width: "100%",
                    emptyText: '类型编号',
                    allowBlank:false,
                    name: 'sn'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '名称',
                    allowBlank:false,
                    width: "100%",
                    emptyText: '类型名称',
                    name: 'name'
                },
                {
                    xtype: 'textfield',
                    margin: '0 5 10 10',
                    fieldLabel: '所属系统',
                    allowBlank:false,
                    width: "100%",
                    emptyText: '所属系统',
                    name: 'belongTo'
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
