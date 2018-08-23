import * as React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from 'src/App/App'
import Layout from 'src/App/app-components/layout/layout'
import DetailLayout from 'src/App/app-components/DetailLayout'
import Home from 'src/pages/home'
// import NoMatch from 'src/pages/nonatch'
// UI
import ButtonPage from 'src/pages/ui/button'
import DialogPage from 'src/pages/ui/dialog'
import LoadingPage from 'src/pages/ui/loading'
import NotificationPage from 'src/pages/ui/notification'
import ListPage from 'src/pages/ui/list'
import PicPage from 'src/pages/ui/pic'
import BannerPage from 'src/pages/ui/banners'
import TabsPage from 'src/pages/ui/tabs'
import TipsPage from 'src/pages/ui/tips'

// Form
import LoginPage from 'src/pages/form/login'
import RegPage from 'src/pages/form/regist'
import SearchForm from 'src/pages/form/search'
import dynamicForm from 'src/pages/form/dynamic'

// table
import TablePage from 'src/pages/table/base-table'
import AdvTablePage from 'src/pages/table/adv-table'

// cms
import CarMapPage from 'src/pages/cms/carMap'
import PersonPositionPage from 'src/pages/cms/person/PersonPostionPage'
import PersonPage from 'src/pages/cms/person'
import RichPage from 'src/pages/cms/rich'
import TeamPage from 'src/pages/cms/team'

// echarts
import BarPage from 'src/pages/echarts/bar'
import LinePage from 'src/pages/echarts/line'
import PiePage from 'src/pages/echarts/pie'

// setting
import PermissionPage from 'src/pages/setting/permission'

export default class ERouter extends React.Component {
    public render() {
        const adminRouderRender = (): any => (
                <Layout>
                    <Switch>
                        <Route exact={true} path="/admin/home" component={Home} />
                        <Route exact={true} path="/admin/ui/buttons" component={ButtonPage} />
                        <Route exact={true} path="/admin/ui/dialogs" component={DialogPage} />
                        <Route exact={true} path="/admin/ui/loadings" component={LoadingPage} />
                        <Route exact={true} path="/admin/ui/message" component={NotificationPage} />
                        <Route exact={true} path="/admin/ui/list" component={ListPage} />
                        <Route exact={true} path="/admin/ui/pic" component={PicPage} />
                        <Route exact={true} path="/admin/ui/banners" component={BannerPage} />
                        <Route exact={true} path="/admin/ui/tabs" component={TabsPage} />
                        <Route exact={true} path="/admin/ui/tips" component={TipsPage} />

                        <Route exact={true} path="/admin/form/login" component={LoginPage} />
                        <Route exact={true} path="/admin/form/reg" component={RegPage} />
                        <Route exact={true} path="/admin/form/search" component={SearchForm} />
                        <Route exact={true} path="/admin/form/dynamic" component={dynamicForm} />

                        <Route exact={true} path="/admin/table/basic" component={TablePage} />
                        <Route exact={true} path="/admin/table/high" component={AdvTablePage} />

                        <Route exact={true} path="/admin/cms/rich" component={RichPage} />
                        <Route exact={true} path="/admin/cms/person" component={PersonPage} />
                        <Route exact={true} path="/admin/cms/user" component={TeamPage} />
                        <Route exact={true} path="/admin/cms/carMap" component={CarMapPage} />

                        <Route exact={true} path="/admin/charts/bar" component={BarPage} />
                        <Route exact={true} path="/admin/charts/pie" component={PiePage} />
                        <Route exact={true} path="/admin/charts/line" component={LinePage} />

                        <Route exact={true} path="/admin/permission" component={PermissionPage} />

                        <Redirect to="/admin/home" />
                    </Switch>
                </Layout>
        )

        const CommonPageRender = () => (
            <DetailLayout>
                <Route path="/common/person/position/:id" component={PersonPositionPage} />
            </DetailLayout>
        )
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/common" render={CommonPageRender} />
                        <Route path="/" render={adminRouderRender} />
                    </Switch>
                </App>
            </Router>
        )
    }
}