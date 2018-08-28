import * as React from 'react'
import { Card, Row, Col } from 'antd'
import {LineArea} from 'src/components/echarts/lines';
class LinePage extends React.Component{
    public state = {
        width: '90%',
        height: 450
    }
    public childRef:any = React.createRef();
    constructor(props: any) {
        super(props)
        this.getCardContainerStyle = this.getCardContainerStyle.bind(this)
    }
    public componentDidMount() {
        this.getCardContainerStyle()
    }
    public getCardContainerStyle() {
        const cardContainer:any = document.querySelector('.line-card')
        const containerWidth = cardContainer.clientWidth
        const containerHeight = cardContainer.clientHeight
        this.setState({
            width: containerWidth,
            height: containerHeight
        })
        window.onresize = () => {
            this.setState({
                width: cardContainer.clientWidth,
            })
            this.childRef.resize()
        }
    }
    
    // 子元素
    public onChildRef = (child:any) => {
        this.childRef = child
    }
    public render () {
        return (
            <Row gutter={10} className="line-page-wrap">
                <Col span={24}>
                    <Card title="折线图" className="line-card">
                        <LineArea onRef={this.onChildRef} width={this.state.width} height={this.state.height} />
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default LinePage