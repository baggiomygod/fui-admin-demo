import * as React from 'react'
import {Card, Input, Button, Form, Icon, Checkbox, message} from 'antd'
import { FormComponentProps } from 'antd/lib/form';
interface IUserFormProps extends FormComponentProps {
    age: number;
    name: string;
  }
class LoginForm extends React.Component<IUserFormProps, any>{
    constructor(props: IUserFormProps) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    public handleSubmit(e:any):void {
        e.preventDefault()
        this.props.form.validateFields((err:any, values:string) => { 
            if(!err) {
                console.log('form:', values)
                message.success('登录成功')
            }
        })
    }
    public render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login-page-wrap">
                <Card title="登录">
                <Form style={{width: 300}} onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {
                            getFieldDecorator('userName', {
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或者数字'
                                        }
                                    ]
                                }
                            )(
                                <Input prefix={<Icon type="user"/>} style={{color: 'rgba(0,0,0,.25)'}} placeholder="请输入用户名/手机/邮箱" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock"/>} placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>记住密码</Checkbox>
                        <a href="#" style={{float:'right'}}>忘记密码</a>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(LoginForm)