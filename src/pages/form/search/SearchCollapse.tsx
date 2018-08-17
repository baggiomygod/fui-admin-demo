import * as React from 'react'
import{Row, Col, Form, Input, Button, Card, Icon} from 'antd'
// import { FormComponentProps } from 'antd/lib/form';
const FormItem = Form.Item
// interface ISearchProps extends FormComponentProps{
interface ISearchProps{
    name?: string
}

class SearchGroup extends React.Component<ISearchProps, any>{
    public state = {
        expand: false
    }
    constructor(props: ISearchProps) {
        super(props)
        this.searchTable = this.searchTable.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    public searchTable() {
        console.log('search...')
    }
    public handleReset() {
        console.log('reset')
    }
    public toggle() {
        const { expand } = this.state
        this.setState({
            expand: !expand
        })
    }
    public getFields() {
        const count =  this.state.expand ? 8 : 0
        // const { getFieldDecorator } = this.props.form
        if (count > 0) {
        return (
                <Row gutter={10}>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                        </Row>
            )} else {
                return null
            }
    }
    public render () {
        
        return (
            <div className="search-collapse-wrap">
                <Card title="折叠搜索">
                    <Form onSubmit={this.searchTable}>
                        <Row gutter={10}>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Input placeholder="labelName" />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Button type="primary" htmlType="submit">搜索</Button>
                                    <Button type="default" style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
                                    <a onClick={this.toggle} style={{marginLeft: 10}}>
                                        <Icon type={this.state.expand ? 'up' : 'down'} />
                                        {this.state.expand ? '收起' : '展开'}
                                    </a>
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

export default SearchGroup
