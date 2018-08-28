import * as React from 'react'
import * as echarts from 'echarts/lib/echarts'
import createLineOprion from './lineAreaOption'
interface ILineProps {
    width?: number | string
    height?: number
    lineData?: any[]
    onRef: any
}
class LineArea extends React.Component<ILineProps>{
    public lineChart:any = {}
    constructor(props:ILineProps) {
        super(props)
        this.initLine = this.initLine.bind(this)
        this.resize = this.resize.bind(this)
    }
    public componentDidMount() {
        this.props.onRef(this) // 调用父组件onChildRef方法,传入this
        this.initLine()
    }
    public initLine () {
        const lineContainerEle:any = document.getElementById('line-area-contaoner')
        this.lineChart = echarts.init(lineContainerEle)
        this.lineChart.setOption(createLineOprion())
    }
    // 重置图标尺寸
    public resize() {
        this.lineChart.resize()
    }
    public render () {
        const style = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <div id="line-area-contaoner" style={style}/>
        )
    }
}

export default LineArea