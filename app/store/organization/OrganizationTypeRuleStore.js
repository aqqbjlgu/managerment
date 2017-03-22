Ext.define('Admin.store.organization.OrganizationTypeRuleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.organization.organizationTypeRuleStore',
    storeId  : 'organizationTypeRuleStore',
    model: 'Admin.model.organization.OrganizationTypeRuleModel',
    // autoLoad: 'true',
    pageSize : 10,
    proxy: {
        type: 'ajax',
        url: 'http://rms.youngsun.com:8088/orgType/getOrgTypeByPid.do',
        reader: {
            type: 'json',//
            rootProperty: 'data'
        }
    }
});