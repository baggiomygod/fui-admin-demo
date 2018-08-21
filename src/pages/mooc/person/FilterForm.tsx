import * as React from 'react'
import { Form, Select, Input, Button, Row, Col } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import Axios from 'src/axios'
const FormItem = Form.Item
const Option = Select.Option
const axios = new Axios()
interface IFilterFormProps extends FormComponentProps {
    getTableData:any
    onRef:any
}
class FilterForm extends React.Component<IFilterFormProps, any>{
    public state = {
        list: []
    }
    // public params = {
    //     page:1
    // }
    constructor(props: IFilterFormProps) {
        super(props)
        this.handleReset = this.handleReset.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.requestList = this.requestList.bind(this)
    }
    
    public componentDidMount(){
        this.requestList();
        this.props.onRef(this) // 调用父组件onRef方法,传入this
    }
    public handleReset() {
        this.props.form.resetFields()
    }
    public handleSubmit(e:any) {
        e.preventDefault()
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                this.requestList()
            }
        }) 
    }
    // 获取数据
    public requestList (pager:any = {}) {
        const params = {
            currentPage: pager.current || 1,
            city_id: '',
            person_type: '',
            name: ''
        }
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                params.city_id = values.city_id
                params.person_type = values.person_type
                params.name = values.name
            }
        })
        axios.ajax({
            url: 'person',
            method: 'post',
            data:{
                params
            }
        }).then((res:any) => {
            this.props.getTableData(res)
        }).catch((err:any) => {
            console.log(err)
        })
    }

    public render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form className="search-form-wrap" layout="inline" onSubmit={this.handleSubmit}>
                <Row gutter={10}>
                    <Col span={6}>
                        <FormItem
                            wrapperCol={{ span: 24 }} style={{ width: '100%' }}>
                            {
                                getFieldDecorator('city_id',{initialValue: ''})(
                                    <Select placeholder="城市">
                                        <Option value="">全部</Option>
                                        <Option value="beijing">北京</Option>
                                        <Option value="shanghai">上海</Option>
                                        <Option value="hangzhou">杭州</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem wrapperCol={{ span: 24 }} style={{ width: '100%' }}>
                            {
                                getFieldDecorator('person_type',{initialValue: ''})(
                                    <Select placeholder="人员类型">
                                        <Option value="">全部</Option>
                                        <Option value="focus">重点</Option>
                                        <Option value="normal">普通</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem wrapperCol={{ span: 24 }} style={{ width: '100%' }}>
                            {
                                getFieldDecorator('name',{initialValue: ''})(
                                    <Input placeholder="姓名" />
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem wrapperCol={{ span: 24 }}>
                            <Button type="primary" htmlType="submit">搜索</Button>
                            <Button type="default" style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Form>

        )
    }
}

export default Form.create()(FilterForm)