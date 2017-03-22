Ext.define('Admin.store.organization.OrganizationRuleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.organization.organizationRuleStore',
    storeId  : 'organizationRuleStore',
    model: 'Admin.model.organization.OrganizationModel',
    autoLoad: true,
    folderSort : true,
    pageSize : 10,
    proxy: {
        type: 'ajax',
        url: 'http://rms.youngsun.com:8088/org/getAllWithoutTree.do',
        reader: {
            type: 'json',//
            rootProperty: 'data.content',
            totalProperty: 'data.totalElements'
        }
    }
});