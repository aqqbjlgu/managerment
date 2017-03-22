Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [
            {
                text:   '控制面板',
                view:   'dashboard.Dashboard',
                leaf:   true,
                iconCls: 'right-icon new-icon x-fa fa-desktop',
                routeId: 'dashboard'
            },
            //{
            //    text:   'Email',
            //    view:   'email.Email',
            //    iconCls: 'right-icon hot-icon x-fa fa-send ',
            //    leaf:   true,
            //    routeId: 'email'
            //
            //},
            //{
            //    text:   'Profile',
            //    view:   'profile.UserProfile',
            //    leaf:   true,
            //    iconCls: 'x-fa fa-user',
            //    routeId:'profile'
            //},
            //{
            //    text:   'Search results',
            //    view:   'search.Results',
            //    leaf:   true,
            //    iconCls: 'x-fa fa-search',
            //    routeId:'search'
            //},
            //{
            //    text: 'FAQ',
            //    view: 'pages.FAQ',
            //    leaf: true,
            //    iconCls: 'x-fa fa-question',
            //    routeId:'faq'
            //},
            {
                text: '商品后台',
                view: 'shop.item.Item',
                leaf: false,
                iconCls: 'x-fa fa-file-o',
                routeId:'shop',
                children:[
                    {
                        text: '商品管理',
                        view: 'shop.item.Item',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'shop.item.item'
                    },
                    {
                        text: '商品参数模版管理',
                        view: 'shop.itemParam.ItemParam',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'shop.itemParam.itemParam'
                    },
                    {
                        text: '商城内容分类管理',
                        view: 'shop.contentCategroy.ContentCategroy',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'shop.contentCategroy.ContentCategroy'
                    },
                    {
                        text: '商城内容管理',
                        view: 'shop.content.Content',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'shop.content.Content'
                    },
                    {
                        text: '404 Error',
                        view: 'pages.Error404Window',
                        leaf: true,
                        iconCls: 'x-fa fa-exclamation-triangle',
                        routeId:'pages.404'
                    },
                    {
                        text: '500 Error',
                        view: 'pages.Error500Window',
                        leaf: true,
                        iconCls: 'x-fa fa-times-circle',
                        routeId:'pages.500'
                    },
                    {
                        text: 'Lock Screen',
                        view: 'authentication.LockScreen',
                        leaf: true,
                        iconCls: 'x-fa fa-lock',
                        routeId:'authentication.lockscreen'
                    }
                ]
            },
            {
                text: '组织机构管理',
                leaf: false,
                iconCls: 'x-fa fa-pencil-square-o',
                routeId:'rms.organize',
                children:[
                    {
                        text: '组织机构类型',
                        view: 'organization.OrganizationTypeView',
                        leaf: true,
                        iconCls: 'x-fa fa-pencil-square-o',
                        routeId:'rms.organize.type'
                    },
                    {
                        text: '组织机构',
                        view: 'organization.OrganizationView',
                        leaf: true,
                        iconCls: 'x-fa fa-pencil-square-o',
                        routeId:'rms.organize.org'
                    },
                    {
                        text: '组织机构类型规则',
                        view: 'organization.OrganizationTypeRuleView',
                        leaf: true,
                        iconCls: 'x-fa fa-pencil-square-o',
                        routeId:'rms.organize.typeRule'
                    },
                    {
                        text: '岗位',
                        view: 'organization.PositionView',
                        leaf: true,
                        iconCls: 'x-fa fa-pencil-square-o',
                        routeId:'rms.organize.position'
                    },
                    {
                        text: '人员',
                        view: 'organization.PersonView',
                        leaf: true,
                        iconCls: 'x-fa fa-pencil-square-o',
                        routeId:'rms.organize.person'
                    }
                ]
            }
            //{
            //    text:   'Widgets',
            //    view:   'widgets.Widgets',
            //    leaf:   true,
            //    iconCls: 'x-fa fa-flask',
            //    routeId:'widgets'
            //},
            //{
            //    text:   'Forms',
            //    view:   'forms.Wizards',
            //    leaf:   true,
            //    iconCls: 'x-fa fa-edit',
            //    routeId:'forms'
            //},
            //{
            //    text: 'Charts',
            //    view: 'charts.Charts',
            //    iconCls: 'x-fa fa-pie-chart',
            //    leaf:   true,
            //    routeId:'charts'
            //}
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
