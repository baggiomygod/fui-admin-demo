
const MenuConfig: object[] = [
    {
        title: '首页',
        key: '/admin/home',
        icon: 'home'
    },
    {
        title: '数据可视化',
        key: '/admin/charts',
        icon: 'bars',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar',
                icon: 'bar-chart'
            },
            {
                title: '饼图',
                key: '/admin/charts/pie',
                icon: 'pie-chart'
            },
            {
                title: '折线图',
                key: '/admin/charts/line',
                icon: 'line-chart'
            },
            {
                title: 'geo地图',
                key: '/admin/charts/geo',
                icon: 'environment-o'
            },
        ]
    },
    {
        title: 'cms',
        key: '/admin/mooc',
        children: [
            {
                title: '富文本',
                key: '/admin/cms/rich',
                icon: 'file-markdown'
            },
            {
                title: '人员管理',
                key: '/admin/cms/person',
                icon: 'user'
            },
            {
                title: '团队管理',
                key: '/admin/cms/user',
                icon: 'team'
            },
            {
                title: '车辆地图',
                key: '/admin/cms/carMap',
                icon: 'car',
                disabled: 'disabled'
            },
        ]
    },
    {
        title: 'antd UI',
        key: '/admin/ui',
        icon: 'ant-design',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons',
                icon: 'caret-down'
            },
            {
                title: '弹框',
                key: '/admin/ui/dialogs',
                icon: 'laptop'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loadings',
                icon: 'loading-3-quarters'
            },
            {
                title: '通知提醒',
                key: '/admin/ui/message',
                icon: 'mail'

            },
            {
                title: '列表',
                key: '/admin/ui/list',
                icon: 'bars'

            },
            ,
            {
                title: 'tips',
                key: '/admin/ui/tips',
                icon: 'message'
            },
            {
                title: 'Tab页签',
                key: '/admin/ui/tabs',
                icon: 'tag-o'

            },
            {
                title: '图片画廊',
                key: '/admin/ui/pic',
                icon: 'picture'

            },
            {
                title: '轮播图',
                key: '/admin/ui/banners',
                icon: 'picture'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        icon: 'form',
        children: [
            {
                title: '登录',
                key: '/admin/form/login',
                icon: 'login'
            },
            {
                title: '注册',
                key: '/admin/form/reg',
                icon: 'user-add'
            },
            {
                title: '搜索',
                key: '/admin/form/search',
                icon: 'search'
            },
            {
                title: '动态表单',
                key: '/admin/form/dynamic',
                icon: 'plus'
            },
            
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/table/basic',
                icon: 'table'
            },
            {
                title: '高级表格',
                key: '/admin/table/high',
                icon: 'table'
            }
        ]
    },
   
    
    {
        title: '权限设置',
        key: '/admin/permission',
        icon: 'setting'
    }
]
export default MenuConfig