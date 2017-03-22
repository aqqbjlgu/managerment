Ext.define('Admin.model.shop.itemParam.ItemParamModel', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'id',type:'int'},
        {name: 'itemCatId',type:'int'},
        {name: 'paramData',type:'string'},
        {name: 'itemCatName',type:'string'},
        {
            name: 'created',
            type:'string',
            convert:function(val){
                return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
        }},
        {
            name: 'updated',
            type:'string',
            convert:function(val){
                return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
        }}
    ]
});
