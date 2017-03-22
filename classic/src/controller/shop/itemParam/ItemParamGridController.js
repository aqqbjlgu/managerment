Ext.define('Admin.controller.shop.item.ItemParamGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.itemParamGridController',

    //init: function() {
    //    var me = this;
    //    //    friendsStore = me.getViewModel().getStore('friends');
    //    //
    //    ////Trigger local sorting once new data is available
    //    //friendsStore.on('load', function (store) {
    //    //    store.sort();
    //    //});
    //    //
    //    ////Sort locally and then update menu
    //    //friendsStore.on('sort', function (store) {
    //    //    me.mutateData(store, store.getRange());
    //    //});
    //
    //    me.callParent(arguments);
    //},

    onAddClick: function(){
        // Create a model instance
        //{name: 'id',type:'int'},
        //{name: 'itemCatId',type:'int'},
        //{name: 'paramData',type:'string'},
        //{
        //    name: 'created',
        //        type:'string',
        //    convert:function(val){
        //    return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
        //}},
        //{
        //    name: 'updated',
        //        type:'string',
        //    convert:function(val){
        //    return val ? Ext.Date.format(new Date(val),"Y-m-d H:i:s"): null;
        //}}
        var rec = new Admin.model.shop.itemParam.ItemParamModel({
            common: '',
            itemCatId: 'Mostly Shady',
            paramData: '',
            created: Ext.Date.clearTime(new Date()),
            updated: Ext.Date.clearTime(new Date())
        });

        this.getStore().insert(0, rec);
        this.cellEditing.startEditByPosition({
            row: 0,
            column: 0
        });
    }
});
