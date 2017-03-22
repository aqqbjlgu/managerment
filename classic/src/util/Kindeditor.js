Ext.define("Admin.util.Kindeditor", {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.kindeditor',//xtype名称
    initComponent: function () {
        //this.html = "<textarea id='" + this.getId() + "-input' name='" + this.name + "'></textarea>";
        this.callParent(arguments);
        this.on("render", function (t) {
            //this.inputEL = Ext.get(this.getId() + "-input");
            this.editor = KindEditor.create('textarea[name="' + this.name + '"]', {
                //autoHeightMode: true,
                resizeType: 0,
                height: t.getHeight(),// - 18,//有底边高度，需要减去
                width: t.getWidth(),// - t.getLabelWidth(),//宽度需要减去label的宽度
                basePath: 'kindeditor/',
                uploadJson: '/pic/upload',//路径自己改一下
                //controller中接收的参数名
                filePostName: 'uploadFile',
                wellFormatMode: true,
                newlineTag: 'br',
                //themeType : 'black',
                allowFileManager: true,
                allowPreviewEmoticons: true,
                allowImageUpload: true
            });
        });
    },
    setValue: function (value) {
        if (this.editor) {
            this.editor.html(value);
        }
    },
    reset: function () {
        if (this.editor) {
            this.editor.html('');
        }
    },
    setRawValue: function (value) {
        if (this.editor) {
            this.editor.text(value);
        }
    },
    getValue: function () {
        if (this.editor) {
            return this.editor.html();
        } else {
            return ''
        }
    },
    getRawValue: function () {
        if (this.editor) {
            return this.editor.text();
        } else {
            return ''
        }
    }
});