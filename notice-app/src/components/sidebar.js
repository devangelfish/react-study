import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchinitialDataAsync } from '../action';
import NoticeWrapper from './notice-wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { onHideSidebar } from '../action'
import './css/sidebar.css'

const Sidebar = () => {
    const { sidebar, data } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchinitialDataAsync().then((result) => {
            dispatch(result)
        })
    }, [dispatch])

    return (<div id="side-bar" className={sidebar ? 'full-height margin-anim' : 'full-height margin-anim left-hide'}>
    <FontAwesomeIcon id="grip" icon={faGripLinesVertical} onClick={() => dispatch(onHideSidebar(!sidebar))} />
    <ul>
        {data?.map(category =>
            <NoticeWrapper key={category.no} category={category} />
        )}
    </ul>
</div>)
}

export default Sidebar