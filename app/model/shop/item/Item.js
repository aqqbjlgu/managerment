Ext.define('Admin.model.shop.item.Item', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'id',type:'int'},
        {name: 'title',type:'string'},
        {name: 'sellPoint',type:'string'},
        {
            name: 'price',
            type:'int'//,
            //convert:function(val){
            //    return val ? val/100: 0;
            //}
        },
        {name: 'num',type:'int'},
        {name: 'barcode',type:'string'},
        {name: 'image',type:'string'},
        {name: 'cid',type:'int'},
        {
            name: 'status',
            type:'string',
            convert: function(value) {
                //1-正常，2-下架，3-删除
                if (value === 1)
                    return '正常';
                if (value === 2)
                    return "下架";
                if (value === 3)
                    return "删除";
                return "其它";
        }},
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
        }},
        {name: 'cidCatName',type:'string'},
        {name: 'desc',type:'string'}

    ]
});
