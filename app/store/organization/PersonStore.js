Ext.define('Admin.store.organization.PersonStore', {
    extend: 'Ext.data.Store',
    alias: 'store.organization.personStore',
    storeId  : 'personStore',
    model: 'Admin.model.organization.PersonModel',
    autoLoad: 'true',
    pageSize : 10,
    proxy: {
        type: 'ajax',
        url: 'http://rms.youngsun.com:8088/person/getAll',
        reader: {
            type: 'json',//
            rootProperty: 'data.content',
            totalProperty: 'data.totalElements'
        }
    }
});