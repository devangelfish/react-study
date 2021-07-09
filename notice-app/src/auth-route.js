import React from "react"
import { useSelector } from "react-redux"
import { Route } from "react-router-dom"
import Login from './components/login'

const AuthRoute = ({ path, exact = true, component }) => {
    const { token } = useSelector(state => state.auth)
    return <Route exact={exact} path={path} component={token ? component : Login}></Route>
}

export default AuthRoute
