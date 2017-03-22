Ext.define('Admin.view.organization.PersonGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.organization.personGrid',
    store: 'personStore',
    id: 'personGrid',
    reference: 'personGrid',
    margin: '30 30 0 30',
    header :{
        hidden : true
    },
    multiSelect: true,
    columnLines: true,
    selType: 'checkboxmodel',
    controller: 'personController',
    listeners: {
       itemdblclick: 'onItemdblclick'//,
       //itemclick: 'onItemclick'
    },
    //String id, String personOrgPositionId, String organizationId, String organizationName, String positionId, String positionName, String name, String password, int sex, String idCard, String phone, String nickName, String image, String status, String email
    columns : [
        {xtype: 'rownumberer',width : '3%'},
        {
            dataIndex: 'id',
            hidden: true
        },
        {
            dataIndex: 'personOrgPosDtos',
            hidden: true
        },
        {
            dataIndex: 'personOrgPositionId',
            hidden: true
        },
        {
            dataIndex: 'orgId',
            hidden: true
        },
        {
            dataIndex: 'posId',
            hidden: true
        },
        {
            dataIndex: 'posName',
            hidden: true
        },
        {
            text     : '姓名',
            sortable : true,
            width    : "10%",
            dataIndex: 'name'
        },
        {
            text     : '用户名',
            sortable : true,
            width    : "10%",
            dataIndex: 'nickName'
        },
        {
            text     : '性别',
            sortable : true,
            width    : "5%",
            dataIndex: 'sex'
        },
        {
            text     : '身份证',
            sortable : true,
            width    : "15%",
            dataIndex: 'idCard'
        },
        {
            text     : '手机',
            sortable : true,
            width    : "15%",
            dataIndex: 'phone'
        },
        {
            text     : '邮箱',
            sortable : true,
            width    : "15%",
            dataIndex: 'email'
        },
        {
            text     : '状态',
            sortable : true,
            width    : "5%",
            dataIndex: 'status'
        },
        {
            text     : '所在部门',
            sortable : true,
            width    : "10%",
            dataIndex: 'orgName'
        },
        {
            text     : '岗位',
            sortable : true,
            width    : "10%",
            dataIndex: 'posName'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'personStore',
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    },
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: '添加',
            tooltip: '添加',
            iconCls: 'x-fa fa-plus',
            handler: 'add'
        }, '-', {
            text: '删除',
            tooltip: 'Set options',
            iconCls: 'x-fa fa-minus',
            handler: 'delete'
        }]
    }],
    initComponent: function() {
        var store = Ext.create('Admin.store.organization.PersonStore');
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
})
