import React from 'react'
import { NoticeContainer } from '../container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import './css/notice-wrapper.css'

const NoticeWrapper = ({categoryNo, categoryName, writings, hidden, onHideNotice}) =>
    <li>
        <div id="tap-title" key={categoryNo}>{categoryName}<FontAwesomeIcon id="down-arrow" icon={faAngleDoubleDown} onClick={() => onHideNotice(categoryNo)} /></div>
        <NoticeContainer writings={writings} hidden={hidden} />
    </li>


export default NoticeWrapper