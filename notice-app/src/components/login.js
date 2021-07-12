import './css/login.css'
import { useState } from "react"
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAuthToken } from "../action"

const Login = ({location}) => {
    const dispatch = useDispatch()

    const [ id, setId ] = useState()
    const [ password, setPassword] = useState()

    const login = () => {
        getAuthToken({ id, password }).then(result => dispatch(result))
    }

    const { token } = useSelector(state => state.auth)
    const { from } = location.state || { from: { pathname: "/" } };

    if(token) {
        return <Redirect to={from}/>
    } 

    return <div id="login-container">
        <div id="user-information">
            <div className="wrapper">
                <input type="text" id="id" className="block-input" placeholder="아이디를 입력하세요" onChange={({target: { value }}) => setId(value)}/>
            </div>
            <div className="wrapper">
                <input type="password" id="pw" className="block-input" placeholder="비밀번호를 입력하세요" onChange={({target: { value }}) => setPassword(value)} />
            </div>
            <div className="wrapper">
                <div id="wait"></div>
                <input type="button" value="로그인" id="login-button" className="block-input login" onClick={() => login()} />
            </div>
        </div>
    </div>
}

export default Login