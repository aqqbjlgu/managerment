Ext.define('Admin.view.organization.PersonWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.organization.personWindow',
    reference: 'personWindow',
    id: 'personWindow',
    height: '80%',
    scrollable : 'y',
    width: '50%',
    title: '添加/修改人员',
    modal: true,
    controller: 'personController',
    items: [
        {
            xtype: 'organization.personForm'
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
