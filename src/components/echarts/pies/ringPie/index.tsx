import * as React from 'react'
import * as echarts from 'echarts/lib/echarts'
import createOptions from './ringOptions'

interface IRingProps {
    width?: number
    height?: number
    ringData?: any[] | undefined
    onRef: any
}
class NoramlPie extends React.Component<IRingProps>{
    public pieChart: any = {}
    constructor(props:IRingProps) {
        super(props)
        this.initRing = this.initRing.bind(this)
        this.resize = this.resize.bind(this)
    }
    public componentDidMount() {
        this.props.onRef(this) // 调用父组件onChildRef方法,传入this
        this.initRing()
    }
    public initRing () {
        const pieContaierEle:any = document.getElementById('ring-pie')
        this.pieChart = echarts.init(pieContaierEle)
        this.pieChart.setOption(createOptions(this.props.ringData))
    }

    // 重置图标尺寸
    public resize() {
        this.pieChart.resize()
    }
    public render () {
        const style = {
            width: this.props.width,
            height: this.props.height
        }
        
        return (
            <div id="ring-pie" style={style}>ring pie</div>
        )
    }
}

export default NoramlPie