Ext.define('Admin.view.organization.OrganizationRuleWindow', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.organization.organizationRuleWindow',
    reference: 'organizationRuleWindow',
    id: 'organizationRuleWindow',
    store: 'organizationRuleStore',
    scrollable : true,
    width: '50%',
    header :{
        hidden : true
    },
    selType: 'checkboxmodel',
    multiSelect: true,
    columnLines: true,
    columns : [
        {
            dataIndex: 'id',
            hidden: true
        },
        {
            dataIndex: 'leaf',
            hidden: true
        },
        {
            text     : '组织机构名',
            width    : "16%",
            sortable : true,
            dataIndex: 'name'
        },
        {
            text     : '所属分类',
            width    : "16%",
            sortable : true,
            dataIndex: 'typeName'
        },
        {
            text     : '地址',
            width    : "16%",
            sortable : true,
            dataIndex: 'address'
        },
        {
            text     : '电话',
            width    : "16%",
            sortable : true,
            dataIndex: 'phone'
        },
        {
            text     : '管理类型',
            sortable : true,
            width    : "16%",
            dataIndex: 'managerType'
        },
        {
            text     : '所属项目',
            sortable : true,
            width    : "16%",
            dataIndex: 'belongTo'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'organizationRuleStore',
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    },
    initComponent: function() {
        var store = Ext.create('Admin.store.organization.OrganizationRuleStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
});
