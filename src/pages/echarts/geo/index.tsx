import * as React from 'react'

import * as echarts from 'echarts/lib/echarts'
import {Cascader} from 'antd'

// echarts
import 'echarts-gl/dist/echarts-gl'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/geo';

// import geoOptions from './geoOptions/geoMapOpt' // 2d
import geoOptions from './geoOptions/map3d' // 3d
const zhejiang = require('./geoMapData/geometryProvince/33.json') // 浙江
const hangzhou = require('./geoMapData/geometryCouties/330100.json') // 杭州
const ningbo = require('./geoMapData/geometryCouties/330200.json') // 宁波
const wenzhou = require('./geoMapData/geometryCouties/330300.json') // 温州
const jiaxing = require('./geoMapData/geometryCouties/330400.json') // 嘉兴
const huzhou = require('./geoMapData/geometryCouties/330500.json') // 湖州
const shaoxing = require('./geoMapData/geometryCouties/330600.json') // 绍兴
const jinhua = require('./geoMapData/geometryCouties/330700.json') // 金华
const quzhou = require('./geoMapData/geometryCouties/330800.json') // 衢州
const zhoushan = require('./geoMapData/geometryCouties/330900.json') // 舟山
const taizhou = require('./geoMapData/geometryCouties/331000.json') // 台州
const lishui = require('./geoMapData/geometryCouties/331100.json') // 丽水

const cascaderOptions = require('./mock/provincesCitiesOpt.json')
import requestSeriesData from './mock/requestSeriesData'

class Geo extends React.Component{
    public state = {
        geoJson: {
            zhejiang,         
            hangzhou,
            ningbo,
            wenzhou,
            jiaxing,
            huzhou,
            shaoxing,
            jinhua,
            quzhou,
            zhoushan,
            taizhou,
            lishui,
        }
    }
    public mapChart:any = {}

    constructor(props:any) {
        super(props)
        this.changeMap = this.changeMap.bind(this)
    }
    public componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const geoContainerEle:any = document.getElementById('geo-container')
        this.mapChart = echarts.init(geoContainerEle);
        echarts.registerMap('zhejiang', this.state.geoJson.zhejiang)
        this.mapChart.setOption(geoOptions('zhejiang', requestSeriesData()));
    }
    public changeMap (val:any) {
        const selection: string = val[1] ? val[1] : val[0]
        echarts.registerMap(selection, this.state.geoJson[selection])
        this.mapChart.clear();

        this.mapChart.setOption(geoOptions(selection));
    }
    public render() {
        
        return (
            <div className="gro-wrap">
                <div className="filter-map" style={{marginBottom: 10}}>
                    <Cascader options={cascaderOptions} onChange={this.changeMap} changeOnSelect={true} placeholder="请选择地区" />
                </div>
                <div id="geo-container" style={{ width: '100%', height: 620, backgroundColor: 'rgba(23,13,63,1)' }} />
            </div>
        )
    }
}

export default Geo