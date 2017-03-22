Ext.define('Admin.store.organization.OrganizationTypeStore', {
    extend: 'Ext.data.Store',
    alias: 'store.organization.organizationTypeStore',
    storeId  : 'organizationTypeStore',
    model: 'Admin.model.organization.OrganizationTypeModel',
    autoLoad: 'true',
    pageSize : 10,
    proxy: {
        type: 'ajax',
        url: 'http://rms.youngsun.com:8088/orgType/getAll',
        reader: {
            type: 'json',//
            rootProperty: 'data.content',
            totalProperty: 'data.totalElements'
        }
    }
});