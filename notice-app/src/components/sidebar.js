import React from 'react'
import { NoticeWrapperCotainer } from '../container'
import { onHideSidebar }  from '../action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import './css/sidebar.css'

const Sidebar = ({hidden, onHideSidebar, categories}) =>
    <div id="side-bar" className={hidden ? 'full-height margin-anim' : 'full-height margin-anim left-hide'}>
        <FontAwesomeIcon id="grip" icon={faGripLinesVertical} onClick={onHideSidebar} />
        <ul>
            {categories.map((category) =>
                <NoticeWrapperCotainer {...category} />
            )}
        </ul>
    </div>

export default Sidebar