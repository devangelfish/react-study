import './css/contents.css'
import './css/common.css'
import { useSelector } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import AuthRoute from "./auth-route"
import UserContents from './user-contents'
import AdminContents from './admin-contents';
import './css/container.css'

const Container = () => {
    const { sidebar } = useSelector(state => state)

    return (
        <div id="container" className={sidebar ? 'margin-anim right-hide full-screen' : 'margin-anim full-screen'}>
            <Router>
                <Switch>
                    <Route exact path="/" component={UserContents} />
                    <AuthRoute path="/admin" component={AdminContents} />
                </Switch>
            </Router>
        </div>)
}

export default Container