Ext.define('Admin.store.shop.item.Items', {
    extend: 'Ext.data.Store',
    alias: 'store.shop.item',
    storeId  : 'itemStore',
    model: 'Admin.model.shop.item.Item',
    //autoLoad: 'true',
    pageSize : 30,
    proxy: {
        type: 'ajax',
        url: '/item/getAllItems',
        //params:{page:0,rows:50},
        //url: '/system/shop/item/Items.json',
        //api: {
        //    read : 'system/shop/item/Items.action'
        //},
        reader: {
            type: 'json',//
            rootProperty: 'result',
            totalProperty: 'total'
        }
    },

    autoLoad: true
});