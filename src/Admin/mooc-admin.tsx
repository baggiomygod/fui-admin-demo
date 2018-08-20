import * as React from 'react'
import { Row, Col } from 'antd'
import Header from './admin-components/Header'
import Footer from './admin-components/Footer'
import Slider from './admin-components/Slider'
import Home from 'src/pages/home'
import config from 'src/config/app-config'
import 'src/style/common.less'
class Admin extends React.Component{
    public render() {
        return (
                <Row className="container">
                    <Col span={3} className="slider-left">
                        <Slider name={config.name} />
                    </Col>
                    <Col span={21} className="main">
                        <Header/>
                        <Row className="content">
                            <Home />
                            {/* {this.props.children} // 获取父级的hildren */}
                        </Row>
                        <Footer />
                    </Col>
                </Row>
        )
    }
}
export default Admin