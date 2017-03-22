Ext.define('Admin.model.organization.PersonModel', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'id', type:'string'},
        {name: 'name', type:'string'},
        {name: 'password', type:'string'},
        {name: 'personOrgPosDtos'},
        {
            name: 'sex', 
            type:'int',
            convert: function(value) {
                //0-女，1-男
                if (value == 0)
                    return '女';
                if (value == 1)
                    return "男";
        }},
        {
            name: 'status', 
            type:'int',
            convert: function(value) {
                //0-女，1-男
                if (value == 0)
                    return '未激活';
                if (value == 1)
                    return "激活";
        }},
        {name: 'idCard', type:'string'},
        {name: 'phone', type:'string'},
        {name: 'nickName', type:'string'},
        {name: 'email', type:'string'},
        {name: 'image', type:'string'},
        {name: 'orgId', type:'string'},
        {name: 'orgName', type:'string'},
        {name: 'personOrgPositionId', type:'string'},
        {name: 'posId', type:'string'},
        {name: 'posName', type:'string'},
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
