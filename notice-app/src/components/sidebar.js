import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchinitialDataAsync } from '../action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { onHideSidebar } from '../action'
import Category from './category';
import './css/sidebar.css'
import './css/common.css'

const Sidebar = () => {
    const { sidebar, data } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchinitialDataAsync().then((result) => {
            dispatch(result)
        })
    }, [])

    return (<div id="side-bar" className={sidebar ? 'full-screen margin-anim' : 'full-screen margin-anim left-hide'}>
    <FontAwesomeIcon id="grip" icon={faGripLinesVertical} onClick={() => dispatch(onHideSidebar(!sidebar))} />
    <ul>
        {data.map(category =>
            <Category key={category.no} category={category} />
        )}
    </ul>
</div>)
}

export default Sidebar