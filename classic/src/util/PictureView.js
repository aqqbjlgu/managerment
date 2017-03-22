Ext.define("Admin.util.PictureView", {
    extend: 'Ext.window.Window',
    alias: 'widget.pictureView',//xtype名称
    id: 'image-window',
    title: '图片浏览',
    width: '70%',
    height: '70%',
    resizable: false,
    scrollable: true,
    maximizable:true,
    closeAction: 'close',
    layout: 'border',
    imageUrl:'',
    items:[{
        xtype: 'panel',
        region: 'center',
        layout:'fit',
        bodyStyle : 'background-color:#E5E3DF;',
        frame:false,
        border:false,
        id:'aaaaaaaaaaaaaa',
        html :'<div id="mapPic"><div class="nav">'
        +'<div class="up" id="up"></div><div class="right" id="right"></div>'
        +'<div class="down" id="down"></div><div class="left" id="left"></div>'
        +'<div class="zoom" id="zoom"></div><div class="in" id="in"></div>'
        +'<div class="out" id="out"></div></div>'
        +'<img id="view-image" src="http://192.168.0.50/dfs/group1/M00/00/00/wKgAZldxAxyAKtuXAA0NGjO2lJs972.JPG" border="0" style="cursor: url(http://192.168.0.50/dfs/group1/M00/00/00/wKgAZldxAxyAKtuXAA0NGjO2lJs972.JPG), default;" > </div>'
        //listeners:{
        //    render: function (c) {
        //        alert(this.up('window').imageUrl);
        //        alert(this.up('window').down('panel').id);
        //        this.up('window').down('panel').html = '<div id="mapPic"><div class="nav">'
        //            +'<div class="up" id="up"></div><div class="right" id="right"></div>'
        //            +'<div class="down" id="down"></div><div class="left" id="left"></div>'
        //            +'<div class="zoom" id="zoom"></div><div class="in" id="in"></div>'
        //            +'<div class="out" id="out"></div></div>'
        //            +'<img id="view-image" src="http://192.168.0.50/dfs/group1/M00/00/00/wKgAZldxAxyAKtuXAA0NGjO2lJs972.JPG" border="0" style="cursor: url(http://192.168.0.50/dfs/group1/M00/00/00/wKgAZldxAxyAKtuXAA0NGjO2lJs972.JPG), default;" > </div>'
        //    }
        //}
    }],
    buttons: [{
        text: '取消',
        handler: function () {
            this.up('window').close();
        }
    }],
    listeners: {
        show: function () {
            this.pageInit();
        }
    },
    /**
     * 初始化
     */
    pageInit: function () {
        var image = Ext.get('view-image');
        if (image != null) {
            Ext.get('view-image').on({
                'mousedown': {
                    fn: function () {
                        this.setStyle('cursor', 'url(http://192.168.0.50/dfs/group1/M00/00/00/wKgAZldxAxyAKtuXAA0NGjO2lJs972.JPG),default;');
                    }, scope: image
                },
                'mouseup': {
                    fn: function () {
                        this.setStyle('cursor', 'url(http://192.168.0.50/dfs/group1/M00/00/00/wKgAZldxAxyAKtuXAA0NGjO2lJs972.JPG),move;');
                    }, scope: image
                },
                'dblclick': {
                    fn: function () {
                        this.zoom(image, true, 1.2);
                    }
                }
            });
            new Ext.dd.DD(image, 'pic');

            //image.center();//图片居中

            //获得原始尺寸
            image.osize = {
                width: image.getWidth(),
                height: image.getHeight()
            };

            Ext.get('up').on('click', function () {
                this.imageMove('up', image);
            });       //向上移动
            Ext.get('down').on('click', function () {
                this.imageMove('down', image);
            });   //向下移动
            Ext.get('left').on('click', function () {
                this.imageMove('left', image);
            });   //左移
            Ext.get('right').on('click', function () {
                this.imageMove('right', image);
            }); //右移动
            Ext.get('in').on('click', function () {
                this.zoom(image, true, 1.5);
            });        //放大
            Ext.get('out').on('click', function () {
                this.zoom(image, false, 1.5);
            });      //缩小
            Ext.get('zoom').on('click', function () {
                this.restore(image);
            });            //还原
        }
    },
    /**
     * 图片移动
     */
    imageMove: function (direction, el) {
        el.move(direction, 50, true);
    },
    /**
     *
     * @param el 图片对象
     * @param type true放大,false缩小
     * @param offset 量
     */
    zoom: function (el, type, offset) {
        var width = el.getWidth();
        var height = el.getHeight();
        var nwidth = type ? (width * offset) : (width / offset);
        var nheight = type ? (height * offset) : (height / offset);
        var left = type ? -((nwidth - width) / 2) : ((width - nwidth) / 2);
        var top = type ? -((nheight - height) / 2) : ((height - nheight) / 2);
        el.animate(
            {
                height: {to: nheight, from: height},
                width: {to: nwidth, from: width},
                left: {by: left},
                top: {by: top}
            },
            null,
            null,
            'backBoth',
            'motion'
        );
    },
    /**
     * 图片还原
     */
    restore: function (el) {
        var size = el.osize;

        //自定义回调函数
        function center(el, callback) {
            el.center();
            callback(el);
        }

        el.fadeOut({
            callback: function () {
                el.setSize(size.width, size.height, {
                    callback: function () {
                        center(el, function (ee) {//调用回调
                            ee.fadeIn();
                        });
                    }
                });
            }
        });
    }
});