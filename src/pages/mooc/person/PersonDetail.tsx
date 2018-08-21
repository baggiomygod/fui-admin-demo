import * as React from 'react'
import { Modal } from 'antd';
import Axios from 'src/axios'
const axios = new Axios()

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
                visible={this.state.visible}
                onOk={this.handleOK}
                onCancel={this.handleCancel}
                okText="确认"
                cancelText="取消"
                cancelButtonProps={{disabled: true}}>
                <p>姓名:{this.state.detail.name}</p>
                <p>年龄:{this.state.detail.age}</p>
                <p>地址:{this.state.detail.address}</p>
                <p>性别:{this.state.detail.sex}</p>
                <p>手机:{this.state.detail.phone}</p>
                <p>工作:{this.state.detail.job}</p>
            </Modal>
        )
    }
}

export default PersonDetail