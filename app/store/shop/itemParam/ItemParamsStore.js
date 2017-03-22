Ext.define('Admin.store.shop.itemParam.ItemParamsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.shop.itemParamsStore',
    storeId  : 'itemParamStore',
    model: 'Admin.model.shop.itemParam.ItemParamModel',
    pageSize : 30,
    proxy: {
        type: 'ajax',
        url: '/item/param/getAll',
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