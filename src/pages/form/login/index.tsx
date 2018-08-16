import * as React from 'react'
import {Card, Input, Button, Form, Icon, Checkbox, message} from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import './index.less'
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
        const userInfo:any = this.props.form.getFieldsValue();
        e.preventDefault()
        this.props.form.validateFields((err:any, values:string) => { 
            if(!err) {
                message.success(`登录成功！${userInfo.userName}, 您的当前密码是: ${userInfo.password},${userInfo.remember ? '记住密码' : '不记住密码'}`)
            }
        })
    }
    public render () {
        // getFieldDecorator:用于和表单进行双向绑定
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login-form-wrap">
                <Card title="登录" className="login-card">
                <Form onSubmit={this.handleSubmit} className="login-form">
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
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名/手机/邮箱" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                initialValue: '',
                                rules:[
                                    {
                                        required: true,
                                        message:'请输入密码'
                                    },
                                    {
                                        pattern: new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$', 'g'),
                                        message:'密码必须是8~16位数字字母组合'
                                    }
                                ]
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName:'checked',
                            initialValue: true
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a href="#" className="login-form-forgot">忘记密码</a>
                    {/* </Form.Item> */}
                    {/* <Form.Item> */}
                        <Button type="primary" htmlType="submit"  className="login-form-button">登录</Button>
                        没有账号？ <a href="">注册新用户</a>
                    </Form.Item>
                </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(LoginForm)