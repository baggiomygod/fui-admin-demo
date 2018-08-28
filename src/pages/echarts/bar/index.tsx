import * as React from 'react'
import { Card, Row, Col } from 'antd'
import {HorizontalBar, VerticalBar} from 'src/components/echarts/bars'
import './index.scss'
class BarPage extends React.Component{
    public state = {
        width: 450,
        height: 450
    }
    public childHorRef:any = React.createRef()
    public childVerRef:any = React.createRef()
    
    constructor(props: any) {
        super(props)
    }
    public componentDidMount() {
        this.getCardContainerStyle()
    }

    public getCardContainerStyle() {
        const pieContainer:any = document.querySelector('.bar-container')
        const containerWidth = pieContainer.clientWidth
        const containerHeight = pieContainer.clientHeight
        this.setState({
            width: containerWidth,
            height: containerHeight
        })

        window.onresize = () => {
            this.setState({
                width: pieContainer.clientWidth - 30,
            })
            this.childHorRef.resize()
            this.childVerRef.resize()
        }
    }
    public onHorRef = (child: any) => {
        this.childHorRef = child
    }
    public onVerRef = (child: any) => {
        this.childVerRef = child
    }
    public render () {
        return (
            <Row className="bar-page-wrap" gutter={10} >
                <Col span={12}>
                    <Card title="柱状图" className="bar-container">
                        <HorizontalBar onRef={this.onHorRef} width={this.state.width} height={this.state.height}/>
                    </Card>
                </Col>
                <Col span={12} >
                    <Card title="柱状图" className="bar-container">
                        <VerticalBar onRef={this.onVerRef} width={this.state.width} height={this.state.height}/>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default BarPage