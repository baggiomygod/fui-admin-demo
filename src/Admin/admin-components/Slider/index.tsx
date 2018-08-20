
import * as React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu
import MenuConfig from '../../../config/menuConfig'
import './index.less'
interface ITheme {
    theme: any
    current: number
}

interface IMyComponentState {
    menuTreeNode: any,
    navStyle: ITheme
}
interface IProps {
    name: string;
  }
/**
 * <{}, IMyComponentState> 这里是什么意思 什么么不传IMyComponentState 报错：(52,40): Property 'navStyle' does not exist on type 'Readonly<{}>'.
 */
class Slider extends React.Component<IProps, IMyComponentState> {
    public componentWillMount() {
        const navStyle: ITheme = {
            current: 1,
            theme: 'dark' // light
        }
        const menuTreeNode:any = this.renderMenu(MenuConfig)
        this.setState({ // 调用setState方法之后会执行render方法，渲染页面
            menuTreeNode,
            navStyle
        })
    }
    // 菜单渲染
    // data:object[]  报错？
    public renderMenu = (data:any) => { // 箭头函数this保留当前对象
        return data.map((item:any):any => {
            if (item.children) {
                return (
                    <SubMenu title={<span><Icon type="appstore" /><span>{item.title}</span></span>} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    public render () {
       return (
           <div className="slider-wrap">
               <div className="logo">
                <img src={'/assets/logo/' + this.props.name + '-2x.png'} alt=""/>
                <h1>{this.props.name} MS</h1>
               </div>
               <Menu theme={this.state.navStyle.theme}>
                {this.state.menuTreeNode}
               </Menu>
           </div>
       )
   }
}

export default Slider