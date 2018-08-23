import * as React from 'react'
import { Layout } from 'antd';
import SiderMenus from 'src/App/app-components/menus/menu'
// import Avatar from 'src/App/app-components/Avatar'
import ComHeader from 'src/App/app-components/Header'
const { Header, Sider, Content } = Layout;
import './layout.less'
// import SiderMenus from '../menus/menu';

class LayoutDemo extends React.Component {
  public state = {
    collapsed: false,
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  public render() {
    // 子元素调用sliderTrigger传入collapsed
    const bindSliderTrigger = (collapsed:boolean) => {
        this.setState({
            collapsed
        })
    }
    return (
      <Layout className="app-layout-wrap">
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}>
          <div className="logo" />
          <SiderMenus />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <ComHeader backgroundColor="#fff" 
                        showLogoIcon="icon" 
                        sliderTrigger={bindSliderTrigger}
                        avatarColor="#001529" />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
              {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutDemo