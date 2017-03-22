Ext.define('Admin.model.shop.contentCategroy.ContentCategroyModel', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'id',type:'int'},
        {name: 'parentId',type:'int'},
        {name: 'name',type:'string'},
        {
            name: 'sortOrder',
            type:'int'//,
        },
        {name: 'isParent',type:'boolean'},
        {
            name: 'status',
            type:'string',
            convert: function(value) {
                //1-正常，2-下架，3-删除
                if (value == 1)
                    return '正常';
                if (value == 2)
                    return "下架";
                if (value == 3)
                    return "删除";
                return "其它";
            }
        },
        {
            name: 'parent',
            type:'string',
            convert: function(value,record) {
                if(value){
                    if(value.length>10){
                        return Ext.decode(value).value;
                    }
                    return value;
                }
                return null;
            }
        },
        {
            name: 'created',
            type:'string',
            convert:function(val){
                return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
            }
        },
        {
            name: 'updated',
            type:'string',
            convert:function(val){
                return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
            }
        }

    ]
});
