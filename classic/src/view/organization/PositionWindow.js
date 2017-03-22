Ext.define('Admin.view.organization.PositionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.organization.positionWindow',
    reference: 'positionWindow',
    id: 'positionWindow',
    height: 300,
    width: '50%',
    title: '添加/修改岗位',
    modal: true,
    controller: 'positionController',
    items: [
        {
            xtype: 'organization.positionForm'
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
