import * as React from 'react'
import './PersonPostionPage.less'
declare global {
    interface Window { BMap: any; } // tslint:disable-line
}
window.BMap = window.BMap || {}
// window.BMAP_ANIMATION_BOUNCE = window.BMAP_ANIMATION_BOUNCE || {}
class PersonPositionPage extends React.Component{
    public state = {
        positionDate: {
            time: '',
            lng: '',
            lat: ''
        }
    }
    public map: any = {}
    public BMap: any = window.BMap
    constructor(props:any) {
        super(props)
        this.renderMap = this.renderMap.bind(this)
        this.addMarker = this.addMarker.bind(this)
        this.markers = this.markers.bind(this)
    }
    public componentDidMount() {
        this.renderMap()
    }
    // 渲染地图
    public renderMap () {
        this.map =new this.BMap.Map('position-container')
        this.map.centerAndZoom(new this.BMap.Point(120.152449, 30.204392), 12)
        this.markers()
    }
    public addMarker (point: number[]) {
        const pointObj = new this.BMap.Point(point[0], point[1]);
        const marker = new this.BMap.Marker(pointObj)  // 创建标注
        this.map.addOverlay(marker)             // 将标注添加到地图中
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE) // 跳动的动画
    }
    public markers() {
        const points = [
            {lng:120.241057,lat:30.107303},
            {lng:120.142057,lat:30.147203},
            {lng:120.190057,lat:30.197403},
            {lng:120.213057,lat:30.247503},
            {lng:120.264057,lat:30.267103}
        ]
        points.forEach(point => {
            this.addMarker([point.lng, point.lat])
        })
    }
    public render () {
        return (
            <div className="person-position-wrap">
                <div id="position-container" />
            </div>
        )
    }
}

export default PersonPositionPage