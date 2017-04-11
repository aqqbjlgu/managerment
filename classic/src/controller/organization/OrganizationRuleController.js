Ext.define('Admin.controller.Organization.OrganizationRuleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.organizationRuleController',


    onDrop: function (onRec, rec, dropPosition, title) {
        var dropOn = onRec ? ' ' + dropPosition + ' ' + onRec.get('name') : ' on empty view';

        // KitchenSink.toast(title, 'Dropped ' + rec.get('name') + dropOn);
    },

    onDropGrid1: function (node, data, dropRec, dropPosition) {
        this.onDrop(dropRec, data.records[0], dropPosition, 'Drag from right to left');
    },

    onDropGrid2: function (node, data, dropRec, dropPosition) {
        this.onDrop(dropRec, data.records[0], dropPosition, 'Drag from left to right');
    },

    onResetClick: function () {
        this.lookupReference('grid1').getStore().reload();
        this.lookupReference('grid2').getStore().removeAll();
    },

    onQuery: function (value) {
        var value = this.lookupReference('queryField').getValue();
        var store = this.lookupReference('grid1').getStore();
        var filters = store.getFilters();//当前表格的filter
        if(value){//有输入值,添加filter
            this.nameFilter = filters.add({
                id:'nameField',
                property:'name',//通过name属性过滤
                value:value,//值为搜索框输入的值
                anyMatch:true,//模糊匹配
                caseSensitive:false
            });
        }else if(this.nameFilter){//未输入，则移除filter
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    }
});
