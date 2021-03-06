Ext.define('Admin.store.organization.OrganizationStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.organization.organizationStore',
    storeId  : 'organizationStore',
    model: 'Admin.model.organization.OrganizationModel',
    autoLoad: true,
    folderSort : true,
    proxy: {
        type: 'ajax',
        url: 'http://rms.youngsun.com:8088/org/getAll.do',
        reader: {
            type: 'json',//
            rootProperty: 'data'
        }
    }
});