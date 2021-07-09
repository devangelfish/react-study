import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { onHideSidebar } from '../action'
import './css/sidebar.css'
import './css/common.css'

const Sidebar = ({ children }) => {
    const sidebar = useSelector(state => state.sidebar)
    const dispatch = useDispatch()

    return <div id="side-bar" className={sidebar ? 'full-screen margin-anim' : 'full-screen margin-anim left-hide'}>
        <FontAwesomeIcon id="grip" icon={faGripLinesVertical} onClick={() => dispatch(onHideSidebar(!sidebar))} />
        {children}
    </div>
}

export default Sidebar