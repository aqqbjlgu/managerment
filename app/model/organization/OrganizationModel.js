Ext.define('Admin.model.organization.OrganizationModel', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'id',type:'string'},
        {name: 'name', type:'string'},
        {name: 'typeId',type:'string'},
        {name: 'typeName',type:'string'},
        {name: 'orderNo',type:'int'},
        {name: 'parentId',type:'string'},
        {name: 'address',type:'string'},
        {name: 'phone',type:'string'},
        {name: 'leaf',type:'boolean'},
        {name: 'managerType',type:'string'},
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
