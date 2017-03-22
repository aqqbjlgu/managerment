Ext.define('Admin.view.pages.Error500Panel', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.container.Container',
        'Ext.toolbar.Spacer',
        'Ext.form.Label'
    ],

    autoShow: true,
    cls: 'error-page-container',
    closable: false,
    titleAlign: 'center',
    maximized: true,
    modal: true,
    statusCode: '',
    msg: '',
    initComponent: function() {
        var me = this;
        Ext.apply(me,{
             items: [
                {
                    xtype: 'label',
                    cls: 'error-page-top-text',
                    margin: '0 0 10 30',
                    text: this.statusCode
                },
                {
                    xtype: 'label',
                    //cls: 'error-page-desc',
                    html: '<div style="border:2px solid #F11C21; text-align:left; margin:0 30px 0 30px; padding:20px;border-radius:20px;">'+this.msg+'</div>'
                },
                {
                    xtype: 'tbspacer',
                    flex: 1
                }
            ]
        });
        //console.info(this.msg);
        this.callParent();
    }
});
