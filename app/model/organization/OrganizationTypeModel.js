Ext.define('Admin.model.organization.OrganizationTypeModel', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'id',type:'string'},
        {name: 'sn',type:'string'},
        {
            name: 'name',
            type:'string'//,
        },
        {
            name: 'insertDate',
            type:'string',
            convert:function(val){
                return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
        }},
        {
            name: 'upDateDate',
            type:'string',
            convert:function(val){
                return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
        }},
        {name: 'insertUserId',type:'string'},
        {name: 'belongTo',type:'string'},
        {name: 'upDateUserId',type:'string'}

    ]
});
