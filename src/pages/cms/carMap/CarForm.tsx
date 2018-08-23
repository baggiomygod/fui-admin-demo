import * as React from 'react'
import {Button} from 'antd'
import Axios from 'src/axios'
import './carForm.less'

const axios = new Axios()
interface ICarProps {
    renderDriving: any
    renderLushu: any
}
class CarForm extends React.Component<ICarProps> {
    constructor(props:ICarProps) {
        super(props)
        this.getCarDriving = this.getCarDriving.bind(this)
        this.getCarLushu = this.getCarLushu.bind(this)
    }
    public getCarDriving() {
        axios.ajax({
            url:'car_driving',
            method: 'post'
        }).then((res:any) => {
            if (res.code === 0) {
                //  数据传给父组件
                this.props.renderDriving(res.obj)
            }
        }).catch((err:any) => {
            console.log(err)
        })
    }
    public getCarLushu() {
        axios.ajax({
            url:'car_driving',
            method: 'post'
        }).then((res:any) => {
            if (res.code === 0) {
                //  数据传给父组件
                this.props.renderLushu(res.obj)
            }
        }).catch((err:any) => {
            console.log(err)
        })
    }
    public render() {
        return (
            <div className="car-form-wrap">
                <Button type="primary" onClick={this.getCarDriving}>获取车辆轨迹</Button>
                <Button type="primary" onClick={this.getCarLushu}>路书(未完)</Button>
                <Button type="primary">热力图(未完)</Button>
                <Button type="primary">闪烁(未完)</Button>
                <Button type="primary">交通轨迹(未完)</Button>
                <Button type="primary">绘制(未完)</Button>
            </div>
        )
    }
}
export default CarForm