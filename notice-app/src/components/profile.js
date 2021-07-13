import './css/profile.css'
import './css/common.css'
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
        <div id="welcome-message" class="fleft ellipsis">{id} 님 환영합니다.</div>
        <FontAwesomeIcon icon={faTrashAlt} class="tool fleft"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faUnlink} class="tool fleft"></FontAwesomeIcon>
    </div>)
}

export default Profile