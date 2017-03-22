Ext.define('Admin.view.organization.OrganizationRuleWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.organization.organizationRuleWindow',
    reference: 'organizationRuleWindow',
    id: 'organizationRuleWindow',
    scrollable : 'y',
    width: '50%',
    title: '添加规则',
    modal: true,
    items: [{
            xtype: 'treepanel',
            id: 'organizationRuleGrid',
            // expanded: true,
            rootVisible : false,
            //height: 300,
            scrollable : true,
            header :{
                hidden : true
            },
            store : Ext.create('Admin.store.organization.OrganizationRuleStore'),
            selType: 'checkboxmodel',
            border: true,
            //stateful: true,
            // collapsible: false,
            // singleExpand : true,
            multiSelect: true,
            columnLines: true,
            columns : [
                {
                    dataIndex: 'parentId',
                    hidden: true
                },
                {
                    dataIndex: 'leaf',
                    hidden: true
                },
                {
                    xtype: 'treecolumn',
                    text     : '组织机构名',
                    width    : "10%",
                    sortable : true,
                    dataIndex: 'name'
                },
                {
                    text     : '所属分类',
                    width    : "10%",
                    sortable : true,
                    dataIndex: 'typeName'
                },
                {
                    text     : '排序号',
                    width    : "10%",
                    sortable : true,
                    dataIndex: 'orderNo'
                },
                {
                    text     : '地址',
                    width    : "10%",
                    sortable : true,
                    dataIndex: 'address'
                },
                {
                    text     : '电话',
                    width    : "10%",
                    sortable : true,
                    dataIndex: 'phone'
                },
                {
                    text     : '添加时间',
                    sortable : true,
                    width    : "10%",
                    dataIndex: 'insertDate'
                },
                {
                    text     : '修改时间',
                    sortable : true,
                    width    : "10%",
                    dataIndex: 'upDateDate'
                },
                {
                    text     : '管理类型',
                    sortable : true,
                    width    : "10%",
                    dataIndex: 'managerType'
                },
                {
                    text     : '修改人员ID',
                    sortable : true,
                    width    : "10%",
                    dataIndex: 'upDateUserId'
                },
                {
                    text     : '所属项目',
                    sortable : true,
                    width    : "10%",
                    dataIndex: 'belongTo'
                }
            ]
    }],
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
