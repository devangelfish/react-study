import React from 'react'
import NoticeGroup from './notice-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import './css/sidebar.css'


const sidebar = ({sidebarHidden , onHide, list}) =>
<div id="side-bar" className={sidebarHidden ? 'full-height margin-anim' : 'full-height margin-anim left-hide'}>
    <FontAwesomeIcon id="grip" icon={faGripLinesVertical} onClick={onHide} />
    <ul>
        {list.map((detail, index) => 
            <NoticeGroup key={index} {...detail} />
        )}
    </ul>
</div>

export default sidebar