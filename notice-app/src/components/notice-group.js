import NoticeLink from "./notice-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import './css/notice-group.css'

const NoticeGroup = ({title, list}) =>
<li>
    <div id="tap-title">{title}<FontAwesomeIcon id="down-arrow" icon={faAngleDoubleDown} /></div>
    <NoticeLink list={list} />
</li>

export default NoticeGroup