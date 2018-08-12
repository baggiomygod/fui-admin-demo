import * as React from 'react'
import {Button, notification} from 'antd'
interface IProps {
    name?:string
}

class NotidicationPage extends React.Component{
    constructor(props: IProps) {
        super(props)
        this.openNotification = this.openNotification.bind(this)
    }
    public openNotification(type:string) {
        notification[type]({
            message:'通知标题',
            description: '描述...'
        })
    }

    // onClick={handler} // 方法不是void类型的 ”不能写括号“，否则会报错，类型不匹配：Types of property 'onClick' are incompatible.
    // 标签里使用() => {}会报错：Lambdas are forbidden in JSX attributes due to their rendering performance impact
    // 解决 使用bind传递参数
    public render () {
        return (
            <div className="notification-page-wrap">
                <Button type="primary" onClick={ this.openNotification.bind(this, 'success') }>Open the notification box</Button>
            </div>
        )
    }
}

export default NotidicationPage