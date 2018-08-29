import * as React from 'react'
import { Menu, Icon } from 'antd';
import MenuConfig from '../../../config/menuConfig';
import { Link } from 'react-router-dom'

import './menu.less'

const { SubMenu } = Menu;
interface ITheme {
    theme: any
    current: number
}
interface IMyComponentState {
    menuTreeNode: any,
    navStyle: ITheme
}
// export interface IProps {
//     name: string;
//   }
class SiderMenus extends React.Component<{}, IMyComponentState> {

    public componentWillMount() {
        const navStyle: ITheme = {
            current: 1,
            theme: 'dark'
        }
        const menuTreeNode:any = this.renderMenu(MenuConfig)
        this.setState({
            navStyle,
            menuTreeNode
        })
    }

    public renderMenu = (data:any) => {
        return data.map((item:any, index:number):any => {
            if (item.children) {
                return (
                    <SubMenu title={<span><Icon type="appstore-o" /><span>{item.title}</span></span>} key={index}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key} disabled={item.disabled}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
    }
    public render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {this.state.menuTreeNode}
                {this.props.children}
            </Menu>
        )
    }
}

export default SiderMenus