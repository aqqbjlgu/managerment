Ext.define('Admin.model.shop.content.ContentModel', {
    extend: 'Admin.model.Base',

    fields: [
        {name: 'id',type:'int'},
        {name: 'categoryId',type:'int'},
        {name: 'title',type:'string'},
        {name: 'subTitle',type:'string'},
        {name: 'titleDesc',type:'string'},
        {name: 'categoryName',type:'string'},
        {name: 'url',type:'string'},
        {name: 'pic',type:'string'},
        {name: 'pic2',type:'string'},
        {name: 'content',type:'string'},
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
