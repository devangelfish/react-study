import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Notice from './notice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import { foldCategory } from '../action'
import './css/notice-wrapper.css'

const NoticeWrapper = ({id}) => {

    const category = useSelector(state => state.data[id])
    const {no, name, writing, fold} = category

    const dispatch = useDispatch();

    return (<li>
        <div id='tap-title' key={no}>{name}<FontAwesomeIcon id='up-arrow' style={fold ? {transform: 'rotate(180deg)'}: null} icon={faAngleDoubleUp} onClick={() => dispatch(foldCategory(category, !fold))} /></div>
        <Notice writing={writing} fold={fold} />
    </li>)
}

export default NoticeWrapper