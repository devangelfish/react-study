import './css/common.css'
import React from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './sidebar'
import Container from './container'
import Categories from './categories'
import Profile from './profile'
import Login from './login';

const App = () => {
    return <div id="wrapper" className="full-screen">
        <Router>
            <Switch>
                <Route path='/' exact={true} render={() => 
                <Container>
                    <Sidebar>
                        <Profile>
                            <Link to='/login'>로그인</Link>
                        </Profile>
                        <Categories />
                    </Sidebar>
                </Container>}>
                </Route>
                <Route path='/login' component={Login}/>
            </Switch>
        </Router>
    </div>
}


export default App