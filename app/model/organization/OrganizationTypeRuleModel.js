Ext.define('Admin.model.organization.OrganizationTypeRuleModel', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'rid',type:'string'},
        {name: 'pid',type:'string'},
        {name: 'cid',type:'string'},
        {name: 'sn',type:'string'},
        {name: 'num',type:'int'},
        {
            name: 'name',
            type:'string'//,
        }
    ]
});
