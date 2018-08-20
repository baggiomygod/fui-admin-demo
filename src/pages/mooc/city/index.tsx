import * as React from 'react'
import { Card, Table } from 'antd'
import FilterForm from './FilterForm'
// import axios from 'src/axios'
// import utils from 'src/utils/utils'

class CityPage extends React.Component{
    public state = {
        list: []
    }
    constructor(props:any) {
        super(props)
        this.getTableData = this.getTableData.bind(this)
    }
    public getTableData(list: any) {
        this.setState({
            list
        })
    }
    public render () {
        const columns = [
            {title: '城市', dataIndex: 'city'},
            {title: '人员类型', dataIndex: 'person_type'},
            {title: '姓名', dataIndex: 'name'},
            {title: '手机号', dataIndex: 'phone'},
            {title: '操作', dataIndex: 'operate'}
        ]
        const bindPropFun = (list: any[]) => {
            this.getTableData(list)
        }
        return (
            <div className="city-page-wrap">
                <Card>
                    <FilterForm getTableData={bindPropFun} />
                </Card>
                <Card className="content-wrap" style={{marginTop: 10}}>
                    <Table
                        bordered={true}
                        columns={columns}
                        rowKey="city"
                        dataSource={this.state.list}
                    />
                </Card>
            </div>
        )
    }
}

// const FilterForms = Form.create(FilterForm)
export default CityPage