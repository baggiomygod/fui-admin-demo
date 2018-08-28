import * as React from 'react'
import { Card, Row, Col } from 'antd'
import { NormalPie, RingPie} from 'src/components/echarts/pies'
import './index.scss'

class PiePage extends React.Component{
    public state = {
        width: 450,
        height: 450
    }
    public childPieRef:any = React.createRef()
    public childRingRef:any = React.createRef()

    constructor(props: any) {
        super(props)
        this.getCardContainerStyle = this.getCardContainerStyle.bind(this)
    }
    public componentDidMount() {
        this.getCardContainerStyle()
    }

    public getCardContainerStyle() {
        const pieContainer:any = document.querySelector('.card-container')
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
            this.childPieRef.resize()
            this.childRingRef.resize()
        }
    }

    public onPieRef = (child:any) => {
        this.childPieRef = child
    }
    public onRingRef = (child:any) => {
        this.childRingRef = child
    }
    public render () {
        return (
            <Row className="pies-page-wrap" gutter={10}>
                <Col span={12}>
                    <Card title="饼图" className="card-container">
                        <NormalPie onRef={this.onPieRef} width={this.state.width} height={this.state.height}/>
                    </Card>
                </Col>
                <Col span={12} >
                    <Card title="环形饼图" className="ring-pie">
                        <RingPie onRef={this.onRingRef} width={this.state.width} height={this.state.height}/>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default PiePage