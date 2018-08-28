import * as React from 'react'
import * as echarts from 'echarts/lib/echarts'
import createOptions from './createOptions'

interface INormalPieProps  {
    width?: number
    height?: number
    barData?: any[] | undefined 
    onRef: any
}

class HorizontalBar extends React.Component<INormalPieProps> {
    public barChart: any = {}
    constructor(props:INormalPieProps) {
        super(props)
        this.initPie = this.initPie.bind(this)
        this.resize = this.resize.bind(this)
    }
    public componentDidMount() {
        this.props.onRef(this) // 调用父组件onChildRef方法,传入this
        this.initPie()
    }

    public initPie () {
        const pieContaierEle:any = document.getElementById('vertical-bar-container')
        this.barChart = echarts.init(pieContaierEle)
        this.barChart.setOption(createOptions(this.props.barData))
    }
  
    // 重置图标尺寸
    public resize() {
        this.barChart.resize()
    }
    public render () {
        const style = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <div id="vertical-bar-container" style={style} />
        )
    }
}

export default HorizontalBar