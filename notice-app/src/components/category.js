import React from 'react'
import { useDispatch } from 'react-redux';
import Writing from './writing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import { foldCategory } from '../action'
import './css/common.css'
import './css/category.css'

const Category = ({category}) => {
    const dispatch = useDispatch();

    const {no, name, fold} = category

    return (<li>
        <div id='category' key={no}>{name}<FontAwesomeIcon className='anim' id='up-arrow' style={fold  ? {transform: 'rotate(180deg)'}: null} icon={faAngleDoubleUp} onClick={() => dispatch(foldCategory(category))} /></div>
        <Writing {...category} />
    </li>)
}

export default Category