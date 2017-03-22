Ext.define('Admin.store.organization.PositionStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.organization.positionStore',
    storeId  : 'positionStore',
    model: 'Admin.model.organization.PositionModel',
    autoLoad: 'true',
    proxy: {
        type: 'ajax',
        url: 'http://rms.youngsun.com:8088/position/getAll/',
        reader: {
            type: 'json',//
            rootProperty: 'data'
        }
    }
});