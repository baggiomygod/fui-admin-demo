import * as React from 'react'
import{Row, Col, Form, Input, Button, Card} from 'antd'
import { FormComponentProps } from 'antd/lib/form'; // 使用FormComponentProps 必须调用Form.create()
const FormItem = Form.Item

class SearchGroup extends React.Component<FormComponentProps, any>{
    constructor(props: FormComponentProps) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
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
    public render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="search-group-wrap">
                <Card title="单行搜索">
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
                                    <Button type="primary" htmlType="submit">搜索</Button>
                                    <Button type="default" style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        )
    }
}
const SearchGroupPage = Form.create()(SearchGroup)
export default SearchGroupPage