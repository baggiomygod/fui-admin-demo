import * as React from 'react'
import { Row, Col, Icon } from 'antd'
import Avatar from 'src/App/app-components/Avatar'
import './index.less'
interface IHeaderProps {
    backgroundColor: string | undefined
    showLogoIcon: string
    sliderTrigger?: any
    avatarColor?:string
}
class Header extends React.Component<IHeaderProps> {
    public state = {
        collapsed: true
    }
    constructor(props:IHeaderProps) {
        super(props)
        this.logoIcon = this.logoIcon.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    public toggle() {
        this.setState({
          collapsed: !this.state.collapsed,
        });
        // 修改父元素collapsed
        this.props.sliderTrigger(this.state.collapsed)
      }
    public logoIcon ():any {
        return this.props.showLogoIcon === 'logo'
                ? <div className="header-logo" />
                : <Icon className="trigger"
                        onClick={this.toggle}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
    }
    public render () {
        const backgroundColor:any = {
           backgroundColor: this.props.backgroundColor || 'rgba(74,169,255,1)'
        }
     
        return (
            <Row className="header-wrap" style={backgroundColor}>
                <Col span={2} >
                    {this.logoIcon()}
                </Col>
                <Col span={20} />
                <Col span={2}>
                    <Avatar color={this.props.avatarColor || '#fff'} />
                </Col>
            </Row>
        )
    }
}

export default Header