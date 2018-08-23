import * as React from 'react'
import { Card, Table, Popconfirm } from 'antd'
import Axios from 'src/axios'
import FilterForm from './FilterForm'
import PersonDetail from './PersonDetail'
const axios = new Axios()

// import axios from 'src/axios'
// import utils from 'src/utils/utils'
import './index.less'

class PersonPage extends React.Component{
    public state = {
        list: [],
        loading: false,
        pagination: {}
    }
    // 这里类型设为any，否者handleTableChange会报错：this.filterForm.requestList(pager)  没有requestList属性
    public filterForm:any = React.createRef();
    public personDetail:any = React.createRef();
    constructor(props:any) {
        super(props)
        this.getTableData = this.getTableData.bind(this)
        this.handleDel = this.handleDel.bind(this)
        this.viewDetail = this.viewDetail.bind(this)
        this.handleTableChange = this.handleTableChange.bind(this)
        this.onFilterFormRef = this.onFilterFormRef.bind(this)
        this.onDetailRef= this.onDetailRef.bind(this)
        this.openPositionPage= this.openPositionPage.bind(this)
    }
    public getTableData(res: any) {
        const pagination:any = {...this.state.pagination}
        pagination.total = res.total
        this.setState({
            list: res.obj,
            loading: false,
            pagination
        })

    }
   // 翻页
    public handleTableChange(pagination:any, filters:any, sorter:any) {
            const pager:any = pagination;
            this.filterForm.requestList(pager)
    }
    public handleDel(id:string) {
        axios.ajax({
            url: 'person/' + id,
            method: 'delete' // axios delete 时显示requestmethos: options?
        }).then((res:any) => {
            console.log(this.state.pagination)
            if (res.code === 0) {
                this.filterForm.requestList()
            }
        }).catch(err => {
            console.log(err)
        })
    }
    public viewDetail(id:string) {
        this.setState({
            loading: true
        })
        this.personDetail.getPersonData(id)
        this.setState({
            loading: false
        })
    }
    public openPositionPage(id: string | number) {
        window.open(`/#/common/person/position/${id}`,'_blank')
    }
    // 子组件调用这个方法传入子组件的this
    public onFilterFormRef(ref:any) {
        this.filterForm = ref // 执行后this.filterForm === 子组件的this
    }
    public onDetailRef(ref:any) {
        this.personDetail = ref
    }
    public render () {
        
        const columns = [
            {title: '城市', dataIndex: 'city'},
            {title: '人员类型', dataIndex: 'person_type'},
            {title: '姓名', dataIndex: 'name'},
            {title: '手机号', dataIndex: 'phone'},
            // {title: '位置', dataIndex: 'position'},
            {title: '操作',
            render: (text:string, item:any) => {
                const bindHandleDel = () => {
                    this.handleDel(item.id)
                }
                const bindViewDetail = () => {
                    this.viewDetail(item.id)
                }
                const bindOpenPosition = () => {
                    this.openPositionPage(item.id)
                }
                return (
                    <div className="operate-btns">
                        <a onClick={bindViewDetail}>详情</a>
                        <Popconfirm title="确认删除?" cancelText="取消" okText="确定" onConfirm={bindHandleDel}>
                            <a href="#">删除</a>
                        </Popconfirm>
                        <a onClick={bindOpenPosition}>查看位置</a>
                    </div>
                    )
            }}
        ]
        const bindPropFun = (list: any[]) => {
            this.setState({
                loading: true
            })
            this.getTableData(list)
        }
        return (
            <div className="person-page-wrap">
                <Card>
                    <FilterForm getTableData={bindPropFun} onRef={this.onFilterFormRef}/>
                </Card>
                <Card className="content-wrap mt-10">
                    <Table
                        bordered={true}
                        columns={columns}
                        rowKey="id"
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        dataSource={this.state.list}
                        onChange={this.handleTableChange}
                    />
                </Card>
                <PersonDetail onRef={this.onDetailRef} />
            </div>
        )
    }
}

// const FilterForms = Form.create(FilterForm)
export default PersonPage