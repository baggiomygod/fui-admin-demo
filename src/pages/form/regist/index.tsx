import * as React from 'react'
import {
    Form,
    Input,
    AutoComplete,
    Card,
    Tooltip,
    Select,
    Icon,
    Cascader,
    Row,
    Col,
    Checkbox,
    Button,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './index.less'
const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option

// 住所
const residences = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '浙江',
        children: [{
            value: 'xihu',
            label: '西湖'
        },
        {
            value: 'binjiang',
            label: '滨江'
        }],
    }],
}, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
            value: 'zhonghuamen',
            label: '中华门',
        }],
    }],
}];

interface IRegisterProps extends FormComponentProps {
    age: number
    name: string
}
// interface RegisterForm {
//     password: string
// }
class RegistrationForm extends React.Component<IRegisterProps, any>{
    public state = {
        confirmDirty: false, // 确认密码是否通过
        autoCompleteResult: [],
        checked: false
    }
    constructor(props: IRegisterProps) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this)
        this.compareToFirstPasssword = this.compareToFirstPasssword.bind(this)
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this)
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this)
    }

    public handleSubmit(e: any) {
        e.preventDefault()
        // 与 validateFields 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围
        this.props.form.validateFieldsAndScroll((err:any, values:any) => {
            if (!err) {
                console.log('输入的内容', values)
            }
        })
    }
    public handleConfirmBlur(e: any) {
        const value = e.target.value
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value
        })
    }
    public compareToFirstPasssword(rule: object, value: string, callback: any) {
        const form = this.props.form
        // 不确定用什么类型的时候用:any
        const fieldPassword: any = form.getFieldsValue(['password'])
        if (value && value !== fieldPassword.password) {
            callback('两次输入的密码不一致，请重新输入')
        } else {
            callback()
        }
    }

    // 网址
    public handleWebsiteChange(value: string): void {
        let autoCompleteResult: any
        const pattern = /\.(com|org|net)$/g
        if (pattern.test(value)) {
            autoCompleteResult = value
            return
        }
        this.setState({
            inputWebsite: value
        })
        if (!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = [
                '.com',
                '.org',
                '.net'
            ].map(domain => `${value}${domain}`)
        }
        this.setState({
            autoCompleteResult,
            inputWebsite: value
        })
    }

    public onChangeCheckbox = (e:any) => {
        console.log('checked = ', e.target.checked);
        this.setState({
          checked: e.target.checked,
        });
      }
    public render() {
        const { getFieldDecorator } = this.props.form
        const { autoCompleteResult } = this.state
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                }
            }
        }

        // 手机号码区号选择
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        )

        // // 网站选择
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ))
        return (
            <div className="reg-page-wrap">
                <Card title="注册" className="reg-form-card">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label="邮箱">
                            {
                                getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: '请输入正确的邮箱地址'
                                        },
                                        {
                                            required: true,
                                            message: '请输入邮箱'
                                        }]
                                })(
                                    <Input />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="密码">
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入密码'
                                        },
                                        {
                                            pattern: new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$', 'g'),
                                            message: '密码必须是8~16位数字字母组合'
                                        }
                                    ]
                                })(
                                    <Input type="password" />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="确认密码">
                            {
                                getFieldDecorator('confirm', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请再次输入密码'
                                        },
                                        {
                                            validator: this.compareToFirstPasssword
                                        }
                                    ]
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout}
                            label={(
                                <span>
                                    昵称&nbsp;
                                        <Tooltip title="您惯用的网名?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            )}>
                            {
                                getFieldDecorator('nickname', {
                                    rules: [{
                                        required: true,
                                        message: '请输入您的昵称',
                                        whitespace: true // 空格是否会被视为错误
                                    }]
                                })(
                                    <Input />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="常住地址">
                            {
                                getFieldDecorator('residence', {
                                    initialValue: ['zhejiang', 'hangzhou', 'binjiang'],
                                    rules: [
                                        {
                                            type: 'array',
                                            required: true,
                                            message: '请选择您的常住地'
                                        }
                                    ]
                                })(
                                    <Cascader options={residences} />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="手机号">
                            {
                                getFieldDecorator('phone', {
                                    rules: [{ required: true, message: '请输入手机号' },
                                    { pattern: /^1[0-9]{10}$/, message: '请输入正确的手机号' }]
                                })(
                                    <Input addonBefore={prefixSelector}
                                        style={{ width: '100%' }} />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="个人网站" >
                            {getFieldDecorator('website', {
                                rules: [{ required: true, message: 'Please input website!' }],
                            })(
                                <AutoComplete
                                    dataSource={websiteOptions}
                                    onChange={this.handleWebsiteChange}
                                    placeholder="website" >
                                    <Input />
                                </AutoComplete>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="验证码" extra="请输入验证码">
                            <Row gutter={8}>
                                <Col span={12}>
                                    {
                                        getFieldDecorator('captcha', {
                                            rules: [{
                                                required: true, message: '请输入验证码'
                                            }]
                                        })(
                                            <Input />
                                        )
                                    }
                                </Col>
                                <Col span={12}>
                                    <Button>获取验证码</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            {
                                getFieldDecorator('argeement', {
                                    valuePropName: 'checked'
                                }
                                )(
                                    <Checkbox onChange={this.onChangeCheckbox}>
                                        您已经阅读了
                                            <a href="#">协议</a>
                                    </Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" disabled={!this.state.checked} >注册</Button>
                        </FormItem>
                    </Form>

                </Card>
            </div>
        )
    }
}
const RegistrationPage = Form.create()(RegistrationForm)
export default RegistrationPage