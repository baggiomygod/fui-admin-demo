import * as React from 'react'
import { Modal } from 'antd';
import Axios from 'src/axios'
const axios = new Axios()
import './personDetail.less'
interface IDetail {
    name?:string
    age?:number
    address?:string
    sex?:string
    phone?:string
    job?:string
}
interface IState {
    visible: boolean
    detail: IDetail
}

interface IPersonDetail {
    onRef: any
}
class PersonDetail extends React.Component<IPersonDetail> {
    public state: IState = {
        visible: false,
        detail: {
            name:'',
            age:0,
            address:'',
            sex:'',
            phone:'',
            job:''
        }
    }
    constructor(props: IPersonDetail) {
        super(props)
        this.showPersonModal = this.showPersonModal.bind(this)
        this.handleOK = this.handleOK.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    public componentDidMount(){
        this.props.onRef(this) // 调用父组件onRef方法,传入this
    }
    public showPersonModal(): void {
        this.setState({
            visible: true
        })
    }
    public getPersonData (id: string) {
        axios.ajax({
            url: 'person/' + id,
            method: 'get'
        }).then((res:any) => {
            if (res.code === 0) {
                this.showPersonModal()
                this.setState({
                    detail: res.obj
                })
            } else {
                console.log(res.code)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    public handleOK(): void {
        this.setState({
            visible: false
        })
    }
    public handleCancel(): void {
        this.setState({
            visible: false,
        })
    }
    public render () {
        return (
            <Modal title="详情"
                className="person-detail-modal"
                visible={this.state.visible}
                onOk={this.handleOK}
                onCancel={this.handleCancel}
                okText="确认"
                cancelText="取消"
                cancelButtonProps={{disabled: true}}>
                <div>
                    <label>姓名:</label>
                    <span>{this.state.detail.name}</span>
                </div>
                <div>
                    <label>年龄:</label>
                    <span>{this.state.detail.age}</span>
                </div>
                <div>
                    <label>地址:</label>
                    <span>{this.state.detail.address}</span>
                </div>
                <div>
                    <label>性别:</label>
                    <span>{this.state.detail.sex}</span>
                </div>
                <div>
                    <label>手机:</label>
                    <span>{this.state.detail.phone}</span>
                </div>
                <div>
                    <label>工作:</label>
                    <span>{this.state.detail.job}</span>
                </div>
            </Modal>
        )
    }
}

export default PersonDetail