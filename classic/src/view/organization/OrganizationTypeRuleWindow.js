Ext.define('Admin.view.organization.organizationTypeRuleWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.organization.organizationTypeRuleWindow',
    reference: 'organizationTypeRuleWindow',
    id: 'organizationTypeRuleWindow',
    height: 300,
    width: '50%',
    title: '添加/修改组织结构类型',
    modal: true,
    controller: 'organizationTypeRuleController',
    items: [
        {
            xtype: 'organization.organizationTypeRuleForm'
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
