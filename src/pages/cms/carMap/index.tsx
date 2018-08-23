import * as React from 'react'
import {Card, Row, Col} from 'antd'
import CarForm from './CarForm'
import carIcon from './img/car.png'
// import mapStyle from './mapStyle'
interface ICarInfo {
    owner:string
    phone:number | string
    plate:string
    type:string
}
interface ICarState{
    carInfo: ICarInfo
    drivingData: any
}
// 解决:Property "BMap is not exist on ‘window’---类型“Window”上不存在属性“BMap”"
declare global {
    interface Window { BMap: any; } // tslint:disable-line
}
window.BMap = window.BMap || {};
class BikeMapPage extends React.Component{
    public state:ICarState = {
        carInfo: {
            owner: '',
            phone: '',
            plate: '',
            type: '',
        },
        drivingData: {
            start:{},
            end:{}
        }
    }
    public map:any = {}
    public BMap:any = window.BMap
    constructor(props:any) {
        super(props)
        this.renderMap = this.renderMap.bind(this)
        this.clearMap = this.clearMap.bind(this)
        this.renderDriving = this.renderDriving.bind(this)
        this.renderLushu = this.renderLushu.bind(this)
        this.formatePoints = this.formatePoints.bind(this)
        
    }
    public componentDidMount() {
        this.renderMap()
    }
    // 清除覆盖物
    public clearMap () {
        console.log('清楚地图覆盖物...')
        this.map.clearOverlays()
    }
    // 渲染地图
    public renderMap () {
        this.map =new this.BMap.Map('map-container')
        this.map.centerAndZoom(new this.BMap.Point(120.152449, 30.244392), 12)
    }
    public formatePoints():any {
        const start = this.state.drivingData.start
        const end = this.state.drivingData.end
        const startPoint = new this.BMap.Point(start.lng, start.lat)
        const endPoint = new this.BMap.Point(end.lng, end.lat)
        return {
            startPoint,
            endPoint
        }
    }
    public drivingRun (satrtEndPoints:any) {
        const myIcon = new this.BMap.Icon(carIcon, new this.BMap.Size(44, 20), {    // 小车图片
		    imageOffset: new this.BMap.Size(0, 0)    // 图片的偏移量。为了是图片底部中心对准坐标点。
	    });
        const driving = new this.BMap.DrivingRoute(this.map, {
            renderOptions:{
                map: this.map,
                autoViewport: true, // 自动调整地图视野
                // enableRotation: true
            }
        });    // 驾车实例
		driving.search(satrtEndPoints.startPoint, satrtEndPoints.endPoint);
		driving.setSearchCompleteCallback(() => {
			const pts = driving.getResults().getPlan(0).getRoute(0).getPath();    // 通过驾车实例，获得一系列点的数组
			const paths = pts.length;    // 获得有几个点

            const carMk = new this.BMap.Marker(pts[0],{icon:myIcon});
            this.map.addOverlay(carMk);
            
			const resetMkPoint = (i:number) => {
				carMk.setPosition(pts[i]);
				if(i < paths){
					setTimeout(() => {
						i++;
						resetMkPoint(i);
					},100);
				}
			}
			setTimeout(() => {
				resetMkPoint(5);
			},100)

		});
    }
    // 显示轨迹
    public renderDriving (data:any) {
        this.clearMap()
        this.setState({
            carInfo: data.carInfo,
            drivingData: {
                start: data.start,
                end: data.end
            }
        })
        
        const satrtEndPoints = this.formatePoints()
        const driving = new this.BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true}});
        driving.search(satrtEndPoints.startPoint, satrtEndPoints.endPoint);
        this.drivingRun(satrtEndPoints)
    }
    public renderLushu(data:any) {
        this.clearMap()
        this.setState({
            carInfo: data.carInfo,
            drivingData: {
                start: data.start,
                end: data.end
            }
        })
        // 以下改为路书代码
        const satrtEndPoints = this.formatePoints()
        const driving = new this.BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true}});
        driving.search(satrtEndPoints.startPoint, satrtEndPoints.endPoint);
    }
    public render () {
        const bindrenderDriving = ((drivingData: any) => {
            this.renderDriving(drivingData)
        })
        const bindrenderLushu = ((drivingData: any) => {
            this.renderLushu(drivingData)
        })
        return (
            <div className="bikemap-page-wrap">
                <Card>
                    <CarForm renderDriving={bindrenderDriving} renderLushu={bindrenderLushu} />
                </Card>
                <Card className="mt-10">
                    <div>
                        <Row gutter={10}>
                            <Col span={6}>
                                <label>车主:</label>
                                <span>{this.state.carInfo.owner}</span>
                            </Col>
                            <Col span={6}>
                                <label>车主手机号:</label>
                                <span>{this.state.carInfo.phone}</span>
                            </Col>
                            <Col span={6}>
                                <label>车牌:</label>
                                <span>{this.state.carInfo.plate}</span>
                            </Col>
                            <Col span={6}>
                                <label>车型:</label>
                                <span>{this.state.carInfo.type}</span>
                            </Col>
                        </Row>
                    </div>
                    <div id="map-container" style={{height: 480}} />
                </Card>
            </div>
        )
    }
}

export default BikeMapPage