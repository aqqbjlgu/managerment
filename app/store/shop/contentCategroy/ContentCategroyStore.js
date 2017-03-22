Ext.define('Admin.store.shop.contentCategroy.ContentCategroyStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.shop.itemParamsStore',
    storeId  : 'contentCategroyStore',
    model: 'Admin.model.shop.contentCategroy.ContentCategroyModel',
    pageSize : 30,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/content/categroy/all',
        reader: {
            type: 'json'//,
            //rootProperty: 'result',
            //totalProperty: 'total'
        }
    },

    autoLoad: true
});