import * as React from 'react'
import{Row, Col, Form, Input, Button, Card} from 'antd'
const FormItem = Form.Item
interface ISearchProps{
    name?: string
}
class SearchGroup extends React.Component<ISearchProps, any>{
    constructor(props: ISearchProps) {
        super(props)
        this.searchTable = this.searchTable.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    public searchTable() {
        console.log('search...')
    }
    public handleReset() {
        console.log('reset')
    }
    public render () {
        
        return (
            <div className="search-group-wrap">
                <Card title="单行搜索">
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
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default SearchGroup