Ext.define('Admin.store.shop.content.ContentStore', {
    extend: 'Ext.data.Store',
    alias: 'store.shop.contentStore',
    storeId  : 'contentStore',
    model: 'Admin.model.shop.content.ContentModel',
    pageSize : 30,
    proxy: {
        type: 'ajax',
        url: '/content/getAllContents/',
        reader: {
            type: 'json',
            rootProperty: 'result',
            totalProperty: 'total'
        }
    },

    autoLoad: true
});