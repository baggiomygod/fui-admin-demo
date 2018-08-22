import * as React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from 'src/App/App'
import Layout from 'src/App/app-components/layout/layout'
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

// mooc
import CarMapPage from 'src/pages/mooc/carMap'
// import CityPage from 'src/pages/mooc/city'
import PersonPage from 'src/pages/mooc/person'
import RichPage from 'src/pages/mooc/rich'
import TeamPage from 'src/pages/mooc/team'

// echarts
import BarPage from 'src/pages/echarts/bar'
import LinePage from 'src/pages/echarts/line'
import PiePage from 'src/pages/echarts/pie'

// map
import DrawPage from 'src/pages/map/draw'
import DrivingPage from 'src/pages/map/driving'
import HotPage from 'src/pages/map/hot'
import LinesPage from 'src/pages/map/lines'
import LushuPage from 'src/pages/map/lushu'
import MarkerPage from 'src/pages/map/marker'

// setting
import PermissionPage from 'src/pages/setting/permission'

export default class ERouter extends React.Component {
    public render() {
        return (
            <Router>
                <App>
                    <Layout>
                        <Switch>
                            <Route exact={true}  path='/admin/home' component={Home} />
                            <Route exact={true}  path="/admin/ui/buttons" component={ButtonPage} />
                            <Route exact={true}  path="/admin/ui/dialogs" component={DialogPage} />
                            <Route exact={true}  path="/admin/ui/loadings" component={LoadingPage} />
                            <Route exact={true}  path="/admin/ui/message" component={NotificationPage} />
                            <Route exact={true}  path="/admin/ui/list" component={ListPage} />
                            <Route exact={true}  path="/admin/ui/pic" component={PicPage} />
                            <Route exact={true}  path="/admin/ui/banners" component={BannerPage} />
                            <Route exact={true}  path="/admin/ui/tabs" component={TabsPage} />
                            <Route exact={true}  path="/admin/ui/tips" component={TipsPage} />

                            <Route exact={true}  path="/admin/form/login" component={LoginPage} />
                            <Route exact={true}  path="/admin/form/reg" component={RegPage} />
                            <Route exact={true}  path="/admin/form/search" component={SearchForm} />
                            <Route exact={true}  path="/admin/form/dynamic" component={dynamicForm} />
                            
                            <Route exact={true}  path="/admin/table/basic" component={TablePage} />
                            <Route exact={true}  path="/admin/table/high" component={AdvTablePage} />

                            <Route exact={true}  path="/admin/mooc/rich" component={RichPage} />
                            <Route exact={true}  path="/admin/mooc/person" component={PersonPage} />
                            <Route exact={true}  path="/admin/mooc/user" component={TeamPage} />
                            <Route exact={true}  path="/admin/mooc/carMap" component={CarMapPage} />

                            <Route exact={true}  path="/admin/charts/bar" component={BarPage} />
                            <Route exact={true}  path="/admin/charts/pie" component={PiePage} />
                            <Route exact={true}  path="/admin/charts/line" component={LinePage} />

                            <Route exact={true}  path="/admin/map/marker" component={MarkerPage} />
                            <Route exact={true}  path="/admin/map/driving" component={DrivingPage} />
                            <Route exact={true}  path="/admin/map/lushu" component={LushuPage} />
                            <Route exact={true}  path="/admin/map/hot" component={HotPage} />
                            <Route exact={true}  path="/admin/map/lines" component={LinesPage} />
                            <Route exact={true}  path="/admin/map/draw" component={DrawPage} />

                            <Route exact={true}  path="/admin/permission" component={PermissionPage} />

                            <Redirect to="/admin/home" />
                        </Switch>
                    </Layout>
                </App>
            </Router>
        )
    }
}