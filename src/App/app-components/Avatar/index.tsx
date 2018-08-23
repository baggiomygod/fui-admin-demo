import * as React from 'react'
import { Icon, Dropdown, Menu } from 'antd'
import './index.less'
interface IAvatar{
    color?:string
}
class Avatar extends React.Component<IAvatar>{
    constructor(props: IAvatar) {
        super(props)
    }
    public render () {
        const iconColor = {
            color: this.props.color
        }
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="3">用户信息</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">退出</Menu.Item>
            </Menu>
        )
        return (
            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
            <div className="avatar-wrap">
                    <div style={{height: 50, width: 50, marginRight: 8}} className="avatar" />
                    <Icon type="caret-down" className="down-icon" style={iconColor} />
            </div>
            </Dropdown>

        )
    }
}

export default Avatar