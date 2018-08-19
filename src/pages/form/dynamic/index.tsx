import * as React from 'react'
import { Form, Button, Icon, Card, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
const FormItem = Form.Item
import './index.less'
let uuid = 0
class Dynamic extends React.Component<FormComponentProps, any>{
    constructor(props: FormComponentProps) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }
    // public componentWillMount() {
    // }
    public handleSubmit(e:any) {
        console.log('submit...')
        e.preventDefault()
        this.props.form.validateFields((err:any, values:any) => {
            if (!err) {
                console.log('submit values:', values)
            }
        })
    }
    public add() {
        const { form } = this.props
        const keys = form.getFieldValue('keys')
        const nextKeys = keys.concat(uuid)
        uuid++
        form.setFieldsValue({ // 设置一组输入控件的值
            keys: nextKeys
        })
    }
    public remove(k:string) {
        const {form} =this.props
        const keys = form.getFieldValue('keys')
        if (keys.length === 1) {
            return
        }
        const newKeys = keys.filter((key:string) => key !== k)
        form.setFieldsValue({
            keys: newKeys
        })
    }
    public render() {
        const { getFieldDecorator, getFieldValue } = this.props.form
        const formItemLayout = {
            labelCol:{
                xs: {span: 24},
                sm: {span: 4}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 20}
            }
        }
        const formItemLayoutWithoutLabel = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 20, offset: 4}
            }
        }
        getFieldDecorator('keys', {initialValue: []})
        const keys = getFieldValue('keys')
        const formItems = keys.map((k:string, index:number) => {
            return (
                <FormItem 
                {...(index === 0 ? formItemLayout : formItemLayoutWithoutLabel)}
                key={k}
                label={index === 0 ? '测试' : ''}>
                    {   
                        getFieldDecorator(`names[${k}]`, { // names是哪里来的？
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [{
                                required: true,
                                whitespace: true,
                                message: '请输入'
                            }]
                        })(
                            <Input placeholder="请输入" style={{width: '60%', marginRight: 8}}/>
                        )
                    }
                    {/*  添加onClick={this.remove(k)}  
                    warning: Cannot update during an existing state transition (such as within `render` or another component's constructor). 
                    Render methods should be a pure function of props and state; 
                    constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`. 
                    原因：因为这里是立即执行函数，添加新的元素后 立即执行了remove

                    解决：this.remove.bind(this, k) 这种方式传入参数
                    或者{() => this.remove(k)} // 但是这种方式会报错，如果使用需要解除ts-lint这个规则的检查：Lambdas are forbidden in JSX attributes due to their rendering performance impact
                    */}

                    {
                        keys.length > 1 
                            ? (
                                <Icon className="dynamic-delete-button"
                                    onClick={this.remove.bind(this, k)}
                                    type="minus-circle-o" />
                            ) 
                            : null
                    }
                </FormItem>
            )
        })
        return (
            <div className="dynamic-form-wrap">
                <Card title="动态增加表单">
                    <Form onSubmit={this.handleSubmit}>
                        {formItems}
                        <FormItem {...formItemLayoutWithoutLabel}>
                            <Button type="dashed" style={{width: '60%'}} onClick={this.add}>
                                <Icon type="plus" />添加
                            </Button>
                        </FormItem>
                        <FormItem {...formItemLayoutWithoutLabel}>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </FormItem>
                    </Form>
                </Card>
                
            </div>
        )
    }
}

const DynamicPage = Form.create()(Dynamic)
export default DynamicPage