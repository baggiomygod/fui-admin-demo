import * as React from 'react'
import {Row} from 'antd'
import Header from 'src/App/app-components/Header'
class DetailLayout extends React.Component{
    public render () {
        return (
            <div>
                <Header backgroundColor="rgba(74,169,255,1)" showLogoIcon="logo" />
                <Row>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}

export default DetailLayout