import * as React from 'react'
import{Row, Col, Form, Input, Button, Card, Icon} from 'antd'
import { FormComponentProps } from 'antd/lib/form'; // 使用FormComponentProps 必须调用Form.create()
const FormItem = Form.Item
// interface ISearchProps extends FormComponentProps{
// }

class SearchCollapse extends React.Component<FormComponentProps, any>{
    public state = {
        expand: false
    }
    constructor(props: FormComponentProps) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    public handleSubmit(e: any) {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err: any, values: any) => {
            if (!err) {
                console.log('输入的内容', values)
            }
        })
    }
    public handleReset() {
        this.props.form.resetFields();
    }
    public toggle() {
        const { expand } = this.state
        this.setState({
            expand: !expand
        })
    }
    public getFields() {
        const { getFieldDecorator } = this.props.form
        const count =  this.state.expand ? 8 : 0
        // const { getFieldDecorator } = this.props.form
        if (count > 0) {
        return (
                <Row gutter={10}>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value4', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value5', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value6', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value7', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value8', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value9', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value10', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value11', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                        </Row>
            )} else {
                return null
            }
    }
    public render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="search-collapse-wrap">
                <Card title="折叠搜索">
                    <Form onSubmit={this.handleSubmit}>
                        <Row gutter={10}>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value1', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value2', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    {
                                        getFieldDecorator('value3', {
                                            rules:[{required: true, message: '请输入'}]
                                        })(
                                            <Input placeholder="labelName" />
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <a onClick={this.toggle} style={{marginRight: 10}}>
                                        <Icon type={this.state.expand ? 'up' : 'down'} />
                                        {this.state.expand ? '收起' : '展开'}
                                    </a>
                                    <Button type="primary" htmlType="submit">搜索</Button>
                                    <Button type="default" style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
                                </FormItem>
                            </Col>
                        </Row>
                        {this.getFields()}
                    </Form>
                </Card>
            </div>
        )
    }
}

const SearchCollapsePage = Form.create()(SearchCollapse)
export default SearchCollapsePage


/*
export default SearchCollapse 直接这样使用会报错

(10,18): Type '{}' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<SearchCollapse> & Readonly<{ children?: ReactNode;...'.
  Type '{}' is not assignable to type 'Readonly<FormComponentProps>'.
    Property 'form' is missing in type '{}'.

// 解决： 未知：原因需要查看官网文档？
const SearchCollapsePage = Form.create()(SearchCollapse)
export default SearchCollapsePage

*/