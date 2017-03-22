Ext.define('Admin.view.organization.PositionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.organization.positionForm',
    id: 'positionForm',
    reference: 'positionForm',
    margin: '10 0 10 0',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },
    items:[{
                xtype: 'textfield',
                hidden: true,
                name: 'id'
           },
           {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '岗位编号',
                emptyText : '请输入岗位编号...',
                name: 'sn'
            },
            {
                xtype: 'textfield',
                width: "100%",
                margin: '0 5 10 10',
                allowBlank:false,
                fieldLabel: '岗位名称',
                emptyText : '请输入岗位名称...',
                name: 'name'
            },
           {
                xtype: 'combobox',
                fieldLabel: '是否管理岗',
                name: 'manager',
                store : Ext.create('Ext.data.Store', {
                    fields : [{
                        type : 'string',
                        name : 'label'
                    },{
                        type : 'string',
                        name : 'value'
                    }],
                    data : [{
                        "label" : "是",
                        "value" : '1'
                    },{
                        "label" : "否",
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
                width: '20%',
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
})
