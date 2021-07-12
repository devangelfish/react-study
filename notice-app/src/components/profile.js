import './css/profile.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlink, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Profile = ({children}) => {
    const { token, id } = useSelector(state => state.auth)

    if(!token) {
        return children
    }

    return (
    <div id="admin-info">
        <div id="welcome-message">{id} 님 환영합니다.</div>
    </div>)
}

export default Profile