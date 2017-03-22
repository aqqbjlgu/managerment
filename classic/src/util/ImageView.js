Ext.define("Admin.util.ImageView", {
    extend: 'Ext.view.View',
    alias: 'widget.imageView',//xtype名称
    imageUrl: '',
    //data: function () {
    //    var dataArray = new Array();
    //    alert('88888888888888888');
    //    var urlList = url.split(';');
    //    alert(Array.isArray(urlList));
    //    for (var i = 0; i < urlList.length; i++) {
    //        dataArray[i] = {'src': url};
    //    }
    //    return dataArray;
    //},
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div style="margin-bottom: 10px;" class="thumb-wrap">',
        '<img src="{src}" />',
        '<br/><span>{caption}</span>',
        '</div>',
        '</tpl>'
    ),
    itemSelector: 'div.thumb-wrap',
    multiSelect: true,
    height: 310,
    width:'100%',
    trackOver: true,
    overItemCls: 'x-item-over',
    //itemSelector: 'div.thumb-wrap',
    //plugins: [
    //    //Ext.create('Ext.ux.DataView.DragSelector', {}),
    //    //Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'name'})
    //],
    emptyText: 'No images available',
    store:  Ext.create('Ext.data.Store', {
        id: 'imagesStore',
        fields: [
            {name: 'src', type: 'string'},
            { name:'caption', type:'string' }
        ],
        data: [{src:'http://192.168.0.50/dfs/group1/M00/00/00/wKgAZldxAxyAKtuXAA0NGjO2lJs972.JPG',caption:'aa'}]

        //    function () {
        //    var dataArray = new Array();
        //    alert('88888888888888888');
        //    var url = this.imageUrl.substring(0, this.imageUrl.length - 1);
        //    alert("url=================" + url);
        //    var urlList = url.split(';');
        //    alert(Array.isArray(urlList));
        //    for (var i = 0; i < urlList.length; i++) {
        //        dataArray[i] = {src: url};
        //    }
        //    return dataArray;
        //}
        //[
        //    { src:'http://www.sencha.com/img/20110215-feat-drawing.png'},
        //    { src:'http://www.sencha.com/img/20110215-feat-data.png'},
        //    { src:'http://www.sencha.com/img/20110215-feat-html5.png'},
        //    { src:'http://www.sencha.com/img/20110215-feat-perf.png'}
        //]
    })//,
    //id: 'image-window',
    //title: '图片浏览',
    //width: 750,
    //height: 500,
    //resizable: false,
    //closeAction: 'hide',
    //layout: 'border',
    //imageUrl: '',
    //items: Ext.create('Ext.view.View', {
    //    data: function () {
    //        var dataArray = new Array();
    //        alert('88888888888888888');
    //        var urlList = url.split(';');
    //        alert(Array.isArray(urlList));
    //        for (var i = 0; i < urlList.length; i++) {
    //            dataArray[i] = {'src': url};
    //        }
    //        return dataArray;
    //    },
    //    tpl: new Ext.XTemplate(
    //        '<tpl for=".">',
    //        '<div style="margin-bottom: 10px;" class="thumb-wrap">',
    //        '<img src="{src}" />',
    //        '<br/><span>{caption}</span>',
    //        '</div>',
    //        '</tpl>'
    //    ),
    //    //itemSelector: 'div.thumb-wrap',
    //    multiSelect: true,
    //    height: 310,
    //    trackOver: true,
    //    overItemCls: 'x-item-over',
    //    itemSelector: 'div.thumb-wrap',
    //    plugins: [
    //        //Ext.create('Ext.ux.DataView.DragSelector', {}),
    //        //Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'name'})
    //    ],
    //    emptyText: 'No images available'
    //}),
    //items: [{
    //    xtype: 'datefield',
    //    fieldLabel: 'Start date'
    //}, {
    //    xtype: 'datefield',
    //    fieldLabel: 'End date'
    //}],
    //initComponent: function () {
    //    var url = this.imageUrl.substring(0, this.imageUrl.length - 1);
    //    alert("url=================" + url);
    //    Ext.define('image', {
    //        extend: 'Ext.data.Model',
    //        fields: [
    //            {name: 'src', type: 'string'},
    //            { name:'caption', type:'string' }
    //        ]
    //    });
    //    //alert('3333333333333333');
    //    ////alert("data=================" + data()[0].src)
    //    //Ext.create('Ext.data.Store', {
    //    //    id: 'imagesStore',
    //    //    model: image,
    //    //    data: function () {
    //    //        var dataArray = new Array();
    //    //        alert('88888888888888888');
    //    //        var urlList = url.split(';');
    //    //        alert(Array.isArray(urlList));
    //    //        for (var i = 0; i < urlList.length; i++) {
    //    //            dataArray[i] = {'src': url};
    //    //        }
    //    //        return dataArray;
    //    //    }
    //    //    //[
    //    //    //    { src:'http://www.sencha.com/img/20110215-feat-drawing.png'},
    //    //    //    { src:'http://www.sencha.com/img/20110215-feat-data.png'},
    //    //    //    { src:'http://www.sencha.com/img/20110215-feat-html5.png'},
    //    //    //    { src:'http://www.sencha.com/img/20110215-feat-perf.png'}
    //    //    //]
    //    //});
    //    //this.items = Ext.create('Ext.view.View', {
    //    //    store: Ext.data.StoreManager.lookup('imagesStore'),
    //    //    tpl: imageTpl,
    //    //    itemSelector: 'div.thumb-wrap',
    //    //    emptyText: 'No images available'
    //    //});
    //    //alert('7777777777777777777');
    //    //this.callParent();
    //}
});